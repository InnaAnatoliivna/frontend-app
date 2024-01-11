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

export default function MultipleSelectChip() {
    const theme = useTheme();
    const [proffesionType, setProffesionType] = React.useState([]);

    console.log(proffesionType)
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setProffesionType(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

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