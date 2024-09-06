import React from 'react';
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export const menuElements = [
  {
    title: "Oferty",
    href: "/",
    icon: React.createElement(WorkOutlineIcon, {}),
  },
  {
    title: "Dodaj ogloszenie",
    href: "/offers/create",
    icon: React.createElement(BusinessOutlinedIcon, {}),
  },
];

export const sidebarMenuElements = [
  {
    title: "Inne pozycje menu",
    href: "/",
    icon: React.createElement(TextSnippetOutlinedIcon, {}),
  },
];

export const helpSidebarElements = [
  {
    title: "Pomoc",
    href: "/help",
    icon: React.createElement(HelpOutlineOutlinedIcon, {}),
    hideMobile: false,
  },
];
