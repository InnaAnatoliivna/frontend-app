import React, { useState } from 'react';
import { TextField, Select, MenuItem, Checkbox, FormControlLabel, Button, Grid, Typography, Container } from '@mui/material';

const AddOffersForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [announcementType, setAnnouncementType] = useState('');
    const [qualifications, setQualifications] = useState([]);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form data handling logic here
    };

    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                Dodawanie ogłoszenia
            </Typography>
            <form onSubmit={handleSubmit}>
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
                        <Select
                            label="Announcement Type"
                            variant="outlined"
                            fullWidth
                            value={announcementType}
                            onChange={(e) => setAnnouncementType(e.target.value)}
                        >
                            <MenuItem value="Substitution">Substitution</MenuItem>
                            <MenuItem value="Copy of Acts">Copy of Acts</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Select
                            label="Qualifications"
                            variant="outlined"
                            fullWidth
                            multiple
                            value={qualifications}
                            onChange={(e) => setQualifications(e.target.value)}
                        >
                            <MenuItem value="Applicant">Applicant</MenuItem>
                            <MenuItem value="Trainee Applicant">Trainee Applicant</MenuItem>
                            <MenuItem value="Legal Advisor">Legal Advisor</MenuItem>
                            <MenuItem value="Trainee Legal Advisor">Trainee Legal Advisor</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
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
