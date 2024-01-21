import styled from "@emotion/styled";
import { Input } from "@mui/material";

export const InputStyled = styled(Input)(({ theme }) => ({
    height: '52px',
    paddingLeft: '20px',
    paddingRight: '10px',
    border:
        theme.palette.mode === "dark"
            ? '1px solid #454545'
            : '1px solid rgb(228, 232, 240)',
    backgroundColor:
        theme.palette.mode === "dark"
            ? 'var(--color-dark)'
            : 'var(--color-light)',
    color:
        theme.palette.mode === "dark"
            ? '#E0E0E0'
            : 'rgb(29, 30, 37)',
    borderRadius: 'var(--border-radius-btn)',
    '&::after': {
        content: 'none',
    },
    '&::before': {
        content: 'none',
    },
    fontWeight: '600',
    fontSize: '13px',
    lineHeight: '1.6'
}));
