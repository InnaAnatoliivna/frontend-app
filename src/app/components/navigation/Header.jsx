import { styled, Paper } from "@mui/material";
import React from "react";

const PaperStyled = styled(Paper)(
  ({
    theme: {
      palette: { mode },
      breakpoints,
    },
  }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 68,
    borderBottom: `1px solid ${mode === "dark" ? "#3C3C3C" : "#E4E8F0"}`,
    boxShadow: "none",
    paddingLeft: 24,
    backgroundImage: "none",
    [breakpoints.down("laptop")]: {
      height: 40,
      paddingLeft: 8,
    },
  })
);

const Header = ({ children }) => <PaperStyled>{children}</PaperStyled>;

export default Header;
