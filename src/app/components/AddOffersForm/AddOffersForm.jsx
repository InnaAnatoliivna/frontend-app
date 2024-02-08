import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { TextField, Select, MenuItem, Checkbox, FormControlLabel, Button, Grid, Typography, InputLabel, OutlinedInput, Chip, FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/Container';
import { courtTypes, jobType, proffesionTypesArray } from '@/utils/filterElements';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import { addOffers } from '@/redux/offers/operations';
import { fetchProvinces } from '@/redux/terc/operations';
import { fetchCities } from '@/redux/simc/operations';
import { selectCities } from '@/redux/simc/selectors';
import { selectProvinces } from '@/redux/terc/selectors';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, proffesionType, theme) {
    return {
        fontWeight:
            proffesionType.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const AddOffersForm = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const cities = useSelector(selectCities);
    const provinces = useSelector(selectProvinces);
    // for create object
    const [title, setTitle] = useState(''); console.log('title :', title) //.trim() .toLowerCase
    const [description, setDescription] = useState(''); console.log('description :', description)
    const [gotJobType, setGotJobType] = useState(''); console.log('gotJobType :', gotJobType)
    const [proffesionTypes, setProffesionTypes] = useState([]); console.log('proffesionTypes :', proffesionTypes)
    const [court, setCourt] = useState(''); console.log('court :', court)
    const [region, setRegion] = useState(''); console.log('region :', region)
    const [city, setCity] = useState(''); console.log('city :', city)
    const [postalCode, setPostalCode] = useState(''); console.log('postalCode :', postalCode)
    const [streetAddress, setStreetAddress] = useState(''); console.log('streetAddress :', streetAddress)
    const [date, setDate] = useState(''); console.log('date :', date)
    const [time, setTime] = useState(''); console.log('time :', time)
    const [email, setEmail] = useState(''); console.log('email :', email)
    const [phone, setPhone] = useState(''); console.log('phone :', phone)
    const [compensation, setCompensation] = useState(''); console.log('compensation :', compensation)
    const [compensationAgreement, setCompensationAgreement] = useState(false); console.log('compensationAgreement :', compensationAgreement)
    const [vat, setVat] = useState(false); console.log('vat :', vat)
    const [filteredCities, setFilteredCities] = useState(null);

    // const capitalizeFirstLetter = (text) => {
    //     return text.charAt(0).toUpperCase() + text.slice(1);
    // };

    useEffect(() => {
        dispatch(fetchProvinces());
        dispatch(fetchCities());
    }, [dispatch]);
    useEffect(() => {
        const filteredCities =
            cities.filter(city => city.woj === region.woj);
        // console.log(filteredCities)
        setFilteredCities(filteredCities)
    }, [region, cities]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const offerData = {
            address: {
                city: city.name,
                postalCod: postalCode,
                province: region.name,
                // id
                // simcId
                street: streetAddress,
                phone: phone,
            },
            // addressId: nanoid(),
            court: {
                name: court.label,
                phone: phone,
            },
            // courtId
            createdDate: date,
            dateToDetermined: date === '' && true,
            email: email,
            id: nanoid(),
            // insurance
            jobType: gotJobType,
            // nameOrCompany
            // offers:[],
            priceToDetermined: compensationAgreement,
            proffesionTypes: proffesionTypes.map(item => item.value),
            // status:
            time: time,
            title: title.trim(),
            vatInvoice: vat,
        };
        console.log('CREATED OBJECK :', offerData)
        dispatch(addOffers(offerData))
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Dodawanie ogłoszenia</Typography>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500' }} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ minWidth: 300 }}>
                            <InputLabel
                                id="demo-jobtype-select-label"
                            // htmlFor="select-jobtype"
                            >
                                Rodzaj ogłoszenia
                            </InputLabel>
                            <Select
                                labelId="demo-jobtype-select-label"
                                id="demo-jobtype-select"
                                required
                                fullWidth
                                value={gotJobType}
                                label="Rodzaj ogłoszenia"
                                onChange={(e) => setGotJobType(e.target.value)}
                            >
                                {jobType.map(type => {
                                    return (
                                        <MenuItem key={type.representation} value={type.representation}>{type.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ minWidth: 300 }}>
                            <InputLabel
                                id="demo-multiple-chip-label"
                                htmlFor="select-multiple-chip"
                            >
                                Wymagane kwalifikacje
                            </InputLabel>
                            <Select
                                sx={{ minWidth: '300' }}
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                fullWidth
                                required
                                value={proffesionTypes}
                                onChange={(e) => {
                                    setProffesionTypes(e.target.value);
                                    // const selectedValues = e.target.value.map(item => item.value);
                                    // setProffesionTypes(selectedValues);
                                }}
                                input={<OutlinedInput id="select-multiple-chip" label="Wymagane kwalifikacje" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value, index) => (
                                            <Chip key={index} label={value.name} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {proffesionTypesArray.map((item) => (
                                    <MenuItem
                                        key={item.value}
                                        value={item}
                                        style={getStyles(item, proffesionTypes, theme)}
                                    >
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Typography variant="h6" gutterBottom>
                    Data i miejsce
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl sx={{ minWidth: 200 }}>
                            <InputLabel
                                id="demo-court-select-label"
                            >
                                Sąd
                            </InputLabel>
                            <Select
                                labelId="demo-court-select-label"
                                id="demo-court-select"
                                required
                                fullWidth
                                value={court}
                                label="Sąd"
                                onChange={(e) => setCourt(e.target.value)}
                            >
                                {courtTypes.map(type => {
                                    return (
                                        <MenuItem key={type.value} value={type}>{type.label}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl sx={{ minWidth: 200 }}>
                            <InputLabel id="province-name">Województwo</InputLabel>
                            <Select
                                labelId="province-name"
                                id="province-dropdown-name"
                                value={region}
                                label="Województwo"
                                fullWidth
                                required
                                onChange={(e) => setRegion(e.target.value)}
                            >
                                {provinces.map((province) => (
                                    <MenuItem key={province.id} value={province}>
                                        {province.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    {region && (
                        <Grid item xs={6}>
                            <FormControl sx={{ minWidth: 200 }}>
                                <InputLabel id="city-name">Miejscowość</InputLabel>
                                <Select
                                    labelId="city-name"
                                    id="city-dropdown-name"
                                    value={city}
                                    label="Miejscowość"
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <MenuItem value="">Wszystko</MenuItem>
                                    {filteredCities?.map((city) => (
                                        <MenuItem key={city.id} value={city}>
                                            {city.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    )}
                    <Grid item xs={6}>
                        <TextField
                            label="Postal Code"
                            variant="outlined"
                            fullWidth
                            required
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Street Address"
                            variant="outlined"
                            fullWidth
                            required
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Date"
                            variant="outlined"
                            fullWidth
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Time"
                            variant="outlined"
                            fullWidth
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Typography variant="h6" gutterBottom>
                    Dane kontaktowe
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Typography variant="h6" gutterBottom>
                    Gratyfikacja
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Compensation"
                            variant="outlined"
                            fullWidth
                            value={compensation}
                            onChange={(e) => setCompensation(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={compensationAgreement} onChange={(e) => setCompensationAgreement(e.target.checked)} />}
                            label="Compensation Agreement"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={vat} onChange={(e) => setVat(e.target.checked)} />}
                            label="VAT Invoice"
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">Add Announcement</Button>
            </form>
        </Container>
    );
};

export default AddOffersForm;
