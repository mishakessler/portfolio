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
        <Modal.Description>

          {!props.project.cs_img_1 &&
            <p>Sorry, this case study is still under construction. Check back later!</p>}

          {props.project.cs_img_1 &&
            <img src={props.project.cs_img_1} alt="Case Study Landing" />}
          {props.project.cs_intro &&
            <p>{props.project.cs_intro}</p>}
          {props.project.cs_img_2 &&
            <p>{props.project.cs_img_2}</p>}
          {props.project.cs_description &&
            <p>{props.project.cs_description}</p>}
          {props.project.cs_conclusion &&
            <p>{props.project.cs_conclusion}</p>}

        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        {props.project.url_to_demo &&
          <Button
            content='View Live Site'
            as='a'
            href={props.project.url_to_demo}
            target='_blank'
            color='teal'
            className='smooth'
            icon={{
              name: 'globe',
              size: 'large',
              className: 'ui-button-icon',
            }}
          />}
        {props.project.url_to_github &&
          <Button
            content='View GitHub Repo'
            as='a'
            href={props.project.url_to_github}
            target='_blank'
            color='teal'
            className='smooth'
            icon={{
              name: 'github',
              size: 'large',
              className: 'ui-button-icon',
            }}
          />}
      </Modal.Actions>
    </Modal >
  )
}
