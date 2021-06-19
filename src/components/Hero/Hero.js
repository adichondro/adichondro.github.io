import React from 'react';
import { FaMedium } from 'react-icons/fa';
//import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Img, HeroNameText, HeroInfo, HeroTitle, HeroSection, Hr } from './HeroStyles';

const Hero = (props) => (
  <HeroSection row nopadding>
    <LeftSection>
      <HeroTitle main center>
        Hi! Chondro Here,  <br />
        Welcome to my Personal <br />
        Portfolio
      </HeroTitle>
      <Button onClick={() => window.open("https://medium.com/@chondroa", "_blank")}>
        <FaMedium />
        <Hr />
        Medium
      </Button>
    </LeftSection>
    <RightSection>
      <Img src='/images/me.jpg' />
      <HeroNameText>
        Adi Chondro
      </HeroNameText>
      <HeroInfo>
        A Web & Mobile Developer
      </HeroInfo>
    </RightSection>
  </HeroSection>

);

export default Hero;