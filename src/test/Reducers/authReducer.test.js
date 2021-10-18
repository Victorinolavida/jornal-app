import authReducer from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("debe de realizar el login", () => {
    const initialState = {};
    const action = {
      type: types.login,
      payload: { uid: "abc", displayName: "victor" },
    };
    const state = authReducer(initialState, action);
    // console.log(state);
    expect(state).toEqual({ uid: "abc", name: "victor" });
  });
  test("debe de realizar el logout", () => {
    const initialState = { uid: "asdasdaf", name: "victor" };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initialState, action);
    // console.log(state);
    expect(state).toEqual({});
  });
  test("No debe de realizar cambios en el stare", () => {
    const initialState = { uid: "asdasdaf", name: "victor" };
    const action = {
      type: "asdasd",
    };
    const state = authReducer(initialState, action);
    // console.log(state);
    expect(state).toEqual(initialState);
  });
});
