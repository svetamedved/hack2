import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import axios from 'axios';


export default class App extends Component {
  state = { value: null };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = event => {
    const { value } = this.state;
    axios.post('/api/sendMessage', { message: value });
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Chat</Form.Label>
            <Form.Control type="text"
                placeholder="Hey friend! How can i help you today?"
                value={this.state.value}
                onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        </header>

      </div>
    );
    }
  }
