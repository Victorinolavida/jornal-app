import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "@firebase/firestore";
import Swal from "sweetalert2";

import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helper/fileUpload";
import { loadNotes } from "../helper/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    // console.log(uid);

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await addDoc(collection(db, `${uid}`, "jornal/notes"), newNote);
    // console.log(doc.id, "doc");
    dispatch(activeNote(doc.id, newNote));
    dispatch(addNewNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notas) => ({
  type: types.notesLoad,
  payload: notas,
});

export const starSaveNotes = (nota) => {
  return async (dispacth, getState) => {
    try {
      const { uid } = getState().auth;

      if (!nota.url) {
        delete nota.url;
      }
      const noteToFirestore = { ...nota };

      // console.log(noteToFirestore, "juan");
      const noteRef = doc(db, `${uid}/jornal/notes/${nota.id}`);
      // console.log(noteRef, "noteref");
      // const noteRef1 = doc(db, "jornal", "notes");
      // console.log(uid);
      await updateDoc(noteRef, noteToFirestore);
      dispacth(refeshNotes(nota));

      Swal.fire("Save", nota.title, "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };
};

export const refeshNotes = (note) => {
  return {
    type: types.notesUpdate,
    payload: note,
  };
};

export const startUploading = (file) => {
  return async (dispacth, getState) => {
    const { active: activeNote } = getState().notes;
    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const fileURL = await fileUpload(file);
    console.log(fileURL);

    Swal.close();

    activeNote.url = fileURL;

    dispacth(starSaveNotes(activeNote));
  };
};

export const startDeleting = (id) => {
  return async (dispacth, getState) => {
    const uid = getState().auth.uid;
    console.log(`${uid}/jornal/notes/${id}`);
    const noteRef = doc(db, `${uid}/jornal/notes/${id}`);
    await deleteDoc(noteRef);

    dispacth(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: types.noteDelete,
  payload: id,
});

export const notesLogout = () => ({
  type: types.noteLogoutCleaning,
});
