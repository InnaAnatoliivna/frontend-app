import {
  PaletteOptions,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = React.createContext({
  mode: "light",
  handleToggleColorMode: () => { },
});

const themes = {
  light: {
    mode: "light",
    primary: {
      main: "#5F656B",
    },
    secondary: {
      main: "#ff4081",
      dark: "#ad1457",
    },
  },
  dark: {
    mode: "dark",
    primary: {
      main: "#5F656B",
      light: "#e3f2fd",
      dark: "rgba(255, 255, 255, 0.04)",
    },
    secondary: {
      main: "#f06292",
      dark: "#ad1457",
    },
    text: {
      primary: "rgba(255,255,255,0.8)",
      secondary: "#ffffff",
    },
    background: {
      default: "rgb(32, 32, 32)",
      paper: "#2C2C2C",
    },
  },
};

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    setMode(localStorage.getItem("theme") || "light");
  }, []);

  const handleToggleColorMode = () => {
    setMode((prev) => {
      const currentMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", currentMode);
      return currentMode;
    });
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            laptop: 1024.95,
          },
        },
        palette: mode === "dark" ? themes.dark : themes.light,
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: "99999px",
                padding: "6px 16px",
                margin: "0 4px",
                whiteSpace: "nowrap",
                textTransform: "none",
                transition:
                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              },
            },
            variants: [
              {
                props: { variant: "outlined", color: "primary" },
                style: {
                  border: "1px solid rgba(255, 255, 255, 0.23)",
                  color: mode === "dark" ? "inherit" : "#5F656B",
                  borderColor: mode === "dark" ? "#3C3C3C" : "#E4E8F0",
                  backgroundColor: mode === "dark" ? "#393939" : "transparent",
                  "&:hover": {
                    borderColor: mode === "dark" ? "#3C3C3C" : "#E4E8F0",
                    backgroundColor:
                      mode === "dark"
                        ? "rgba(255, 255, 255, 0.04)"
                        : "rgba(55, 71, 79, 0.04)",
                  },
                },
              },
              {
                props: { variant: "square", color: "primary" },
                style: ({ theme: { breakpoints } }) => ({
                  width: 58,
                  height: "100%",
                  fontSize: 12,
                  borderRadius: 0,
                  border: "none",
                  minWidth: "auto",
                  color: mode === "dark" ? "inherit" : "#5F656B",
                  borderLeft: `1px solid ${mode === "dark" ? "#3C3C3C" : "#E4E8F0"
                    }`,
                  borderRight: `1px solid ${mode === "dark" ? "#3C3C3C" : "#E4E8F0"
                    }`,
                  background: "transparent",
                  "&:hover": {
                    background: mode === "dark" ? "#202020" : "#F3F6F8",
                  },
                  [breakpoints.down("laptop")]: {
                    width: "48px",
                    height: "40px",
                    padding: "4px",
                    margin: 0,
                  },
                }),
              },
            ],
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ handleToggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
