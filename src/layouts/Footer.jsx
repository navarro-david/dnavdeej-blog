import React from 'react';
import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons'

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  > * {
    margin: 0 .25rem;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        David Navarro
      </span>
      <SocialIcon url='https://www.linkedin.com/in/dnavdeej/' bgColor='#f0f0f0' style={{ height: 20, width: 20 }}/>
      <SocialIcon url='https://www.instagram.com/dnavdesign/' bgColor='#f0f0f0' style={{ height: 20, width: 20 }}/>
      <SocialIcon url='https://github.com/navarro-david' bgColor='#f0f0f0' style={{ height: 20, width: 20 }}/>
    </Text>
  </Wrapper>
);
export default Footer;
