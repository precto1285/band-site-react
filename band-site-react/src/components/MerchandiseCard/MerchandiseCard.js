import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
const MerchandiseCard = (props) => {
  return (
    <Card className="mb-4">
      <img src={props.image} alt="" width="100%" />
      <CardBody className="text-center">
        <h5>{props.item}</h5>
        <Button id={props.merchId} className="btn-danger btn-block">Buy Now</Button>
      </CardBody>
    </Card>
  );
};

export default MerchandiseCard;