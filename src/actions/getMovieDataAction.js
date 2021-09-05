export const getFullDataAction = (payload) => {
  return {
    type: "FETCH_FULL_DATA",
    payload: payload,
  };
};

export const getFullDataSuccess = () => {
  return {
    type: "FETCH_SUCCESS",
  };
};

export const getFullDataFailure = () => {
  return {
    type: "FETCH_ERROR",
  };
};
