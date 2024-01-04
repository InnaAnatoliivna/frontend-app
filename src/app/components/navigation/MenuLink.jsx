import Link from "next/link";
import { styled } from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import { usePathname } from "next/navigation";

const LinkStyled = styled(Link, {
  shouldForwardProp: (propName) => propName !== "active",
})(
  ({ active }) => `
  min-width: 64px;
  margin: 0 6px;
  padding: 0;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${active ? pink[500] : grey[400]};
  letter-spacing: 0;
  line-height: 1.75;
  white-space: nowrap;
  ${
    !active
      ? `
      &:hover {
          color: ${pink[200]}
      }
  `
      : ""
  }
`
);

const MenuLink = ({ children, href }) => {
  const pathname = usePathname();

  const props = {
    href,
    active: pathname === href,
  };

  return <LinkStyled {...props}>{children}</LinkStyled>;
};

export default MenuLink;
