import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { startSignUpUser } from "../actions";

import {
  FormControl,
  FormGroup,
  ControlLabel,
  Form,
  HelpBlock
} from "react-bootstrap";

class Signup extends React.Component {
  FieldInput = ({
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

  handleSubmit = ({ email, password, confirm }) => {
    this.props.startSignUpUser(email, password);
  };

  renderContent = () => {
    const { loading, error, user } = this.props;
    console.log(this.props);

    if (error) {
      return <h3>{error.message}</h3>;
    } else if (user) {
      return <Redirect to="/" />;
    } else if (loading) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <Field
            name="email"
            label="Email"
            component={this.FieldInput}
            placeholder="User@gmail.com"
            type="email"
          />
          <Field
            name="password"
            label="Password"
            component={this.FieldInput}
            placeholder="Password"
            type="password"
          />
          <Field
            name="confirm"
            label="Confirm"
            component={this.FieldInput}
            placeholder="Confirm Password"
            type="password"
          />

          <FormGroup controlId="Submit">
            <Field
              name="submit"
              label="Submit"
              component={"button"}
              type="submit"
            >
              Sign Up
            </Field>
          </FormGroup>
        </Form>
      );
    }
  };

  render() {
    //   TODO: Connect to redux store, maybe use Redux Form
    return this.renderContent();
  }
}

const styles = {
  container: {
    width: 600,
    margin: "200px auto"
  }
};

const validate = values => {
  const errors = {};

  if (values.password !== values.confirm) {
    errors.password = "Password doesn't match";
    errors.confirm = "Password doesn't match";
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    user: state.auth.user,
    loading: state.auth.loading
  };
};

const connectedSignup = connect(
  mapStateToProps,
  { startSignUpUser }
)(Signup);

export default reduxForm({
  form: "signup",
  validate
})(connectedSignup);
