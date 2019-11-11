import React from 'react';
import { Card, CardBody } from 'reactstrap';

const BandMember = (props) => {
  return (
    <div className="text-white" >
      <Card className={props.cardcolor}>
        <center>
          <img className="rounded-circle" src={props.image} alt="memberImage" width="80%" />
        </center>
        <CardBody>
          <div className="text-center">
            <h3>{props.name}</h3>
            <h4>{props.role}</h4>
          </div>
        </CardBody>
      </Card>
    </div >
  );
};

export default BandMember;