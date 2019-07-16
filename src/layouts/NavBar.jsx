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

const Menu = styled.div`
  margin-left: 2rem;
`;


class NavBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hamburgerColor: '#fff'
    }
  }

  handleOnPin(){
    this.setState({hamburgerColor: '#333438'})
    console.log('onPin')
  }

  handleOnUnfix(){
    this.setState({hamburgerColor: '#fff'})
    console.log('onUnfix')
  }

  render(){
    const hamburgerColor = this.state.hamburgerColor;
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
          <Menu>
            <HamburgerMenu
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              borderRadius={0}
              animationDuration={0.5}
              color={hamburgerColor}
            />
          </Menu>
        </Nav>
      </Headroom>
    )
  }
}


export default NavBar;
