import React from 'react';
import _ from 'lodash';

function FormatOptions(options) {
  return (
    _.map(options, (option) => {
      return (
        { label: option, value: option }
      )
    })
  )
}

export default FormatOptions;
