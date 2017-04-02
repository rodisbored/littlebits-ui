import React from 'react';
import FieldGroup from './../FieldGroup';

const Username = ({disabled, defaultValue, value}) => {
  return (
    <FieldGroup
      id="username"
      type="text"
      label="User Name (optional)"
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
    />
  )
}

export default Username;
