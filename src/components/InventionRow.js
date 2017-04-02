import React from 'react';

class InventionRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.description}</td>
        <td>{this.props.username}</td>
      </tr>
    );
  }
}

export default InventionRow;
