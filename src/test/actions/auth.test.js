import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";

describe("Pruebas con las accions de auth", () => {
  test("login y logout deben crear las acciones respectivas", () => {
    const uid = "ABC123";
    const displayName = "victor";

    const loginAction = login(uid, displayName);
    const logoutActiton = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName,
      },
    });

    expect(logoutActiton).toEqual({ type: types.logout });
  });
});
