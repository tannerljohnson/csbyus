import * as React from "react";
import { Header, Container, Segment, Icon, Grid, Icon, Button} from "semantic-ui-react";
import {ExampleImage} from "../components/image-renders.jsx";

export default () => {
  return (
    <Container>
        <Segment>
            <Container style={{padding: "30px"}}>
                <Header as='h2' size='huge' icon textAlign='center' >
                <Icon name='users' circular />
                    <Header.Content>What We Do</Header.Content>
                </Header>
                <Header as='h3' textAlign='center' >
                    <Header.Content>
                        The mission of CSbyUs is to ignite future change-agents by providing quality computer science education
                        to students from under-resourced communities. 
                    </Header.Content>
                </Header>
            </Container>
            <Segment vertical className="stripe alternate feature" style={{padding: "50px"}}>
                <Grid columns="3" textAlign="center" divided relaxed stackable className="container" style={{color: "gray"}}>
                    <Grid.Row> 
                        <Grid.Column>
                            <Icon name="pencil alternate" size='huge' style={{color: "#e91e63"}}></Icon>
                            <Header >
                                <font size="4">The Problem</font>
                            </Header>
                              <Button icon fluid basic href="#problem">
                                <Icon name='angle down' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Icon name="lightbulb outline" size='huge' style={{color: "#e91e63"}}></Icon>
                            <Header >
                                <font size="4">The Solution</font>
                            </Header>
                            <Button icon fluid basic>
                                <Icon name='angle down' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Icon name="users" size='huge' style={{color: "#e91e63"}}></Icon>
                            <Header >
                                <font size="4">Our Impact</font>
                            </Header>
                            <Button icon fluid basic>
                                <Icon name='angle down' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
      </Segment>
      <Segment name="problem">
            <Header as='h2' textAlign='center'>
                <Header.Content>The Problem</Header.Content>
            </Header>
            <Header as='h3' textAlign='center'>
                <Header.Content>
                    These are all the problems and their rationale. 
                </Header.Content>
            </Header>
      </Segment>
        <Segment >
            <Header as='h2' textAlign='center'>
                <Header.Content>The Solution</Header.Content>
            </Header>
            <Header as='h3' textAlign='center'>
                <Header.Content>
                    These are all the solutions and their rationale. 
                </Header.Content>
            </Header>
      </Segment>
        <Segment >
            <Header as='h2' textAlign='center'>
                <Header.Content>Our Impact</Header.Content>
            </Header>
            <Header as='h3' textAlign='center'>
                <Header.Content>
                    Here are all the ways we're making an impact. 
                </Header.Content>
            </Header>
      </Segment>
    </Container>
  );
};
