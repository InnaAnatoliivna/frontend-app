import { Box, styled } from "@mui/material";

const BoxStyled = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("laptop")]: {
    display: "none",
  },
}));

const MenuLinksBox = ({ children }) => (
  <BoxStyled
    display="flex"
    alignItems="center"
    justifyContent="flex-end"
    flex="1 1 0%"
    marginLeft="auto"
    marginRight="0"
    width="100%"
    height="100%"
  >
    {children}
  </BoxStyled>
);

export default MenuLinksBox;
