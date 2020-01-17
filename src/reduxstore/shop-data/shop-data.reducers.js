import COLLECTIONS_DATA from "../../data/collections-data";

const INITIAL_STATE = {collections:COLLECTIONS_DATA};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
export default shopDataReducer;
