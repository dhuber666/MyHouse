import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

const FieldInput = ({
  input,
  meta: { error, touched },
  meta,
  type,
  placeholder,
  name,
  label,
  ...rest
}) => {
  console.log(meta);
  return (
    <FormGroup controlId={name}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        type={type}
        placeholder={placeholder}
        value={input.value}
        onChange={input.onChange}
        {...input}
      />
      {touched && error && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );
};

export default FieldInput;
