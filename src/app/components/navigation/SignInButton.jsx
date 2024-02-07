import React, { useState } from "react";
import Button from "@mui/material/Button";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import SignInSelect from "./SignInElements/SignInSelect";
// import SignInSelectButton from "./SignInElements/SignInSelectButton";
// import PortraitSharpIcon from '@mui/icons-material/PortraitSharp';
// import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import { useTheme } from "@mui/material";
import Link from "next/link";

const SignInButton = ({ children }) => {
  const theme = useTheme();
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
        LinkComponent={Link}
        href="/login"
        variant="contained"
        color="secondary"
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
        sx={{
          [theme.breakpoints.down("laptop")]: {
            height: "calc(100% - 6px)",
            "& > .MuiButton-endIcon": {
              display: "none",
            },
          },
          textDecoration: 'none',
          color:
            theme.palette.mode === "dark"
              ? "var(--color-light)"
              : "var(--color-light)",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "var(--color-accent);"
              : "var(--color-accent);",
          borderRadius: 'var(--border-radius-btn);',
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "#fb3938;"
                : "#fb3938;",
          },
        }}

      >
        {children}
      </Button>
      {/* <SignInSelect
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <SignInSelectButton
          startIcon={<PortraitSharpIcon />}
          href="/devs"
          sx={{
            "& .MuiButton-startIcon": {
              backgroundColor: " #8b0e3a", //icon person
              "& svg": {
                color: "rgb(255, 255, 255)",
              },
            },
          }}
        >
          Sign in as a developer
        </SignInSelectButton>
        <SignInSelectButton
          startIcon={<BusinessCenterSharpIcon />}
          href="/users/sign_in"
          sx={{
            "& .MuiButton-startIcon": {
              backgroundColor: "var(--color-active-second)", //icon case
              "& svg": {
                color: "#6a0d3b",
              },
            },
          }}
        >
          Sign in to Employer Panel
        </SignInSelectButton>
      </SignInSelect> */}
    </>
  );
};

export default SignInButton;
