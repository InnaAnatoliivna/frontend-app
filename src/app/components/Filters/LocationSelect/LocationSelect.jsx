import React, { useState } from 'react';
import { Button, Typography, useTheme } from "@mui/material";
import { PopoverStyled } from './LocationSelect.styled';
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
            <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                startIcon={<LocationOnIcon style={{ fontSize: '21px' }} />}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    backgroundColor: 'transparent',
                    // theme.palette.mode === "dark"
                    //     ? 'var(--color-dark)'
                    //     : 'var(--color-light)',
                    color:
                        theme.palette.mode === "dark"
                            ? '#E0E0E0'
                            : 'rgb(29, 30, 37)',
                    border:
                        theme.palette.mode === "dark"
                            ? '1px solid #454545'
                            : '1px solid rgb(228, 232, 240)',
                    borderRadius: 'var(--border-radius-btn)',
                    '&:hover': {
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? 'var(--color-dark)'
                                : 'var(--color-light)',
                    },
                }}
            >
                Location
            </Button>
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
                <Typography sx={{ p: 2 }}>
                    {children}
                </Typography>
            </PopoverStyled>
        </>
    )
};

export default LocationSelect;
