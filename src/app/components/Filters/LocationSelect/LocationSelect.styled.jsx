import styled from "@emotion/styled";
import { Popover, Button } from "@mui/material";

export const PopoverStyled = styled(Popover)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    ".MuiPopover-paper": {
        margin: "32px 16px 0px 0px",
        padding: "8px 24px",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
    },
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.mode === "dark" ? 'var(--color-light)' : 'var(--color-dark)',
    border: theme.palette.mode === "dark" ? '1px solid var(--border-dark)' : '1px solid var(--border-light)',
    borderRadius: 'var(--border-radius-btn)',
    '&:hover': {
        backgroundColor: theme.palette.mode === "dark" ? 'var(--color-dark)' : 'var(--color-light)',
    },
}));