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

const MenuIcon = styled.div`
  margin-left: 2rem;
`;

const MenuBackdrop = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 5rem;
  background: #f0f0f0;
  box-shadow: ${props => props.theme.shadow.feature.small.hover};

  transition: ${props => props.theme.transitions.boom.transition};
  overflow: hidden;
  opacity: 0;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const MenuLinks = styled(Link)`
  color: ${props => props.theme.colors.black.base}
`;

class NavBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hamburgerColor: '#fff',
      menuOpened: false
    }
  }

  handleOnPin(){
    this.setState({hamburgerColor: '#333438'})
  }

  handleOnUnfix(){
    this.setState({hamburgerColor: '#fff'})
  }

  handleMenuClicked(){
    this.setState({menuOpened: !this.state.menuOpened})
  }

  render(){
    const hamburgerColor = this.state.hamburgerColor;
    const menuOpened = this.state.menuOpened;
    return(
      <Headroom calcHeightOnResize disableInlineStyles
        onPin={() => this.handleOnPin()}
        onUnfix={() => this.handleOnUnfix()}
        >
        <Nav>
          <StyledLink to="/">
            dnavdeej
          </StyledLink>
        </Nav>
        <Nav>
          <Link to="/blog">Blog</Link>
          <MenuIcon>
            <HamburgerMenu
              isOpen={menuOpened}
              menuClicked={() => this.handleMenuClicked()}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              borderRadius={0}
              animationDuration={0.5}
              color={hamburgerColor}
            />
          </MenuIcon>
        </Nav>
        <MenuBackdrop
          style={menuOpened ? 
            { opacity: '1',
              pointerEvents: 'auto'
            } : 
            { opacity: '0',
              pointerEvents: 'none'}}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </MenuBackdrop>
      </Headroom>
    )
  }
}


export default NavBar;
