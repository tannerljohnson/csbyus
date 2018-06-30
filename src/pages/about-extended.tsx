import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="heart" />
          <Header.Content>
            Our Story
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          Durham, North Carolina, is a community home to one of the nation's most robust tech industries, 
          and yet accessible K-12 CS education programming remains scarce. Our team conducted <a href="https://drive.google.com/file/d/1mzQVjkViLtheaF52JBOaxXVTQF5Y6Xyc/view?usp=sharing">award-winning 
          research</a> on the state of CS education, finding that what Durham needs is not only freely available, 
          pre-packaged CS curricula, but also community-tailored, student-centered CS education. This is why we 
          developed <a href="http://www.dukechronicle.com/article/2017/11/duke-students-develop-after-school-program-to-bring-computer-science-to-low-income-middle-schoolers">Mobile Citizens</a>, 
          which empowers students to utilize CS to fully participate in their communities 
          by creating knowledge, sharing ideas, and solving problems relevant to their communities.
        </p>
        <p>
          To create the curriculum for Mobile Citizens, we first turned to existing open-access resources like 
          Code.org’s <a href="https://code.org/educate/csd">CS Discoveries</a> and Google’s <a href="https://csfirst.withgoogle.com/en/home">CS First</a>. After evaluating the widespread high-quality open education 
          resources currently available, we realized none quite fit the Durham community’s unique needs. With mentorship 
          from the <a href="https://ospri.ssri.duke.edu/">OSPRI</a> (Open Source Pedagogy, Research + Innovation) initiative and in consultation with Duke CS and 
          education professors, we adapted Code.org’s CS Discoveries curriculum to reflect the more civic-minded ethos 
          that our students in Durham have. Our student-generated, community-tailored Mobile Citizens curriculum has 
          made a more personal, meaningful impact than curricula that is “one-size-fits-all.”
        </p>
        <p>
          We are thrilled that our Mobile Citizens curriculum is being expanded to additional middle schools and after 
          school programs in our community. However, the problem of access to relevant CS education extends past Durham; 
          every community deserves CS education that complements its unique diversity and distinctiveness. CSbyUs employs 
          the same pedagogical model of Mobile Citizens, but extends the curriculum beyond CS Discoveries so that the 
          framework that has served our Durham students can also serve students in downtown Houston, small suburbs of Idaho, 
          and all other communities. It was undergraduates who created more personal, relevant CS education with our first 
          curriculum, Mobile Citizens, and we believe that CSbyUs can empower more undergraduates to do the same.
        </p>
      </Segment>
    <Segment vertical>
        <Header as="h2">
          <Icon name="globe" />
          <Header.Content>
            Learning Model
          </Header.Content>
        </Header>
    </Segment>
    <Segment vertical>
      <p>
        CSbyUs combines a personalized learning model with the power of 21st century information technology to 
        expand access to high-impact computer science education and close the diversity gap in STEM fields. 
        CSbyUs supports networks of undergraduate students to customize existing open-access CS curricula to meet 
        the needs of local learning communities and deploy their new open-source curricula in middle and high schools 
        and after school programs.
      </p>
      <ul>
        <li>Student-centered</li>
        <li>Community-embedded</li>
        <li>Project-based</li>
        <li>Informed by design thinking</li>
        <li>By students, for students</li>
      </ul>
      </Segment>
    </Container>
  );
};
