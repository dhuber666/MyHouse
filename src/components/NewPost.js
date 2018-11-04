import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { FormGroup, Form, DropdownButton, MenuItem } from "react-bootstrap";
import FieldInput from "./FieldInput";

import Editor from "draft-js-plugins-editor";
import createDndFileUploadPlugin from "@mikeljames/draft-js-drag-n-drop-upload-plugin";
import createImagePlugin from "draft-js-image-plugin";

import {
  updateEditorState,
  fetchEditorState,
  subscribeAutosave,
  unsubscribeAutosave
} from "../actions";

const mockUpload = () => {
  console.log(test);
};

const imagePlugin = createImagePlugin();

const dndFileUploadPlugin = createDndFileUploadPlugin({
  handleUpload: mockUpload,
  addImage: imagePlugin.addImage
});

const plugins = [dndFileUploadPlugin, imagePlugin];

class NewPost extends React.Component {
  handleSubmit = ({ title }) => {
    this.props.addNewRoom(title);
    this.props.history.push("/");
  };

  renderDropdownList = ({ input, data, valueField, textField }) =>
  <DropdownList {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange} />

    <DropdownButton
      bsStyle={title.toLowerCase()}
      title="Select a room"
      key={2}
      id={`dropdown-basic-${i}`}
    >
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
        Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>

}

  render() {
    // Style this bad boy and add editor features

    return (
      <div onClick={this.focus} className="editor">
        <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <Field
            name="email"
            label="Email"
            component={FieldInput}
            placeholder="User@gmail.com"
            type="email"
          />
        </Form>
        <Editor
          onChange={this.props.updateEditorState}
          editorState={this.props.editorState}
          plugins={plugins}
        />
        <button onClick={this.props.fetchEditorState}>Fetch State</button>
        <button onClick={this.props.subscribeAutosave}>
          Subscribe to Autosave
        </button>
        <button onClick={this.props.unsubscribeAutosave}>
          Unsubscribe to Autosave
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ editor: { editorState }, rooms }) => {
  return { editorState, rooms };
};

const connectedSignup = connect(
  mapStateToProps,
  {
    updateEditorState,
    fetchEditorState,
    subscribeAutosave,
    unsubscribeAutosave
  }
)(NewPost);

export default reduxForm({
  form: "newpost"
})(connectedSignup);
