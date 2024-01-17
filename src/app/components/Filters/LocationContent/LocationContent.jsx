import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectCities } from '@/redux/simc/selectors';
import { selectProvinces } from '@/redux/terc/selectors';
import { fetchProvinces } from '@/redux/terc/operations';
import { fetchCities } from '@/redux/simc/operations';
import { updateCityFilter, updateProvinceFilter } from '@/redux/filters/filtersSlice';
import { FormStyled, SelectStyled } from './LocationContent.styled';


const LocationContent = () => {
    const dispatch = useDispatch();
    const cities = useSelector(selectCities);
    const provinces = useSelector(selectProvinces);

    const [selectedProvince, setSelectedProvince] = useState('');
    const [filteredCities, setFilteredCities] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        dispatch(fetchProvinces());
    }, [dispatch]);

    useEffect(() => {
        const filteredCities =
            cities.filter(city => city.woj === selectedProvince.woj);
        // console.log(filteredCities)
        setFilteredCities(filteredCities)
    }, [selectedProvince, cities]);

    const handleProvinceChange = (event) => {
        const selectedProvince = event.target.value;
        setSelectedProvince(selectedProvince);
        updateProvinceFilter(selectedProvince);
        dispatch(fetchCities());
        // Clear selected city
        setSelectedCity('');
    };

    const handleCityChange = (event) => {
        const selectedCity = event.target.value;
        setSelectedCity(selectedCity);
        updateCityFilter(selectedCity);
    };

    return (
        <div>
            <FormStyled>
                <InputLabel id="province-label">Województwo</InputLabel>
                <SelectStyled
                    labelId="province-label"
                    id="province-dropdown"
                    value={selectedProvince}
                    label="Województwo"
                    onChange={handleProvinceChange}
                >
                    {/* <MenuItem value="">Wszystko</MenuItem> */}
                    {provinces.map((province) => (
                        <MenuItem key={province.id} value={province}>
                            {province.name}
                        </MenuItem>
                    ))}
                </SelectStyled>
            </FormStyled>

            {selectedProvince && (
                <FormControl>
                    <InputLabel id="city-label">Miejscowość</InputLabel>
                    <SelectStyled
                        labelId="city-label"
                        id="city-dropdown"
                        value={selectedCity}
                        label="Miejscowość"
                        onChange={handleCityChange}
                    >
                        <MenuItem value="">Wszystko</MenuItem>
                        {filteredCities.map((city) => (
                            <MenuItem key={city.id} value={city}>
                                {city.name}
                            </MenuItem>
                        ))}
                    </SelectStyled>
                </FormControl>
            )}
        </div>
    );
};

export default LocationContent;