import React, { Component } from 'react';
import { Jumbotron, Table } from 'reactstrap';
import ShowsTable from './ShowsTable/ShowsTable';

class Shows extends Component {
  state = [
    {
      vid: "sewa-1115",
      date: "November 15",
      city: "Seattle, WA",
      venue: "James Dean Theatre"
    },
    {
      vid: "chil-1205",
      date: "December 5",
      city: "Chicago, IL",
      venue: "The Roxy Auditorium"
    },
    {
      vid: "satx-0112",
      date: "January 12",
      city: "San Antonio, TX",
      venue: "The Alamo Ampitheatre"
    },
    {
      vid: "sfca-0210",
      date: "February 10",
      city: "San Francisco, CA",
      venue: "Statefield Park Center"
    },
    {
      vid: "cloh-0303",
      date: "March 3",
      city: "Cleveland, OH",
      venue: "The Roland Grand Ball"
    },
  ]
  render() {
    return (
      <div className="mb-4">
        <Jumbotron className="bg-dark text-center text-white py-5 my-4">
          <h1>Upcoming Shows</h1>
        </Jumbotron>
        <Table className="table-black text-white text-center">
          <thead>
            <tr>
              <th scope="col"><h5>Date</h5></th>
              <th scope="col"><h5>City</h5></th>
              <th scope="col"><h5>Venue</h5></th>
              <th scope="col"><h5>Buy Tickets</h5></th>
            </tr>
          </thead>
          <tbody>
            <ShowsTable vid={this.state[0].vid} date={this.state[0].date} city={this.state[0].city} venue={this.state[0].venue} />
            <ShowsTable vid={this.state[1].vid} date={this.state[1].date} city={this.state[1].city} venue={this.state[1].venue} />
            <ShowsTable vid={this.state[2].vid} date={this.state[2].date} city={this.state[2].city} venue={this.state[2].venue} />
            <ShowsTable vid={this.state[3].vid} date={this.state[3].date} city={this.state[3].city} venue={this.state[3].venue} />
            <ShowsTable vid={this.state[4].vid} date={this.state[4].date} city={this.state[4].city} venue={this.state[4].venue} />
          </tbody>
        </Table>
      </div>
    );
  };
};

export default Shows;