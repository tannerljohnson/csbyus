import React from 'react';
import {Reveal, Container, Header, Icon, Segment} from 'semantic-ui-react';
import {YoutubePlaceholder, CarterImage} from './image-renders';

export class RevealComponent extends React.Component {
  // TODO: pass props
  render() {
    return (
      <Reveal animated="move">
        <Reveal.Content visible>
          {/* <Segment textAlign="center" fluid>
                    <Header as="h1">
                        Our Mission
                    </Header>
                </Segment> */}
          <Segment>
            <Header icon textAlign="center">
              <Icon name="user" color="blue"/>
                  Our Mission
            </Header>
          </Segment>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Segment textAlign="center">
            <Header as="h4">
                    The mission of CSbyUs is to ignite future change-agents by providing <br/>quality computer science education to students <br/>from under-resourced communities.
            </Header>
          </Segment>
        </Reveal.Content>
      </Reveal>
    );
  }
}
