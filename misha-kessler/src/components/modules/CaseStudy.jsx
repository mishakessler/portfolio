import React from 'react'

import {
  Modal,
  Button,
} from 'semantic-ui-react'

export default function CaseStudy(props) {
  return (
    <Modal
      basic
      closeIcon
      centered={false}
      // dimmer={"blurring"}
      trigger={
        <Button
          color='teal'
          className='smooth'
          icon={{
            name: 'search',
            size: 'large',
            className: 'ui-button-icon',
          }}
        />}
    >
      <Modal.Header
        icon='archive' content={props.project.name}
      />

      <Modal.Content>
        {/* <img src={props.project.cs_img_1} alt="Case Study Landing" /> */}
        {props.project.cs_img_1}
        {props.project.cs_intro}
        {props.project.cs_img_2}
        {props.project.cs_description}
        {props.project.cs_conclusion}
      </Modal.Content>

      <Modal.Description>

      </Modal.Description>

      {/* <Modal.Actions>
        <Button basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions> */}
    </Modal>
  )
}
