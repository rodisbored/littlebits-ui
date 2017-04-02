import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';

const Heading = ({title}) => {
  if (title !== undefined) {
    return <PageHeader>{title}</PageHeader>;
  }
  else {
    return <PageHeader>New Invention</PageHeader>;
  }
}

export default Heading;
