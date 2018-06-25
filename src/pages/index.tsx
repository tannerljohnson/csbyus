import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

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
        <Header as="h2">What we do<br/><br/></Header>
      </Container>
      
      <Grid stackable verticalAlign="middle" className="container">
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
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wrench"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;
