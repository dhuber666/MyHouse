import { EditorState } from 'draft-js';

const INITIAL_STATE = {
    editorState: EditorState.createEmpty()

};

const RoomsReducer = (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case "UPDATE_EDITOR_STATE":
            return { ...state, editorState: payload }
        default:
            return state;
    }
};

export default RoomsReducer;
