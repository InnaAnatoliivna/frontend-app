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
import { validationAddOffers } from '@/utils/validationSchemes';
import { formattingDate } from '@/utils/formsHelpers';

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
    const [title, setTitle] = useState(''); // console.log('title :', title) //.trim() .toLowerCase
    const [description, setDescription] = useState('');// console.log('description :', description)
    const [gotJobType, setGotJobType] = useState('');// console.log('gotJobType :', gotJobType)
    const [proffesionTypes, setProffesionTypes] = useState([]);// console.log('proffesionTypes :', proffesionTypes)
    const [court, setCourt] = useState('');// console.log('court :', court)
    const [region, setRegion] = useState('');// console.log('region :', region)
    const [city, setCity] = useState('');// console.log('city :', city)
    const [postalCode, setPostalCode] = useState(''); // console.log('postalCode :', postalCode)
    const [streetAddress, setStreetAddress] = useState('');// console.log('streetAddress :', streetAddress)
    const [date, setDate] = useState(''); console.log('date :', date)
    const [time, setTime] = useState('');// console.log('time :', time)
    const [email, setEmail] = useState('');// console.log('email :', email)
    const [phone, setPhone] = useState('');// console.log('phone :', phone)
    const [compensation, setCompensation] = useState('');// console.log('compensation :', compensation)
    const [compensationAgreement, setCompensationAgreement] = useState(false);// console.log('compensationAgreement :', compensationAgreement)
    const [vat, setVat] = useState(false);// console.log('vat :', vat)

    const [filteredCities, setFilteredCities] = useState(null);
    const [errors, setErrors] = useState(null);

    const createdDate = new Date().toISOString();// console.log(createdDate);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(null);
        const formData = new FormData(event.target);
        const values = Object.fromEntries(formData.entries());
        console.log(values)
        try {
            await validationAddOffers.validate(values, { abortEarly: false });
        } catch (errors) {
            const validationErrors = {};
            errors.inner.forEach(error => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
        }

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
            createdDate: createdDate,
            date: date ? formattingDate(date) : '',
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
            time: time + ':00',
            title: title.trim(),
            vatInvoice: vat,
        };
        console.log('CREATED OBJECK :', offerData)
        console.log('ERROR REQUEST :', errors)
        if (!errors) dispatch(addOffers(offerData))
    };
    return (
        <Container>
            <Typography variant="h5" gutterBottom>Dodawanie ogłoszenia</Typography>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500' }} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name='title'
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
                            name='description'
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
                                name='gotJobType'
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
                                name='proffesionTypes'
                                sx={{ minWidth: '300' }}
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                fullWidth
                                required
                                value={proffesionTypes}
                                onChange={(e) => setProffesionTypes(e.target.value)}
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
                                name='court'
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
                                name='region'
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

                    <Grid item xs={6}>
                        <FormControl sx={{ minWidth: 200 }}>
                            <InputLabel id="city-name">Miejscowość</InputLabel>
                            <Select
                                name='city'
                                labelId="city-name"
                                id="city-dropdown-name"
                                value={city}
                                label="Miejscowość"
                                onChange={(e) => setCity(e.target.value)}
                            >
                                {region
                                    ? filteredCities.map((city) => (
                                        <MenuItem key={city.id} value={city}>
                                            {city.name}
                                        </MenuItem>))
                                    : <MenuItem value="">najpierw wybierz województwo</MenuItem>
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name='postalCode'
                            label="Kod pocztowy"
                            variant="outlined"
                            fullWidth
                            required
                            value={postalCode}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                const formattedPostalCode = inputValue
                                    .replace(/[^0-9]/g, '')
                                    .replace(/(.{2})/, '$1-');
                                setPostalCode(formattedPostalCode);
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name='streetAddress'
                            label="Ulica i nr budynku"
                            variant="outlined"
                            fullWidth
                            required
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name='date'
                            label="Data rozprawy (DD-MM-YYYY)"
                            variant="outlined"
                            fullWidth
                            value={date}
                            onChange={(e) => {
                                // setDate(e.target.value)
                                const inputDate = e.target.value;
                                let formattedDate = inputDate.replace(/\D/g, ''); // видаляємо всі нечислові символи
                                if (formattedDate.length > 2) {
                                    formattedDate = formattedDate.slice(0, 2) + '-' + formattedDate.slice(2);
                                }
                                if (formattedDate.length > 5) {
                                    formattedDate = formattedDate.slice(0, 5) + '-' + formattedDate.slice(5);
                                }
                                setDate(formattedDate);
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name='time'
                            label="Godzina rozprawy"
                            variant="outlined"
                            fullWidth
                            value={time}
                            onChange={(e) => {
                                // setTime(e.target.value)
                                const inputTime = e.target.value;
                                let formattedTime = inputTime.replace(/\D/g, ''); // видаляємо всі нечислові символи
                                if (formattedTime.length > 2) {
                                    formattedTime = formattedTime.slice(0, 2) + ':' + formattedTime.slice(2);
                                }
                                setTime(formattedTime);
                            }}
                        />
                    </Grid>
                </Grid>

                <Typography variant="h6" gutterBottom>
                    Dane kontaktowe
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name='email'
                            label="Adres e-mail "
                            variant="outlined"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name='phone'
                            label="Numer telefonu"
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
                            name='compensation'
                            label="Wynagrodzenie"
                            variant="outlined"
                            fullWidth
                            value={compensation}
                            onChange={(e) => setCompensation(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={compensationAgreement} onChange={(e) => setCompensationAgreement(e.target.checked)} />}
                            label="Wynagrodzenie do uzgodnienia"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            // name='invoice'
                            control={<Checkbox checked={vat} onChange={(e) => setVat(e.target.checked)} />}
                            label="Faktura VAT"
                        />
                    </Grid>
                </Grid>

                <Button type="submit" variant="contained" color="primary">Dodać ogłoszenie</Button>
            </form>
            {errors && (
                <div>
                    {Object.entries(errors).map(([key, value]) => (
                        <p key={key}>{value}</p>
                    ))}
                </div>
            )}        </Container>
    );
};

export default AddOffersForm;
