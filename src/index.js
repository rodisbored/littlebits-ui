import React from 'react';
import ReactDOM from 'react-dom';
import InventionList from './InventionList';
import Form from './Form';
import './index.css';

import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

import 'react-skeleton-css/styles/skeleton.2.0.4.css';

ReactDOM.render(
  <div>
    <Grid>
      <Row>
        <InventionList />
      </Row>
      <Row>
        <Form />
      </Row>
    </Grid>

  </div>,

  document.getElementById('root')
);
