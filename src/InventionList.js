import React, { Component } from 'react';
// import logo from './logo.svg';
import './InventionList.css';

import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Col from 'react-bootstrap/lib/Col';

class InventionList extends Component {
  render() {
    return (
      <div>
        <Col xs={12} md={8}>
          <PageHeader>Invention List</PageHeader>
          <Table responsive>
            <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Dave Gamache</td>
              <td>26</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Dwayne Johnson</td>
              <td>42</td>
              <td>Male</td>
            </tr>
            </tbody>
          </Table>

          <div class="six columns">
            <Button bsStyle="primary">Create New Invention</Button>
          </div>
        </Col>
      </div>
    );
  }
}

export default InventionList;
