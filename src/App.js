// import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import React, { Component } from 'react';

class App extends Component {
  onChangeHandler=event=>{

    console.log(event.target.files[0])

}

  render() {
    const logoStyle = {
      marginTop: '100px'

    }

    const formStyle = {
      marginTop: '60px',
      marginBottom: '100px'
    }

return (
    <div className="App">
      <header className="App-header">

      <Image style={logoStyle}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoORr4vgEZxDedLK70T41noCF0xLA96Br_8Qba5m_cAy72kqh5CA" />

      <Form style={formStyle}>
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
          <Form.Control type="file" name="file" onChange={this.onChangeHandler}/>

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


export default App;
