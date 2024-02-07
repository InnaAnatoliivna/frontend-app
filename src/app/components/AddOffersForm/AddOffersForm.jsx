import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { TextField, Select, MenuItem, Checkbox, FormControlLabel, Button, Grid, Typography, InputLabel, OutlinedInput, Chip, FormControl } from '@mui/material';
import { useDispatch } from 'react-redux';
import Container from '../Container/Container';
import { jobType, proffesionTypesArray } from '@/utils/filterElements';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';

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
    const [title, setTitle] = useState('');
    console.log(title) //.trim() .toLowerCase
    const [description, setDescription] = useState('');
    const [gotJobType, setGotJobType] = useState('');
    const [proffesionTypes, setProffesionTypes] = useState([]);
    const [court, setCourt] = useState('');
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [compensation, setCompensation] = useState('');
    const [compensationAgreement, setCompensationAgreement] = useState(false);
    const [vat, setVat] = useState(false);

    // const capitalizeFirstLetter = (text) => {
    //     return text.charAt(0).toUpperCase() + text.slice(1);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

        const offerData = {
            address: {
                city: city,
                postalCod: postalCode,
                province: region,
                // id
                // simcId
                street: streetAddress,
                phone: phone,
            },
            // addressId: nanoid(),
            // court: {
            //     phone: phone,
            // },
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
            proffesionTypes: [...proffesionTypes],
            // status:
            time: time,
            title: title.trim(),
            vatInvoice: vat,
        };
        console.log(offerData)
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
                                onChange={(e) => setProffesionTypes(e.target.value)}
                                input={<OutlinedInput id="select-multiple-chip" label="Wymagane kwalifikacje" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value.name} label={value.name} />
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
                        <TextField
                            label="Court"
                            variant="outlined"
                            fullWidth
                            required
                            value={court}
                            onChange={(e) => setCourt(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Region"
                            variant="outlined"
                            fullWidth
                            required
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="City"
                            variant="outlined"
                            fullWidth
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Grid>
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
