import React from 'react';
import { withRouter } from 'react-router-dom';

class InventionRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/inventions/${this.props.invention.id}`);
  }

  render() {
    return (
      <tr onClick={this.handleClick}>
        <td>{this.props.invention.title}</td>
        <td>{this.props.invention.description}</td>
        <td>{this.props.invention.username}</td>
      </tr>
    );
  }
}

export default withRouter(InventionRow);
