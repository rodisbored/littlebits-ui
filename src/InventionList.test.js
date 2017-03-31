import React from 'react';
import ReactDOM from 'react-dom';
import InventionList from './InventionList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InventionList />, div);
});
