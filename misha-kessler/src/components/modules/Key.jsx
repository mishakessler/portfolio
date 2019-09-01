// React
import React, { Component } from 'react'

// React Semantic
import {
  Header,
  Divider,
  Label,
  Grid,
  Card,
  Icon,
  Image,
  Button,
  Modal
} from 'semantic-ui-react'

const Key = () => (
  <Modal trigger={
    <Button
      basic
      inverted
      className='smooth' >
      Icon Key
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
        </Grid.Column>
        <Grid.Column>
          <Header>Design</Header>
          <p><Icon name='adobe' /> Adobe Photoshop</p>
          <p><Icon name='adobe' /> Adobe Illustrator</p>
          <p><Icon name='file pdf' /> Adobe InDesign</p>
          <p><Icon name='invision' /> Invision</p>
        </Grid.Column>
        <Grid.Column>
          <Header>Advocacy</Header>
          <p><Icon name='university' /> Academic</p>
          <p><Icon name='gavel' /> Legislative</p>
          <p><Icon name='heart' /> Nonprofit</p>
          <p><Icon name='newspaper' /> News Articles</p>
          <p><Icon name='book' /> Research Publications</p>
          <p><Icon name='microphone' /> Interviews</p>
          <p><Icon name='comment' /> Public Speeches</p>
          <p><Icon name='video' /> Documentary Films</p>
        </Grid.Column>
        <Grid.Column>
          <Header>Miscellaneous</Header>
          <p><Icon name='mobile alt' /> Responsive</p>
          <p><Icon name='universal access' /> Accessible</p>
          <p><Icon name='apple' /> macOS</p>
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
