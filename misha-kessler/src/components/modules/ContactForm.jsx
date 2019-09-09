// React
import React, { Component } from 'react'

// React Semantic
import {
  Form,
  Input,
  TextArea,
  Button
} from 'semantic-ui-react'

export default class ContactForm extends Component {
  render() {
    return (
      <div>
        <Form
          netlify
          name='contact-form'>
          <Form.Group
            widths='equal'>
            <Form.Field
              name='first-name'
              id='first-name'
              control={Input}
              placeholder='First Name'
            />
            <Form.Field
              name='last-name'
              id='last-name'
              control={Input}
              placeholder='Last Name'
            />
          </Form.Group>
          <Form.Group
            widths='equal'>
            <Form.Field
              name='email'
              id='email'
              control={Input}
              type='email'
              placeholder='Email Address'
            />
            <Form.Field
              name='subject'
              id='subject'
              control={Input}
              placeholder='Subject'
            />
          </Form.Group>
          <Form.Field
            name='message'
            id='message'
            control={TextArea}
            placeholder='Message'
          />
          <Form.Field
            id='submit'
            control={Button}
            content='Submit' />
        </Form>
      </div>
    )
  }
}
