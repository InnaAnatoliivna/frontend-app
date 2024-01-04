import React from "react";
import { Popover, Typography } from "@mui/material";

const PopoverStyled = (theme) => ({
  display: "flex",
  flexDirection: "column",
  ".MuiPopover-paper": {
    marginTop: "16px",
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
  },
});

const Paragraph = (theme) => ({
  margin: "12px 16px 8px",
  fontSize: "16px",
  fontWeight: 600,
  color: theme.palette.mode === "dark" ? "#9e9e9e" : "#5F656B",
  width: "236px",
});

const Heading = ({ children }) => (
  <Typography sx={Paragraph}>{children}</Typography>
);

const CurrencySelect = ({ children, id, open, anchorEl, onClose }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      sx={PopoverStyled}
    >
      <Heading>Select your currency</Heading>
      {children}
    </Popover>
  );
};

export default CurrencySelect;
