import styled from "@emotion/styled";
import { Button, FormControl, Select } from "@mui/material";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

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

export const ButtonFind = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.mode === "dark" ? 'var(--color-light)' : 'var(--color-dark)',
    border: theme.palette.mode === "dark" ? '1px solid var(--border-dark)' : '1px solid var(--border-light)',
    borderRadius: 'var(--border-radius-btn)',
    '&:hover': {
        backgroundColor: theme.palette.mode === "dark" ? 'var(--color-dark)' : 'var(--color-light)',
    },
}));