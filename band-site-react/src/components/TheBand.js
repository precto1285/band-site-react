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
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat possimus fugit corporis molestias omnis exercitationem, corrupti asperiores explicabo itaque quam autem illo culpa aut!",
      cardColor: "bg-danger p-2"
    },
    {
      name: "Larry Fischer",
      role: "Drums",
      image: LarryFischer,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat possimus fugit corporis molestias omnis exercitationem, corrupti asperiores explicabo itaque quam autem illo culpa aut!",
      cardColor: "bg-dark p-2"
    },
    {
      name: "Noel Brand",
      role: "Guitar",
      image: NoelBrand,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat possimus fugit corporis molestias omnis exercitationem, corrupti asperiores explicabo itaque quam autem illo culpa aut!",
      cardColor: "bg-danger p-2"
    },
    {
      name: "Victor Juric",
      role: "Vocals",
      image: VictorJuric,
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat possimus fugit corporis molestias omnis exercitationem, corrupti asperiores explicabo itaque quam autem illo culpa aut!",
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia, sunt dolorum ea soluta
            reprehenderit, corporis dolores ducimus quaerat vel blanditiis incidunt nobis at magnam explicabo accusamus
            dignissimos ipsa impedit commodi nostrum! Sunt id libero veritatis perferendis dicta omnis impedit possimus,
            reiciendis aliquam dolore corporis nulla neque maxime magnam tempore pariatur voluptatem quaerat recusandae
            at est nostrum rerum eius temporibus repellendus. Ducimus illum placeat magni eius sequi, deserunt rem fuga
            mollitia quae illo magnam odio eum iste tempore. Sapiente dolore aliquam maxime soluta sed fuga,
            praesentium, beatae explicabo a doloribus quidem modi sequi doloremque hic, maiores nobis tempore rem quae!
          </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-3 mb-2"><BandMember cardcolor={this.state[0].cardColor} name={this.state[0].name} role={this.state[0].role} info={this.state[0].info} image={this.state[0].image} /></Col>
          <Col className="col-lg-3 mb-2"><BandMember cardcolor={this.state[1].cardColor} name={this.state[1].name} role={this.state[1].role} info={this.state[1].info} image={this.state[1].image} /></Col>
          <Col className="col-lg-3 mb-2"><BandMember cardcolor={this.state[2].cardColor} name={this.state[2].name} role={this.state[2].role} info={this.state[2].info} image={this.state[2].image} /></Col>
          <Col className="col-lg-3 mb-2"><BandMember cardcolor={this.state[3].cardColor} name={this.state[3].name} role={this.state[3].role} info={this.state[3].info} image={this.state[3].image} /></Col>
        </Row>
      </div>
    );
  };
};

export default TheBand;