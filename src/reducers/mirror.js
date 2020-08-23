const initialState = {
  serviceLoading: false,
  serviceResponse: null,
};

function mirrorReducer(state = initialState, action) {
  switch (action.type) {
    case "LAUNCH_MIRROR_SERVICE":
      return {
        ...state,
        serviceLoading: true,
      };

    case "GET_MIRROR_RESPONSE":
      return {
        ...state,
        serviceLoading: false,
        serviceResponse: action.payload,
      };

    case "CLEAN_OUTPUT":
      return {
        ...state,
        serviceLoading: false,
        serviceResponse: null,
      };

    default:
      return state;
  }
}

export default mirrorReducer;


