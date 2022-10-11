import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const initalState = fromJS({
  loading: false,
});

export const uiReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return state.setIn(["loading"], action.payload);

    default:
      return state;
  }
};
