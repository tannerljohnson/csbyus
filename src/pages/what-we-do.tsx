import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="heart" />
          <Header.Content>
            What We Do
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          Blah blah 
        </p>

      </Segment>

    </Container>
  );
};
