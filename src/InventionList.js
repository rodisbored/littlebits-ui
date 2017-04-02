import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import './InventionList.css';

import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Col from 'react-bootstrap/lib/Col';

import InventionRow from './components/InventionRow'

class InventionList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var url = "http://localhost:3000/inventions/";
    Request.get(url).then((response) => {
      this.setState({
        inventions: response.body
      })
    });
  }

  render() {
    var inventions = _.map(this.state.inventions, (invention) => {
      return <InventionRow key={invention.id} invention={invention} />
    });
    return (
      <div>
        <PageHeader>Invention List</PageHeader>
        <Col xs={12} md={8}>
          <Table responsive>
            <thead>
            { this.state.inventions !== [] &&
              <tr key="heading">
                <th>Title</th>
                <th>Description</th>
                <th>Username</th>
              </tr>
            }
            </thead>
            <tbody>
            { inventions }
            </tbody>
          </Table>
          <div>
            <Button bsStyle="primary" href="/inventions/new">Create New Invention</Button>
          </div>
        </Col>
      </div>
    );
  }
}

export default InventionList;
