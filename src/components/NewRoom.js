import React from 'react';
import { Field, reduxForm } from "redux-form";
import FieldInput from "./FieldInput";
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addNewRoom } from "../actions";


class NewRoom extends React.Component {

    handleSubmit = ({ title }) => {
        this.props.addNewRoom(title)
        this.props.history.push("/")
    }

    render() {

        return (
            <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <Field
                    name="title"
                    label="Title"
                    component={FieldInput}
                    placeholder="Your cool Title"
                    type="text"
                />
                <Field
                    name="add"
                    label="add"
                    component={"button"}
                    type="submit"
                >
                    Add new Room
            </Field>
            </Form>
        )
    }
}


const connectedSignup = connect(
    null,
    { addNewRoom }
)(NewRoom);

export default reduxForm({
    form: "newroom"
})(connectedSignup);