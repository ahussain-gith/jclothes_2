import { userActions } from "./user.reducer";

export const setCurrentUser = user => ({
  type: userActions.SET_CURRENT_USER,
  payload: user
});
