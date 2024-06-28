import { useReducer } from "react";

const INITIAL_STATE = {
  theme: "light",
  title: "test",
};

function reducer(state, action) {
  switch (action.type) {
    case "update_theme":
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
}

export { INITIAL_STATE, reducer };
