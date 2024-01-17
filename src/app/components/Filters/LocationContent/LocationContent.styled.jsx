import styled from "@emotion/styled";
import { FormControl, Select } from "@mui/material";

export const FormStyled = styled(FormControl)(({ theme }) => ({
    display: 'flex',
}));


export const SelectStyled = styled(Select)(({ theme }) => ({
    width: '250px',
    outline: 'none',
    borderRadius: 'var(--border-radius-btn)',
    marginBottom: '20px',
    backgroundColor: theme.palette.mode === "dark" ? "var(--color-dark)" : "var(--color-light)",
}));