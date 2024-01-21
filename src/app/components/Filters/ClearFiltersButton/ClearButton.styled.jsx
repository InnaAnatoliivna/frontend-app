import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(
    ({ theme }) => ({
        height: '52px',
        borderRadius: 'var(--border-radius-btn)',
        backgroundColor: 'transparent',
        border: theme.palette.mode === "dark" ? '1px solid var(--border-dark)' : '1px solid var(--border-light)',
    })
);