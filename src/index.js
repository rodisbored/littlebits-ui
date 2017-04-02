import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';

import InventionList from './InventionList';
import InventionCreate from './components/InventionCreate';
import InventionShow from './components/InventionShow';
import InventionEdit from './components/InventionEdit';
import NotFound from './components/NotFound'

import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

import 'react-skeleton-css/styles/skeleton.2.0.4.css';

const Root = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/inventions" />}/>
            <Route exact path="/inventions" component={InventionList} />
            <Route exact path="/inventions/new" component={InventionCreate} />
            <Route path="/inventions/:id/edit" component={InventionEdit} />
            <Route path="/inventions/:id" component={InventionShow} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

render(
  <div>
    <Grid>
      <Row>
        <Root />
      </Row>
    </Grid>

  </div>,

  document.getElementById('root')
);
