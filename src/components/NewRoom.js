import React from 'react';
import { Field, reduxForm } from "redux-form";
import FieldInput from "./FieldInput";
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addNewRoom } from "../actions";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class NewRoom extends React.Component {

    handleSubmit = ({ title }) => {
        this.props.addNewRoom(title)
        this.props.history.push("/")
    }

    render() {

        return (
            <Grid container>
                <Grid item xs={12} lg={12}>
                    <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        <Field
                            name="title"
                            label="Title"
                            component={FieldInput}
                            placeholder="Your cool Title"
                            type="text"
                        />
                        <Button variant="contained" color="primary" type="submit" >Add new Room</Button>


                    </Form>
                </Grid>
            </Grid >
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