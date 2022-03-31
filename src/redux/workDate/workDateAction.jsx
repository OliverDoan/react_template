import workDateActionType from "./workDateActionType";

export const setWorkDate = (workDate) => ({
  type: workDateActionType.SET_WORK_DATE,
  payload: workDate,
});

export const setWorkDateData = (workDateData) => ({
  type: workDateActionType.SET_WORK_DATA,
  payload: workDateData,
});

export const refreshWorkId = (id) => ({
  type: workDateActionType.REFRESH_WORK_ID,
  payload: id,
});
