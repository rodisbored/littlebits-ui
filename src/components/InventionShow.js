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

import FormatOptions from './FormatOptions';
import Materials from './invention-form/Materials';

class InventionShow extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    var url = `http://localhost:3000/inventions/${this.props.match.params.id}`;
    Request.get(url).then((response) => {
      this.setState({
        invention: response.body
      })
    });
  }
  render() {
    const disabled = true;
    const invention = this.state.invention;

    return (
      <form>
        <Heading title={invention && invention.title} />
        <Title disabled={disabled} value={invention && invention.title} />
        <Description disabled={disabled} value={invention && invention.description} />
        <Username disabled={disabled} value={invention && invention.username} />
        <Email disabled={disabled} value={invention && invention.email} />
        <Bits disabled={disabled} values={invention && FormatOptions(invention.bits)} />
        <Materials disabled={disabled} values={invention && FormatOptions(invention.materials)} />
        <Col xs={12} md={8}>
          <InventionButtons
            submitId="edit"
            submitText="Edit"
            submitLink={`${this.props.location.pathname}/edit`}
            cancelLink="/inventions"
          />
        </Col>
      </form>
    );
  };
}

export default InventionShow;
