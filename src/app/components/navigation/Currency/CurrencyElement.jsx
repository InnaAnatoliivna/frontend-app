import React from "react";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";


const StyledButton = (theme, currentCurrency) => {
  const paletteMode = theme.palette?.mode || "light";

  return {
    display: "flex",
    margin: "4px 16px",
    padding: "8px 16px",
    textTransform: "none",
    backgroundColor: currentCurrency
      ? paletteMode === "dark"
        ? "rgb(57, 57, 57)"
        : "rgb(255, 248, 251)"
      : paletteMode === "dark"
        ? "transparent"
        : "rgb(255, 255, 255)",
    borderRadius: "12px",
    justifyContent: "space-between",
    width: "calc(100% - 32px)",
    fontSize: "0.875rem",
    color: currentCurrency
      ? "rgb(255, 64, 129)"
      : paletteMode === "dark"
        ? "rgba(255, 255, 255, 0.8)"
        : "rgb(55, 71, 79)",
    "&:hover": {
      backgroundColor:
        paletteMode === "dark" ? "#2C2C2C" : "rgba(55, 71, 79, 0.04)",
    },
  };
};


const CurrencyElement = ({ children, onClick, currentCurrency }) => {
  return (
    <Button
      onClick={onClick}
      endIcon={currentCurrency ? <CheckIcon /> : null}
      sx={StyledButton(currentCurrency)}
    >
      {children}
    </Button>
  );
};

export default CurrencyElement;
