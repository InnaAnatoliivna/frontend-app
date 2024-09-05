import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectCities } from '@/redux/simc/selectors';
import { selectProvinces } from '@/redux/terc/selectors';
import { fetchProvinces } from '@/redux/terc/operations';
import { fetchCities } from '@/redux/simc/operations';
import { updateCityFilter, updateProvinceFilter } from '@/redux/filters/filtersSlice';
import { ButtonFind, FormStyled, SelectStyled, Wrapper } from './LocationContent.styled';
import SearchIcon from '@mui/icons-material/Search';


const LocationContent = ({ handleClickButton }) => {
    const dispatch = useDispatch();
    const cities = useSelector(selectCities);
    const provinces = useSelector(selectProvinces);

    const [selectedProvince, setSelectedProvince] = useState('');
    // console.log(selectedProvince)
    const [filteredCities, setFilteredCities] = useState(null);
    const [selectedCity, setSelectedCity] = useState('');
    // console.log(selectedCity)


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
        dispatch(updateProvinceFilter(selectedProvince));
        dispatch(fetchCities());
        // Clear selected city
        setSelectedCity('');
    };

    const handleCityChange = (event) => {
        const selectedCity = event.target.value;
        setSelectedCity(selectedCity);
        dispatch(updateCityFilter(selectedCity));

    };

    return (
        <Wrapper>
            <FormStyled>
                <InputLabel id="province-label">Województwo</InputLabel>
                <SelectStyled
                    labelId="province-label"
                    id="province-dropdown"
                    value={selectedProvince}
                    label="Województwo"
                    onChange={handleProvinceChange}
                >
                    {provinces.map((province) => (
                        <MenuItem key={province.id} value={province}>
                            {province.name}
                        </MenuItem>
                    ))}
                </SelectStyled>
            </FormStyled>

            {selectedProvince && (
                <>
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

                </>
            )}
            <ButtonFind
                type='button'
                disabled={!selectedProvince}
                onClick={handleClickButton}
            >
                <SearchIcon />
                Pokaż
            </ButtonFind>
        </Wrapper>
    );
};

export default LocationContent;