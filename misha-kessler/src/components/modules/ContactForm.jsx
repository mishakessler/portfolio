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
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", subject: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, subject } = this.state;
    return (
      <div>
        <Form
          error
          success
          name='contact-form'
          onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group
            widths='equal'>
            <Form.Field
              name='name'
              id='name'
              value={name}
              control={Input}
              placeholder='Name'
              onChange={this.handleChange}
            />
            <Form.Field
              name='email'
              id='email'
              value={email}
              control={Input}
              type='email'
              placeholder='Email Address'
              onChange={this.handleChange}
            />
            <Form.Field
              name='subject'
              id='subject'
              value={subject}
              control={Input}
              placeholder='Subject'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field
            name='message'
            id='message'
            value={message}
            control={TextArea}
            placeholder='Message'
            onChange={this.handleChange}
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
