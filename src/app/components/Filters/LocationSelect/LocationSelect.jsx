import React, { useState } from 'react';
import { Button, useTheme } from "@mui/material";
import { ButtonFind, ButtonStyled, PopoverStyled } from './LocationSelect.styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from 'react-redux';
import { selectProvinceFilter } from '@/redux/filters/selectors';
import SearchIcon from '@mui/icons-material/Search';


const LocationSelect = ({ children }) => {
    const theme = useTheme();
    const selectedLocation = useSelector(selectProvinceFilter);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "currency-popover" : undefined;

    const handleClickButton = () => {
        handleClose();
    }

    return (
        <>
            <ButtonStyled
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                startIcon={<LocationOnIcon style={{ fontSize: '21px' }} />}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Location
            </ButtonStyled>
            <PopoverStyled
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {children}
                <ButtonFind
                    type='button'
                    disabled={selectedLocation === ''}
                    onClick={handleClickButton}
                >
                    <SearchIcon />
                    Szukaj
                </ButtonFind>
            </PopoverStyled>
        </>
    )
};

export default LocationSelect;
