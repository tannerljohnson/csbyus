import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
// import ExampleImageLink from "../../assets/images/ExampleImage";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

const OurModelFlowChartImage = () => <Image src='/assets/images/OurModelFlowChartDiagram.png'/>

export default (props: IndexPageProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">CSbyUs</Header>
        <Header inverted as="h2">Expanding access to quality computer science education <br/>by students, for students</Header>
        <Button primary size="huge">Get started!</Button>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Container text textAlign="center">
        <Header as="h1">What we do<br/><br/></Header>
      </Container>
      
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Row>
          <Grid.Column width="5">
            <Header icon textAlign="center">
              <Icon name="wrench" style={{color: "#e91e63"}}></Icon>
              Customize
            </Header>
              <p>
                Adapt existing open-access CS curricula (like Code.org CS Discoveries and Google CS First) 
                to meet the unique learning needs of local communities
              </p>
          </Grid.Column>
          <Grid.Column width="5" floated="right">
            <Header icon textAlign="center">
              <Icon name="user" color="blue"></Icon>
              Deploy
            </Header>
              <p>
                Volunteer to teach the adapted curricula in local middle and high schools and after school 
                programs with deep attention to assessment
              </p>
          </Grid.Column>

          <Grid.Column width="5" floated="right">
            {/* TODO replace with a pretty GIF */}
            <Header icon textAlign="center">
              <Icon name="globe" color="green"></Icon>
              Support
            </Header>
              <p>
                Provide teacher training materials, maintain an online community of current 
                and former teachers and students, and host an annual CSbyUs summit
              </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container>
        <br/><br/><br/>
      <div style={{textAlign: "center", verticalAlign: "bottom"}}>
        <iframe width="854" height="480" src="https://www.youtube.com/embed/wiKFYjAChok" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      </Container>
    </Segment>

    {/* Our model */}
    <Segment vertical className="stripe">
      <Container text>
        <Header as="h1" textAlign="center">
          Our Model <br/><br/>
        </Header>
      </Container>
      <Grid stackable verticalAlign="top" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <p>
              CSbyUs combines a personalized learning model with the power of 
              21st century information technology to expand access to high-impact 
              computer science education and close the diversity gap in STEM fields. 
              CSbyUs supports networks of undergraduate students to customize existing 
              open-access CS curricula to meet the needs of local learning communities and 
              deploy their new open-source curricula in middle and high schools and after school programs.
            </p>
          </Grid.Column>
          <Grid.Column width="8" floated="right" textAlign="center">
            <p>Key values:</p>
            <List bulleted>
              <List.Item>Student-centered</List.Item>
              <List.Item>Community-embedded</List.Item>
              <List.Item>Project-based</List.Item>
              <List.Item>Informed by design thinking</List.Item>
              <List.Item>By students, for students</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Container text>
        <Header as="h1" textAlign="center">
         Meet the team <br/><br/>
        </Header>
      </Container>
      <Grid columns="4" textAlign="center" divided relaxed stackable className="container" style={{color: "gray"}}>
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="user"></Icon>
              <font size="4"><a href="https://www.linkedin.com/in/aria-chernik-512065a8/">Aria Chernik, JD, PhD</a></font>
              <br/><em>Co-founder</em>
            </Header>
            <p>
              Aria is founder and director of <a href="https://ospri.ssri.duke.edu/">OSPRI</a> 
               and a lecturing fellow in the Social Science Research Institute at Duke University. 
              Her work is dedicated to catalyzing the power of open education to transform learning 
              and create a more participatory, egalitarian world.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="user"></Icon>
              <font size="4"><a href="https://www.linkedin.com/in/tanner-johnson-4ba701b8/">Tanner Johnson</a></font>
              <br/><em>Co-founder</em>
            </Header>
            <p>
              Tanner is a Duke University graduate, where he co-founded <a href="https://www.facebook.com/mobilecitizens/">Mobile Citizens</a>. 
              As a software engineer and <a href="https://us.fulbrightonline.org/">J. William Fulbright Scholar</a>, he’s interested in 
              personalizing and broadening access to education using technology.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="user"></Icon>
              <font size="4"><a href="https://www.linkedin.com/in/gobluedevils/">Amy Jiang</a></font>
              <br/><em>Co-founder</em>
            </Header>
            <p>
              Amy is interested in understanding how systems, together, can create better 
              learning experiences for students. For this reason, she is currently pursuing 
              a Public Policy major at Duke and, more importantly, hanging out with middle school students!
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="user"></Icon>
              <font size="4"><a href="https://www.linkedin.com/in/carterzenke/">Carter Zenke</a></font>
              <br/><em>Co-founder</em>
            </Header>
            <p>
              Carter is an <a href="https://today.duke.edu/2016/06/abduke16">Angier B. Duke Scholar</a> and Humanity in Action <a href="https://www.humanityinaction.org/programs/75-the-john-lewis-fellowship">John Lewis Fellow</a> 
              working to create a high-quality, equitable education for all students in the Digital Age.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;
