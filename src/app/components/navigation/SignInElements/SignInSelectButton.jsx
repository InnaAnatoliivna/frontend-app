import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import React from "react";
import Link from "next/link";

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  margin: "8px 0",
  padding: "12px 22px",
  textTransform: "none",
  textAlign: "left",
  whiteSpace: "nowrap",
  fontWeight: 600,
  borderRight: "5px",
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderColor: theme.palette.mode === "dark" ? "#3C3C3C" : "#E4E8F0",
  letterSpacing: 0,
  backgroundColor:
    theme.palette.mode === "dark" ? "#393939" : "rgb(255, 255, 255)",
  borderRadius: "var(--border-radius-btn)",
  justifyContent: "start",
  width: "100%",
  fontSize: "0.875rem",
  color:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.8)"
      : "rgb(55, 71, 79)",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.04)"
        : "rgba(55, 71, 79, 0.04)",
  },
  "& .MuiButton-startIcon": {
    borderRadius: "50%",
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: "24px",
    },
  },
}));

const SignInSelectButton = ({ startIcon, children, onClick, href, sx }) => {
  return (
    <StyledButton
      startIcon={startIcon}
      component={Link}
      href={href}
      onClick={onClick}
      sx={sx}
    >
      {children}
    </StyledButton>
  );
};

export default SignInSelectButton;
