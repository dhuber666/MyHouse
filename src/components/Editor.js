import React from "react";
import { connect } from "react-redux";
import DraftJSEditor from "draft-js-plugins-editor";
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

class Editor extends React.Component {
  render() {
    return (
      <div onClick={this.focus}>
        <DraftJSEditor
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

const mapStateToProps = ({ editor: { editorState } }) => {
  return {
    editorState
  };
};

export default connect(
  mapStateToProps,
  {
    updateEditorState,
    fetchEditorState,
    subscribeAutosave,
    unsubscribeAutosave
  }
)(Editor);
