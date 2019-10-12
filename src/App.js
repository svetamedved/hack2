import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoORr4vgEZxDedLK70T41noCF0xLA96Br_8Qba5m_cAy72kqh5CA" />

      <Form>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>

        <Form.Group controlId="formBasicCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Company Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasic">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="Phone" />
        </Form.Group>
        <Form.Group controlId="formBasic">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      </header>

    </div>
  );
}

export default App;
