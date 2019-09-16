// React
import React from 'react'

// React Semantic
import {
  Header,
  Grid,
  Icon,
  Button,
  Modal
} from 'semantic-ui-react'

const Key = () => (
  <Modal trigger={
    <Button
      basic
      inverted
      icon
      className='smooth' >
      <Icon name='key' />
    </Button>}
    closeIcon >
    <Modal.Content
      scrolling >
      <Grid stackable centered columns={4} divided >
        <Grid.Column>
          <Header>Development</Header>
          <p><Icon name='markdown' /> Markdown</p>
          <p><Icon name='wordpress' /> Wordpress</p>
          <p><Icon name='html5' /> HTML</p>
          <p><Icon name='css3' /> CSS</p>
          <p><Icon name='php' /> PHP</p>
          <p><Icon name='js square' /> JavaScript</p>
          <p><Icon name='code' /> jQuery</p>
          <p><Icon name='node js' /> NodeJS</p>
          <p><Icon name='code' /> ExpressJS</p>
          <p><Icon name='react' /> ReactJS</p>
          <p><Icon name='server' /> MySQL</p>
          <p><Icon name='server' /> PostgreSQL</p>
          <p><Icon name='gem' /> Ruby</p>
          <p><Icon name='subway' /> Rails</p>
          <p><Icon name='key' /> Authentication</p>
          <p><Icon name='mobile alt' /> Responsiveness</p>
          <p><Icon name='universal access' /> Accessibility</p>
        </Grid.Column>
        <Grid.Column>
          <Header>Design</Header>
          <p><Icon name='adobe' /> Adobe Photoshop</p>
          <p><Icon name='adobe' /> Adobe Illustrator</p>
          <p><Icon name='file pdf' /> Adobe InDesign</p>
          <p><Icon name='invision' /> Invision</p>
          <p><Icon name='tint' /> Color Palettes</p>
          <p><Icon name='bolt' /> Lettermark, Logomark, & Wordmarks</p>
          <p><Icon name='images' /> Digital Deliverables</p>
          <p><Icon name='address card' /> Print Deliverables</p>
          <p><Icon name='user' /> User Flow & Journeys</p>
          <p><Icon name='handshake' /> Design Handoffs</p>

        </Grid.Column>
        <Grid.Column>
          <Header>Advocacy</Header>
          <p><Icon name='university' /> Academic</p>
          <p><Icon name='gavel' /> Legislative</p>
          <p><Icon name='heart' /> Nonprofit</p>
          <p><Icon name='users' /> Committee Member</p>
          <p><Icon name='compass' /> Advisor</p>
          <p><Icon name='newspaper' /> News Article</p>
          <p><Icon name='book' /> Research Publication</p>
          <p><Icon name='microphone' /> Interview</p>
          <p><Icon name='podium' /> Public Speech</p>
          <p><Icon name='video' /> Documentary Film</p>
          <p><Icon name='certificate' /> Awardee</p>
        </Grid.Column>
        <Grid.Column>
          <Header>Miscellaneous</Header>
          <p><Icon name='search' /> View Case Study</p>
          <p><Icon name='globe' /> View Live Site</p>
          <p><Icon name='github' /> View Github Repo</p>
          <p><Icon name='apple' /> macOS</p>
          <p><Icon name='google' /> Google Admin & Apps</p>
          <p><Icon name='github' /> Github</p>
          <p><Icon name='codepen' /> CodePen</p>
          <p><Icon name='stack overflow' /> StackOverflow</p>
          <p><Icon name='slack' /> Slack</p>
        </Grid.Column>
      </Grid>
    </Modal.Content>
  </Modal>
)

export default Key
