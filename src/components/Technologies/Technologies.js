import React from 'react';
import { FaGlobe, FaMobileAlt, FaBrain } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've Worked with a Range a technologies in the web, mobile app, and machine learning development world.
    </SectionText>
    <List>
      <ListItem>
        <FaGlobe size="3rem" />
        <ListContainer>
          <ListTitle>Website</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Laravel
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaMobileAlt size="3rem" />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experience with <br />
            Kotlin and React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaBrain size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experience with <br />
            Keras and Tensorflow
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
