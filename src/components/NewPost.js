import React from 'react';
import { reduxForm } from "redux-form";
import { connect } from 'react-redux';

import { Editor } from 'draft-js';

import { updateEditorState } from "../actions";



class NewPost extends React.Component {

    handleSubmit = ({ title }) => {
        this.props.addNewRoom(title)
        this.props.history.push("/")
    }

    render() {

        // Style this bad boy and add editor features
        return (
            <div onClick={this.focus} className="editor">
                <Editor
                    onChange={this.props.updateEditorState}
                    editorState={this.props.editorState}

                />
            </div>
        )
    }
}


const mapStateToProps = ({ editor: { editorState } }) => {

    return { editorState }
}

const connectedSignup = connect(
    mapStateToProps, { updateEditorState }
)(NewPost);

export default reduxForm({
    form: "newpost"
})(connectedSignup);