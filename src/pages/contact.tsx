import * as React from "react";
import { Header, Container, Segment, Icon, Button } from "semantic-ui-react";
import { FormContactUs } from './FormContactUs.jsx';

export default () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="envelope open outline" />
          <Header.Content>
            We're always looking for collaborators.  
          </Header.Content>
        </Header>
      </Segment>
      <Segment>
        <FormContactUs />
      </Segment>
      {/*<Segment>
        <h2>
          I am...
        </h2>
      <Button.Group vertical widths='5' size="huge">
        <Button>A college student</Button>
        <Button>Interested in sponsoring</Button>
        <Button>Other</Button>
      </Button.Group>
      </Segment>*/}
    </Container>
  );
};
