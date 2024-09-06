import Drawer from "@mui/material/Drawer";
import Head from "./components/SidebarHeading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {
  helpSidebarElements,
  menuElements,
  sidebarMenuElements,
} from "../../../../utils/menuElements";
import {
  Box,
  Collapse,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { Divider } from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SignInSelectButton from "../SignInElements/SignInSelectButton";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import SidebarListItemButton from "./components/SidebarListItemButton";

const Sidebar = ({ open, setOpen }) => {
  const {
    palette: { mode },
    breakpoints,
  } = useTheme();
  const [openMore, setOpenMore] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  const handleToggleMoreMenuItems = () => {
    setOpenMore(!openMore);
  };

  const isDarkMode = mode === "dark";

  const sidebarMoreElements = sidebarMenuElements.map((item, i) => (
    <ListItem key={item.href} disablePadding>
      <SidebarListItemButton
        key={i}
        title={item.title}
        icon={item.icon}
        href={item.href}
      />
    </ListItem>
  ));

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={closeDrawer}
      sx={{
        "& > .MuiPaper-root": {
          width: "320px",
          maxWidth: "100%",
          backgroundImage: "none",
        },
      }}
    >
      <Head onClickButton={closeDrawer} />
      <List
        sx={{
          [breakpoints.up("laptop")]: {
            display: "none",
          },
        }}
      >
        {menuElements.map((item, i) => (
          <SidebarListItemButton
            key={i}
            title={item.title}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </List>
      <List
        sx={{
          [breakpoints.up("laptop")]: {
            display: "none",
          },
        }}
      >
        <Divider sx={{ borderWidth: "4px" }} />
        <ListItemButton
          onClick={handleToggleMoreMenuItems}
          sx={{
            marginTop: "10px",
            marginBottom: "4px",
            "&:hover": {
              backgroundColor: isDarkMode ? "#202020" : "#F3F6F8",
            },
          }}
        >
          <ListItemText
            primary="More"
            sx={{
              "& > span": {
                fontWeight: 600,
                color: isDarkMode ? "#9e9e9e" : "#5F656B",
                fontSize: "0.875rem",
              },
            }}
          />
          {openMore ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMore} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {sidebarMoreElements}
          </List>
        </Collapse>
        <Divider sx={{ borderWidth: "4px" }} />
      </List>
      <List
        sx={{
          [breakpoints.down("laptop")]: {
            display: "none",
          },
        }}
      >
        {sidebarMoreElements}
        <Divider sx={{ borderWidth: "4px" }} />
      </List>
      <List>
        {helpSidebarElements.map((item, i) => (
          <SidebarListItemButton
            key={i}
            title={item.title}
            href={item.href}
            icon={item.icon}
            hideMobile={item.hideMobile}
          />
        ))}
      </List>
      <Box
        sx={{
          paddingLeft: "24px",
          paddingRight: "20px",
          paddingBottom: "16px",
        }}
      >
        <SignInSelectButton
          // startIcon={}
          href="/devs"
          sx={{
            "& .MuiButton-startIcon": {
              backgroundColor: isDarkMode
                ? "rgb(57, 57, 57)"
                : "rgb(255, 248, 251)",
              "& svg": {
                color: "rgb(255, 64, 129)",
              },
            },
          }}
        >
          Zaloguj się
        </SignInSelectButton>
      </Box>
      <Box
        sx={{
          [breakpoints.down("laptop")]: {
            display: "none",
          },
        }}
        display="flex"
        justifyContent="center"
      >
        <IconButton
          size="large"
          LinkComponent={Link}
          href="/"
          sx={{ fill: "#5F656B" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton size="large" LinkComponent={Link} href="/">
          <LinkedInIcon />
        </IconButton>
        <IconButton size="large" LinkComponent={Link} href="/">
          <YouTubeIcon />
        </IconButton>
        <IconButton size="large" LinkComponent={Link} href="/">
          <InstagramIcon />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
