import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { startSignUpUser } from "../actions";

import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import FieldInput from "./FieldInput";

class Signup extends React.Component {
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
        
          <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>



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
            <Field
              name="confirm"
              label="Confirm"
              component={FieldInput}
              placeholder="Confirm Password"
              type="password"
            />


            <Button
              color="primary"
              variant="contained"
              name="submit"
              label="Submit"
              component={"button"}
              type="submit"
            >
              Sign Up
            </Button>


          </form>
        
      );
    }
  };

  render() {
    return this.renderContent();
  }
}

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
