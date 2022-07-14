import { createStore } from "redux";

const initialState = {
  loading: false,
  fullName: "fatur rahman",
  email: "faturrahman@sda.com",
  profession: "ngoding",
  adress: "luwu utara",
};

const reducer = (state = initialState, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: action.value,
    };
    if (action.type === "SET_FULLNAME") {
      return {
        ...state,
        loading: action.value,
      };
    }
  }

  return state;
};

const store = createStore(reducer);

export default store;
