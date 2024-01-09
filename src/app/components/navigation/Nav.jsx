import { Box } from "@mui/material";

const Nav = ({ children }) => (
  <Box
    component="nav"
    display="flex"
    justifyContent='end'
    alignItems="center"
    height="100%"
    flex="1"
  >
    {children}
  </Box>
);

export default Nav;
