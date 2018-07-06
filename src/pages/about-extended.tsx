import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Container>
      <Segment vertical>
        <Container>
          <Header as="h1" textAlign='center'>
            <Icon name="heart" />
            <Header.Content textAlign='center'>
              Our Story
            </Header.Content>
          </Header>
        </Container>
      </Segment>
      <Segment vertical>
        <p>
          <font size="3.5">Our story begins in Durham, North Carolina, a community home to one of the most robust tech industries and least accessible 
          computer science (CS) education programming. We conducted <a href="https://drive.google.com/file/d/1mzQVjkViLtheaF52JBOaxXVTQF5Y6Xyc/view?usp=sharing">award-winning 
          research</a> on the state of CS education, finding what Durham needs is 
          community-tailored, student-centered CS education. So, we created <a href="http://www.dukechronicle.com/article/2017/11/duke-students-develop-after-school-program-to-bring-computer-science-to-low-income-middle-schoolers">Mobile Citizens</a>, a program that empowers middle school 
          students to create mobile apps relevant to their communities’ needs. </font> 
        </p>
        <p>
          <font size="3.5">To create the curriculum for Mobile Citizens, we first turned to Code.org’s <a href="https://code.org/educate/csd">CS Discoveries</a> and Google’s <a href="https://csfirst.withgoogle.com/en/home">CS First</a>, 
          but we realized none quite fit the Durham community’s unique needs. With mentorship from the <a href="https://ospri.ssri.duke.edu/">OSPRI</a> (Open Source Pedagogy, Research + Innovation) initiative and Duke 
          professors, we adapted CS Discoveries to make our Mobile Citizens curriculum civically minded and interactive, a curriculum 
          more meaningful than a curriculum that is “one-size-fits-all.”</font> 
        </p>
        <p>
          <font size="3.5">We are thrilled that our Mobile Citizens curriculum has expanded to three additional Durham communities. 
            However, the problem of access to relevant CS education extends past Durham; every community deserves CS education that 
            complements its diversity and distinctiveness. CSbyUs is extending the pedagogy that served our Durham students to also serve 
            students in downtown Houston, suburbs of Idaho suburbs, and all other communities. It was undergraduates who created more personalized 
            CS education with our first curriculum, Mobile Citizens, and we believe that CSbyUs can empower more undergraduates to do the same.</font> 
        </p>
      </Segment>
    <Segment vertical>
        <Header as="h1">
          <Icon name="globe" />
          <Header.Content>
            Learning Model
          </Header.Content>
        </Header>
    </Segment>
    <Segment vertical>
      <p>
        <font size="3.5">CSbyUs supports a network of undergraduate students to customize and deploy CS curricula to middle school 
        students in their area. We further harness the uniqueness of our learners by delivering curricula that is: 
        1) <b>student-centered</b> 2) <b>project-based</b> and 3) informed by <b>design thinking</b>. CSbyUs enables CS to be taught by students, 
        for students.</font> 
      </p>
      </Segment>
    </Container>
  );
};
