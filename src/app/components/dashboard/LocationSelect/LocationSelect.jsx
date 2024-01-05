import React, { useState } from 'react';
import { Button, Popover, Typography } from "@mui/material";
import styled from "@emotion/styled";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const PopoverStyled = styled(Popover)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    ".MuiPopover-paper": {
        margin: "32px 16px 0px 0px",
        padding: "8px 16px",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
    },
}));

const LocationSelect = ({ children }) => {
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
                startIcon={<LocationOnIcon />}
                endIcon={<KeyboardArrowDownIcon />}
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
