import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarListItemButton = ({ title, icon, href, hideMobile }) => {
  const pathname = usePathname();
  const {
    palette: { mode },
    breakpoints,
  } = useTheme();

  const isDarkMode = mode === "dark";

  return (
    <ListItemButton
      LinkComponent={Link}
      href={href}
      selected={pathname === href}
      sx={{
        padding: "8px",
        minHeight: "44px",
        paddingLeft: "20px",
        color: isDarkMode ? "#9e9e9e" : "#5F656B",
        ...(hideMobile
          ? {
              [breakpoints.down("laptop")]: {
                display: "none",
              },
            }
          : {}),
        "&:hover": {
          backgroundColor: isDarkMode ? "#202020" : "#F3F6F8",
        },
        "&.Mui-selected": {
          backgroundColor: "transparent",
          color: "#f06292",
        },
        "&.Mui-selected:hover": {
          backgroundColor: "rgba(252,228,236,.3)",
        },
      }}
    >
      <ListItemIcon
        sx={{
          color: "inherit",
          minWidth: 36,
          display: "inline-flex",
          flexShrink: 0,
          fontSize: "0.875rem",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={title}
        sx={{
          color: "inherit",
          "& > span": { fontWeight: 600, fontSize: "0.875rem" },
        }}
      />
    </ListItemButton>
  );
};

export default SidebarListItemButton;
