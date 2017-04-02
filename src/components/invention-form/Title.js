import React from 'react';
import FieldGroup from './../FieldGroup';

const Title = ({disabled, defaultValue, value}) => {
  return (
    <FieldGroup
      id="title"
      type="text"
      label="Title"
      placeholder="Brief Title"
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
    />
  )
}

export default Title;
