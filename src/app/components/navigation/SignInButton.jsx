import React, { useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SignInSelect from "./SignInElements/SignInSelect";
import SignInSelectButton from "./SignInElements/SignInSelectButton";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { useTheme } from "@mui/material";

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
        variant="contained"
        color="secondary"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          marginLeft: "auto",
          [theme.breakpoints.down("laptop")]: {
            height: "calc(100% - 6px)",
            "& > .MuiButton-endIcon": {
              display: "none",
            },
          },
        }}
      >
        {children}
      </Button>
      <SignInSelect
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <SignInSelectButton
          startIcon={<FaceOutlinedIcon />}
          href="/devs"
          sx={{
            "& .MuiButton-startIcon": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgb(57, 57, 57)"
                  : "rgb(255, 248, 251)",
              "& svg": {
                color: "rgb(255, 64, 129)",
              },
            },
          }}
        >
          Sign in as a developer
        </SignInSelectButton>
        <SignInSelectButton
          startIcon={<WorkOutlineOutlinedIcon />}
          href="/users/sign_in"
          sx={{
            "& .MuiButton-startIcon": {
              backgroundColor: "rgb(243, 229, 245)",
              "& svg": {
                color: "rgb(171, 71, 188)",
              },
            },
          }}
        >
          Sign in to Employer Panel
        </SignInSelectButton>
      </SignInSelect>
    </>
  );
};

export default SignInButton;
