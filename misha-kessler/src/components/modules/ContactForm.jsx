// React
import React, { Component } from 'react'

// React Semantic
import {
  Form,
  Input,
  TextArea,
  Button
} from 'semantic-ui-react'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", subject: "", message: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Your message was successfully submitted."))
      .catch(error => alert(error));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, subject } = this.state;
    return (
      <div>
        <Form
          name='contact-form'
          onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group
            widths='equal'>
            <Form.Field
              required
              name='name'
              id='name'
              value={name}
              control={Input}
              placeholder='Name'
              onChange={this.handleChange}
            />
            <Form.Field
              required
              name='email'
              id='email'
              value={email}
              control={Input}
              type='email'
              placeholder='Email Address'
              onChange={this.handleChange}
            />
            <Form.Field
              required
              name='subject'
              id='subject'
              value={subject}
              control={Input}
              placeholder='Subject'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field
            required
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
