import React from 'react';
import { Table, Button } from 'reactstrap'

const ShowsTable = (props) => {
  return (

    <tr>
      <td>{props.date}</td>
      <td>{props.city}</td>
      <td>{props.venue}</td>
      <td><Button id={props.vid} className="btn-danger">Buy Now</Button></td>
    </tr>
  );
};

export default ShowsTable;