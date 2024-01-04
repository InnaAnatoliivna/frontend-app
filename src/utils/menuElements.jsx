import React from 'react';
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import MoneyOutlinedIcon from "@mui/icons-material/MoneyOutlined";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import TodayIcon from "@mui/icons-material/Today";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";

export const menuElements = [
  {
    title: "Offers",
    href: "/",
    icon: React.createElement(WorkOutlineIcon, {}),
  },
  {
    title: "Brand Stories",
    href: "/brands",
    icon: React.createElement(BusinessOutlinedIcon, {}),
  },
  {
    title: "Geek",
    href: "/geek",
    icon: React.createElement(TextSnippetOutlinedIcon, {}),
  },
  {
    title: "Matchmaking",
    href: "/matchmaking",
    icon: React.createElement(WorkHistoryOutlinedIcon, {}),
  },
];

export const sidebarMenuElements = [
  {
    title: "Programista 100K",
    href: "/programista100k",
    icon: React.createElement(MoneyOutlinedIcon, {}),
  },
  {
    title: "For Juniors",
    href: "/junior/",
    icon: React.createElement(CastForEducationIcon, {}),
  },
  {
    title: "Program Ambasadorski",
    href: "/program-ambasadorski",
    icon: React.createElement(SchoolIcon, {}),
  },
  {
    title: "IT Index",
    href: "/itx",
    icon: React.createElement(LeaderboardIcon, {}),
  },
  {
    title: "Event",
    href: "/event",
    icon: React.createElement(TodayIcon, {}),
  },
  {
    title: "Just Join Games",
    href: "/games",
    icon: React.createElement(EmojiEventsIcon, {}),
  },
  {
    title: "Press Room",
    href: "/media",
    icon: React.createElement(EditNoteIcon, {}),
  },
  {
    title: "Report",
    href: "/report",
    icon: React.createElement(AssessmentOutlinedIcon, {}),
  },
  {
    title: "Careers",
    href: "/brands/story/just-join-it",
    icon: React.createElement(RocketLaunchOutlinedIcon, {}),
  },
];

export const helpSidebarElements = [
  {
    title: "RSS",
    href: "/feed.atom",
    icon: React.createElement(RssFeedIcon, {}),
    hideMobile: true,
  },
  {
    title: "Help",
    href: "/help",
    icon: React.createElement(HelpOutlineOutlinedIcon, {}),
    hideMobile: false,
  },
  {
    title: "Terms",
    href: "/terms-and-privacy-policies",
    icon: React.createElement(DifferenceOutlinedIcon, {}),
    hideMobile: false,
  },
];
