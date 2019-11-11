import React from 'react';
import { Jumbotron, Form, FormGroup, Input } from 'reactstrap';

const JoinUs = (props) => {
  return (
    <div>
      <Jumbotron className="bg-dark pt-5 text-center text-white">
        <h1 className="mt-4">Join Us</h1>
        <h3 className="text-danger">The Chaos Shell Fan Club</h3>
        <p>Sign up for to get the latest news, discussions, upcoming shows, and new releases</p>
        <Form>
          <FormGroup>
            <Input type="text" className="form-control mb-2" id="name" placeholder="Name" />
            <Input type="email" className="form-control mb-2" id="email" placeholder="Email" />
            <Input type="submit" className="form-control mb-2 btn btn-danger btn-block" id="submit" value="Submit" />
          </FormGroup>
        </Form>
      </Jumbotron>


    </div>
  );
};

export default JoinUs;