import { EditorState, convertToRaw } from 'draft-js';

const INITIAL_STATE = {
    editorState: EditorState.createEmpty(),
    jsonState: ''

};

const RoomsReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case "UPDATE_EDITOR_STATE":
            return { ...state, editorState: payload, jsonState: convertToRaw(payload.getCurrentContent()) }
        case "FETCH_EDITOR_STATE":
            return { editorState: EditorState.createWithContent(payload) }
        default:
            return state;
    }
};

export default RoomsReducer;
