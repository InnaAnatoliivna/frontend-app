import React, { useState } from 'react';
import { Button, Typography, useTheme } from "@mui/material";
import { ButtonStyled, PopoverStyled } from './LocationSelect.styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const LocationSelect = ({ children }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "currency-popover" : undefined;

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
            </PopoverStyled>
        </>
    )
};

export default LocationSelect;
