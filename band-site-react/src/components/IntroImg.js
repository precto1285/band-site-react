import React from 'react';
import "./Components.css";
import { Row, Col } from 'reactstrap';
import Anarchy from '../images/Anarchy.png';

const IntroImg = (props) => {

  return (
    <div id="introImage">
      <Row>
        <Col className="col-lg-12 pb-3 text-center">
          <img id="logoAnarchy" src={Anarchy} alt="anarchy" width="55%" />
          <h1 id="bandName" className="my-3 text-danger">
            Anarchy Turtle
            </h1>
        </Col>
      </Row>
    </div>
  );
};

export default IntroImg;