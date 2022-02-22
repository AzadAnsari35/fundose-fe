import * as types from "@/actions/types";

const initialState = {
  isLoading: false,
};

const loaderReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.START_LOADER:
      return { isLoading: true };

    case types.STOP_LOADER:
      return { isLoading: false };

    default:
      return state;
  }
};

export default loaderReducer;
