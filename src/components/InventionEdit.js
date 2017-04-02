import React, { Component } from 'react';
import Request from 'superagent';

import Col from 'react-bootstrap/lib/Col';

import 'react-select/dist/react-select.css';

import InventionButtons from './InventionButtons'

import Heading from './invention-form/Heading';
import Title from './invention-form/Title';
import Description from './invention-form/Description';
import Username from './invention-form/Username';
import Email from './invention-form/Email';
import Bits from './invention-form/Bits';
import Materials from './invention-form/Materials';

class InventionEdit extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
    var url = "http://localhost:3000/inventions/" + this.props.match.params.id;
    Request.get(url).then((response) => {
      this.setState({
        invention: response.body
      })
    });
  }

  render() {
    const invention = this.state.invention;

    return (
      <form>
        <Heading title={invention && invention.title} />
        <Title defaultValue={invention && invention.title} />
        <Description defaultValue={invention} />
        <Username defaultValue={invention} />
        <Email defaultValue={invention} />
        <Bits />
        <Materials />
        <Col xs={12} md={8}>
          <InventionButtons
            submitId="submit"
            submitText="Submit"
            cancelLink={"/inventions/" + this.props.match.params.id}
          />
        </Col>
      </form>
    );
  };
}

export default InventionEdit;
