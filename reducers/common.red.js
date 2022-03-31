import * as types from "@/actions/types";

const initialState = {
  isLoading: false,
  isModalOpen: false,
  modalType: null,
};

const loaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_LOADER:
      return { ...state, isLoading: true };

    case types.STOP_LOADER:
      return { ...state, isLoading: false };

    case types.SHOW_MODAL:
      return { ...state, isModalOpen: true, modalType: payload };

    case types.HIDE_MODAL:
      return { ...state, isModalOpen: false, modalType: null };

    default:
      return state;
  }
};

export default loaderReducer;
