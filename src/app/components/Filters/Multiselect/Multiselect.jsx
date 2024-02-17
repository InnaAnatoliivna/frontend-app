import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { proffesionTypesArray } from '@/utils/filterElements';
import { useDispatch, useSelector } from 'react-redux';
// import { selectProfessionFilter } from '@/redux/filters/selectors';
import { updateProfessionFilter } from '@/redux/filters/filtersSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { selectProfessionFilter } from '@/redux/filters/selectors';
import { MenuProps, getStyles } from '@/utils/formsHelpers';


export default function MultipleSelectChip() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const [proffesionType, setProffesionType] = useState([]);
    // const jobTypeFilter = useSelector(selectProfessionFilter);

    // console.log('slice select pr :', jobTypeFilter)

    const handleChange = (event) => {
        const { target: { value } } = event;
        setProffesionType(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    useEffect(() => {
        // Оновлюємо фільтр у Redux-сторі при зміні вибраних значень
        dispatch(updateProfessionFilter(proffesionType))
    }, [proffesionType, dispatch]);
    // console.log(proffesionType)

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel
                    id="demo-multiple-chip-label"
                    htmlFor="select-multiple-chip"
                >
                    Wybierz kwalifikacje wymagane
                </InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={proffesionType}
                    onChange={handleChange}
                    input={<OutlinedInput sx={{ borderRadius: '16px' }} id="select-multiple-chip" label="Wybierz kwalifikacje wymagane" />}
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
                            style={getStyles(item, proffesionType, theme)}
                        >
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}