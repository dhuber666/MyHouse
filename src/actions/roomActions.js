import firebase from "../config/Firebase";

export const addNewRoom = title => {
  return (dispatch, getState) => {
    const room = {
      title
    };

    firebase
      .database()
      .ref(`users/${getState().auth.user.uid}/rooms`)
      .push(room);

    dispatch({
      type: "ADD_NEW_ROOM",
      payload: title
    });
  };
};

export const fetchRooms = () => {
  return (dispatch, getState) => {
    firebase
      .database()
      .ref(`users/${getState().auth.user.uid}/rooms`)
      .on("value", snapshot => {
        const rooms = snapshot.val();
        console.log(rooms);
        dispatch({
          type: "FETCH_ROOMS",
          payload: rooms
        });
      });
  };
};
