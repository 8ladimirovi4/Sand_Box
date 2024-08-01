import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";
import { colors } from "styles/colors";
import { mtLogo } from "../../assets";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: fit-content;
  background-color: ${colors.primary};
  color: white;
`;

export const HeaderLogoContainer = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
`;

HeaderLogo.defaultProps = { src: mtLogo};

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  background-color: ${colors.primary};
  color: white;
`;

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`;
