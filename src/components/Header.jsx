import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

// Default Clip Path
// -webkit-clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
//   clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);

// Default Breakpoint Clip Path
// -webkit-clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
//     clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);

const Wrapper = styled.header`
  -webkit-clip-path: ellipse(100% 55% at 48% 44%);
  clip-path: ellipse(100% 55% at 48% 44%);
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    -webkit-clip-path: ellipse(100% 55% at 60% 44%);
    clip-path: ellipse(100% 55% at 60% 44%);
  }
  background: ${props => props.bgColor ? props.bgColor : props.theme.gradient.leftToRight};
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`;

const Header = ({ children, title, date, cover, bgColor }) => (
  <Wrapper bgColor={bgColor}>
    <Img fluid={cover || {} || [] || ''} />
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>

      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
