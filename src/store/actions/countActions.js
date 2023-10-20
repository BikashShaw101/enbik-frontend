import { countActions } from "../reducers/countReducers";

export const changeCount = (type) => (dispatch, getstate) => {
  const { count } = getstate();

  if (type === "INCREASE") {
    dispatch(countActions.countChange(count.number + 1));
  } else {
    dispatch(countActions.countChange(count.number - 1));
  }
};
