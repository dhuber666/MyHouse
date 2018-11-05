import React from "react";
// import {
//   FormGroup,
//   ControlLabel,
//   FormControl,
//   HelpBlock
// } from "react-bootstrap";
import TextField from '@material-ui/core/TextField'

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
    // <FormGroup controlId={name}>
    //   <ControlLabel>{label}</ControlLabel>
    //   <FormControl
    //     type={type}
    //     placeholder={placeholder}
    //     value={input.value}
    //     onChange={input.onChange}
    //     {...input}
    //   />
    //   {touched && error && <HelpBlock>{error}</HelpBlock>}
    // </FormGroup>
    <TextField
      id="standard-full-width"
      type={type}
      value={input.value}
      onChange={input.onChange}
      {...input}
      label={label}
      style={{ margin: 8 }}
      placeholder={placeholder}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default FieldInput;
