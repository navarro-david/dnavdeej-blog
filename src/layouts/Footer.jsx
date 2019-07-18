import React from 'react';
import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons'

const Wrapper = styled.footer`
  position: relative;
  padding-top: 1rem;
  bottom: 0;
  background: ${props => props.bgColor ? props.bgColor : props.theme.gradient.rightToLeft};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  > * {
    margin: 0 .25rem;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <SocialIcon url='https://www.linkedin.com/in/dnavdeej/' bgColor='#ffffff' style={{ height: 20, width: 20 }}/>
      <SocialIcon url='https://www.instagram.com/dnavdesign/' bgColor='#ffffff' style={{ height: 20, width: 20 }}/>
      <SocialIcon url='https://github.com/navarro-david' bgColor='#ffffff' style={{ height: 20, width: 20 }}/>
    </Text>
  </Wrapper>
);
export default Footer;
