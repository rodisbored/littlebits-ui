import React, { Component } from 'react';
import Request from 'superagent';

import Col from 'react-bootstrap/lib/Col';

import 'react-select/dist/react-select.css';

import InventionButtons from './InventionButtons';

import Heading from './invention-form/Heading';
import Title from './invention-form/Title';
import Description from './invention-form/Description';
import Username from './invention-form/Username';
import Email from './invention-form/Email';
import Bits from './invention-form/Bits';
import Materials from './invention-form/Materials';

class InventionCreate extends Component {
  render() {
    return (
      <form>
        <Heading />
        <Title />
        <Description />
        <Username />
        <Email />
        <Bits />
        <Materials />
        <Col xs={12} md={8}>
          <InventionButtons
            submitId="create"
            submitText="Create"
            cancelLink="/inventions" />
        </Col>

      </form>
    );
  };
}

export default InventionCreate;
