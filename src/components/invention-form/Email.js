import React from 'react';
import FieldGroup from './../FieldGroup';

const Email = ({disabled, defaultValue, value}) => {
  return (
    <FieldGroup
      id="email"
      type="email"
      label="Email Address (optional)"
      disabled={disabled}
      defaultValue={defaultValue}
    />
  )
}

export default Email;
