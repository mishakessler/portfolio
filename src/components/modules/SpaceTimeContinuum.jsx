import React, { Component } from 'react'

import {
  Link,
} from 'react-router-dom'

import {
  Modal,
  Header,
  Button
} from 'semantic-ui-react'

export default class SpaceTimeContinuum extends Component {
  render() {
    return (
      <Modal
        basic
        centered
        defaultOpen
        className="continuum">
        <Header content="You're already on this site! Now you've gone and broken the space-time continuum, great." />
        <Modal.Actions>
          <Link to='/development'>
            <Button
              basic
              inverted
              color='teal' > Fix It
          </Button>
          </Link>

        </Modal.Actions>
      </Modal>
    )
  }
}