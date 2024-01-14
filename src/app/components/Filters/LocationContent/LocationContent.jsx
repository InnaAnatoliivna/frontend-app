import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectCities } from '@/redux/simc/selectors';
import { selectProvinces } from '@/redux/terc/selectors';
import { fetchProvinces } from '@/redux/terc/operations';
import { fetchCities } from '@/redux/simc/operations';


const LocationContent = () => {
    const dispatch = useDispatch();
    const cities = useSelector(selectCities);
    const provinces = useSelector(selectProvinces);
    // console.log('cities:', cities)
    // console.log('provinces :', provinces)


    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        // Fetch data when the component mounts
        dispatch(fetchProvinces());
    }, [dispatch]);

    const handleProvinceChange = (event) => {
        const selectedProvince = event.target.value;
        setSelectedProvince(selectedProvince);

        // Fetch cities based on the selected province
        dispatch(fetchCities());

        // Clear selected city
        setSelectedCity('');
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div>
            <FormControl>
                <InputLabel id="province-label">Województwo</InputLabel>
                <Select
                    labelId="province-label"
                    id="province-dropdown"
                    value={selectedProvince}
                    label="Województwo"
                    onChange={handleProvinceChange}
                >
                    <MenuItem value="">Wszystko</MenuItem>
                    {provinces.map((province) => (
                        <MenuItem key={province.id} value={province.name}>
                            {province.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {selectedProvince && (
                <FormControl>
                    <InputLabel id="city-label">Miejscowość</InputLabel>
                    <Select
                        labelId="city-label"
                        id="city-dropdown"
                        value={selectedCity}
                        label="Miejscowość"
                        onChange={handleCityChange}
                    >
                        <MenuItem value="">Wszystko</MenuItem>
                        {cities.map((city) => (
                            <MenuItem key={city.id} value={city.name}>
                                {city.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
        </div>
    );
};

export default LocationContent;