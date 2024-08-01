import { LayoutProps } from "./types";
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,
  Footer,
  StyledNavLink,
  FooterNavContainer,
} from "./styles";

function Layout({children}:LayoutProps) {

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer >
          <HeaderLogo />
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/users"
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients"
          >
            Clients
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterNavContainer>
        </FooterNavContainer>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
