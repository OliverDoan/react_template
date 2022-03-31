import workDateActionType from "./workDateActionType";

const initialState = {
  workDate: "",
  workData: null,
  refreshWorkId: Math.random(),
};

const workDateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case workDateActionType.SET_WORK_DATE:
      return { ...state, workDate: payload };

    case workDateActionType.SET_WORK_DATA:
      return { ...state, workData: payload };

    case workDateActionType.REFRESH_WORK_ID:
      return { ...state, refreshWorkId: payload };

    default:
      return state;
  }
};

export default workDateReducer;
