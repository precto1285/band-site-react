import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import MerchandiseCard from './MerchandiseCard/MerchandiseCard';
// Images
import tshirts from '../images/brandi-ibrao-hH7iYOgMzc8-unsplash.jpg'
import posters from '../images/frankie-cordoba-tg6dkh4hiM8-unsplash.jpg'
import keychains from '../images/marc-olivier-paquin-2_RQhbu0ZDQ-unsplash.jpg';
import vinyls from '../images/neonbrand-TOf0z0ykWO8-unsplash.jpg'
import baseballcaps from '../images/joshua-h-aaP_NB04HRA-unsplash.jpg'
import dvds from '../images/neonbrand-x13HqcNKnOk-unsplash.jpg'

class Merchandise extends Component {
  state = [
    {
      image: tshirts,
      item: "T-shirts",
      merchId: "t1"
    },
    {
      image: posters,
      item: "Posters",
      merchId: "p2"
    },
    {
      image: keychains,
      item: "Key Chains",
      merchId: "kc3"
    },
    {
      image: vinyls,
      item: "Vinyls and CD's",
      merchId: "vc4"
    },
    {
      image: baseballcaps,
      item: "Baseball Caps",
      merchId: "bc5"
    },
    {
      image: dvds,
      item: "DVD's",
      merchId: "d6"
    }
  ]
  render() {
    return (
      <div className="mb-4">
        <Jumbotron className="py-5 text-center text-white bg-dark">
          <h1>Merchandise</h1>
        </Jumbotron>
        <Row>
          <Col><MerchandiseCard image={this.state[0].image} item={this.state[0].item} merchId={this.state[0].merchId} /></Col>
          <Col><MerchandiseCard image={this.state[1].image} item={this.state[1].item} merchId={this.state[1].merchId} /></Col>
          <Col><MerchandiseCard image={this.state[2].image} item={this.state[2].item} merchId={this.state[2].merchId} /></Col>
        </Row>
        <Row>
          <Col><MerchandiseCard image={this.state[3].image} item={this.state[3].item} merchId={this.state[3].merchId} /></Col>
          <Col><MerchandiseCard image={this.state[4].image} item={this.state[4].item} merchId={this.state[4].merchId} /></Col>
          <Col><MerchandiseCard image={this.state[5].image} item={this.state[5].item} merchId={this.state[5].merchId} /></Col>
        </Row>
      </div>
    );
  };
};

export default Merchandise;