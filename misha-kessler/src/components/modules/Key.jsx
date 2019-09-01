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
          <Header>Code</Header>
          <p><Icon name='markdown' /> Markdown</p>
          <p><Icon name='wordpress' /> Wordpress</p>
          <p><Icon name='html5' /> HTML</p>
          <p><Icon name='css3' /> CSS</p>
        </Grid.Column>
        <Grid.Column>
          <Header>Design</Header>
          <p><Icon name='markdown' /> Markdown</p>
          <p><Icon name='wordpress' /> Wordpress</p>
          <p><Icon name='html5' /> HTML</p>
          <p><Icon name='css3' /> CSS</p>
        </Grid.Column>
        <Grid.Column>
          <Header>Advocacy</Header>
          <p><Icon name='markdown' /> Markdown</p>
          <p><Icon name='wordpress' /> Wordpress</p>
          <p><Icon name='html5' /> HTML</p>
          <p><Icon name='css3' /> CSS</p>
        </Grid.Column>
        <Grid.Column>
          <Header>Miscellaneous</Header>
          <p><Icon name='markdown' /> Markdown</p>
          <p><Icon name='wordpress' /> Wordpress</p>
          <p><Icon name='html5' /> HTML</p>
          <p><Icon name='css3' /> CSS</p>
        </Grid.Column>
      </Grid>
    </Modal.Content>
  </Modal>
)

export default Key
