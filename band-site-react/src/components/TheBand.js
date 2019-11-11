import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import BandMember from './BandMemberCards/BandMember';
// Band Images
import JoshHanson from '../images/joshua-hanson-IU8I-uk-OPc-unsplash (1).jpg';
import LarryFischer from '../images/lily-fischer-aSivyt-3yIw-unsplash.jpg';
import NoelBrand from '../images/neonbrand-P4gXe-RsEXI-unsplash.jpg';
import VictorJuric from '../images/viktor-juric--10t7s-rYzE-unsplash.jpg';

class TheBand extends Component {
  state = [
    {
      name: "Josh Hanson",
      role: "Bass",
      image: JoshHanson,
      cardColor: "bg-danger p-2"
    },
    {
      name: "Larry Fischer",
      role: "Drums",
      image: LarryFischer,
      cardColor: "bg-dark p-2"
    },
    {
      name: "Noel Brand",
      role: "Guitar",
      image: NoelBrand,
      cardColor: "bg-danger p-2"
    },
    {
      name: "Victor Juric",
      role: "Vocals",
      image: VictorJuric,
      cardColor: "bg-dark p-2"
    }

  ]
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Jumbotron className="py-5 bg-dark text-center text-white mt-3">
              <h1>The Band</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-3 mb-2"><BandMember cardcolor={this.state[0].cardColor} name={this.state[0].name} role={this.state[0].role} image={this.state[0].image} /></Col>
          <Col className="col-lg-3 mb-2"><BandMember cardcolor={this.state[1].cardColor} name={this.state[1].name} role={this.state[1].role} image={this.state[1].image} /></Col>
          <Col className="col-lg-3 mb-2"><BandMember cardcolor={this.state[2].cardColor} name={this.state[2].name} role={this.state[2].role} image={this.state[2].image} /></Col>
          <Col className="col-lg-3 mb-2"><BandMember cardcolor={this.state[3].cardColor} name={this.state[3].name} role={this.state[3].role} image={this.state[3].image} /></Col>
        </Row>
      </div>
    );
  };
};

export default TheBand;