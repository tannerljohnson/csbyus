import * as React from "react";
import { Header, Container, Segment, Icon, Grid } from "semantic-ui-react";
import { RevealComponent } from "../components/RevealComponent.jsx";

export default () => {
  return (

    <Container>
      
      <Segment.Group vertical>
        <Segment inverted secondary>
          <Header style={{color : "black"}} as="h1" textAlign="center">
              <Header.Content><br/><font size="8">About Us</font></Header.Content>
          </Header>

          <Segment>
            <Header as="h3" textAlign="center">
                <Header.Content>
                  Founded in 2017 at Duke University, CSbyUs exists to broaden participation
                  in computer science.  <br/> We believe in equality of voice and that
                  each and every student can be an agent of change in their communities. <br/> We equip students from underserved communities
                  to share their voices by harnessinig the power of community and CS.  
                </Header.Content>
            </Header>
          </Segment>

        </Segment>

        <Segment >
          <Grid stackable verticalAlign="top" className="container" columns="2" divided>
            <Grid.Row>
              <Grid.Column >
                {/* <Header icon  textAlign="center">
                  <Icon name="wrench" style={{color: "#e91e63"}}></Icon>
                  Our Mission
                </Header>
                  <p>
                    <font size="3.5" textAlign="center">The mission of CSbyUs is to ignite future change-agents by providing quality computer science education to students from under-resourced communities.</font>
                  </p> */}
                  <Container >
                    <RevealComponent fluid/>
                  </Container>
              </Grid.Column>
              <Grid.Column  floated="right">
                <Header icon  textAlign="center">
                  <Icon name="user" color="blue"></Icon>
                  Our Vision
                </Header>
                  <p>
                  <font size="3.5">CSbyUs envisions an educational system in which all students are empowered to learn computer science in a way that is relevant to their lives.</font>
                  </p>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        {/* </Segment.Group> */}
        <Segment  inverted secondary>
          <Header as="h1" style={{color : "black"}} textAlign="center">
              <Header.Content><Icon name="heart"/>Our Story </Header.Content>
          </Header>
        
      <Segment >
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
      </Segment>

      </Segment.Group>

    </Container>
  );
};
