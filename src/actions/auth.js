import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";

import { notesLogout } from "../actions/notes";
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";

import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // console.log(user.displayName);
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => {
        console.log(e);
        dispatch(finishLoading());
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      console.log(user.displayName, user.uid);

      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const starRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    dispatch(startLoading());

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });
        console.log(user);
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => {
        dispatch(finishLoading());
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout());
    dispatch(notesLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
