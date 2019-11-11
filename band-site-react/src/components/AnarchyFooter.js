import React from 'react';
import { Row, Col, } from 'reactstrap';
// Images
import FacebookIcon from '../images/iconfinder_square-facebook_317727.png';
import TwitterIcon from '../images/iconfinder_twitter_circle_294709.png';
import InstagramIcon from '../images/iconfinder_Instagram_1298747.png';
import YoutubeIcon from '../images/iconfinder_youtube_1220360.png';
import Anarchy from '../images/Anarchy.png';

const AnarchyFooter = (props) => {
  return (
    <div className="footer text-center text-white py-3">
      <Row className="my-3">
        <Col>
          <h3>Follow us on:</h3>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="mb-3">
          <a href="https://www.facebook.com" target="_blank"><img
            src={FacebookIcon} alt="facebook" width="50%" /></a>
        </Col>
        <Col className="mb-3">
          <a href="https://www.Twitter.com" target="_blank"><img
            src={TwitterIcon} alt="twitter" width="50%" /></a>
        </Col>
        <Col className="mb-3">
          <a href="https://www.Instagram.com" target="_blank"><img
            src={InstagramIcon} alt="facebook" width="50%" /></a>
        </Col>
        <Col className="mb-3">
          <a href="https://www.Instagram.com" target="_blank"><img
            src={YoutubeIcon} alt="facebook" width="50%" /></a>
        </Col>
      </Row>
      <img src={Anarchy} alt="endPhoto" width="70%" />
      <div class="text-center text-white">
        <h6>Copyright &copy; 2020 Anarchy Turtle</h6>
        <p>contact us: <a href="#">anarchyturtle@gmail.com</a></p>
      </div>
    </div>
  );
};

export default AnarchyFooter;