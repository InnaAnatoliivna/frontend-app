import React, { useState } from 'react';
import { useTheme } from "@mui/material";
import { ButtonStyled, PopoverStyled } from './LocationSelect.styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from 'react-redux';
import { selectProvinceFilter } from '@/redux/filters/selectors';
import LocationContent from '../LocationContent/LocationContent';


const LocationSelect = () => {
    const theme = useTheme();
    const selectedLocation = useSelector(selectProvinceFilter);
    const [anchorEl, setAnchorEl] = useState(null);
    // console.log('selectedLocation :', selectedLocation)

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
                <LocationContent handleClickButton={handleClickButton} />
            </PopoverStyled>
        </>
    )
};

export default LocationSelect;
