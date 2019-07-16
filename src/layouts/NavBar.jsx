import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';

import HamburgerMenu from 'react-hamburger-menu';

const StyledLink = styled(Link)`
  display: flex;
  font-size: 18px;
  font-weight: 800;
  font-family: ${props => props.theme.fontFamily.heading};
  align-items: center;
  margin-left: 0 !important;
  color: ${props => props.theme.colors.white.base};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;


const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <Nav>
      <StyledLink to="/">
        dnavdeej
      </StyledLink>
    </Nav>
    <Nav>
      <Link to="/blog">Blog</Link>
      {/* <Link to="/about">Projects</Link> */}
    </Nav>
  </Headroom>
);

export default NavBar;
