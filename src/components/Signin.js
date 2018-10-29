import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { startSignInUser } from "../actions";

import { FormGroup, Form } from "react-bootstrap";

import FieldInput from "./FieldInput";

class Signin extends React.Component {
  handleSubmit = ({ email, password }) => {
    this.props.startSignInUser(email, password);
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
            component={FieldInput}
            placeholder="User@gmail.com"
            type="email"
          />
          <Field
            name="password"
            label="Password"
            component={FieldInput}
            placeholder="Password"
            type="password"
          />

          <FormGroup controlId="Submit">
            <Field
              name="submit"
              label="Submit"
              component={"button"}
              type="submit"
            >
              Sign In
            </Field>
          </FormGroup>
        </Form>
      );
    }
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    user: state.auth.user,
    loading: state.auth.loading
  };
};

const connectedSignup = connect(
  mapStateToProps,
  { startSignInUser }
)(Signin);

export default reduxForm({
  form: "signin"
})(connectedSignup);
