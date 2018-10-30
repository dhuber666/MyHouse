const INITIAL_STATE = {
  1: {
    title: "Living Room",
    posts: {
      0: {
        markdownText: "**Fett** was los. _kursiv_",
        createdAt: Date.now(),
        files: null
      }
    }

  },
  // 2: {
  //   title: "bath",
  //   markdownText: "**Das** ist das #Bad",
  //   createdAt: Date.now(),
  //   files: null
  // }
};

const RoomsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default RoomsReducer;
