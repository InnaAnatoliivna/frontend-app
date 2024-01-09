import styled from "@emotion/styled";
import { Popover } from "@mui/material";

export const PopoverStyled = styled(Popover)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    ".MuiPopover-paper": {
        margin: "32px 16px 0px 0px",
        padding: "8px 24px",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
    },
}));