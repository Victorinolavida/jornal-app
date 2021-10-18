/** * @jest-environment node */

import { deleteDoc, doc } from "@firebase/firestore";
import { getDoc } from "firebase/firestore";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";

import {
  starSaveNotes,
  startLoadingNotes,
  startNewNote,
  startUploading,
} from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helper/fileUpload";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  auth: {
    uid: "TESTING",
  },
};

let store = mockStore(initialState);

describe("Pruebas en acciones de notes", () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("debe crear una nueva nota con startNewNote", async () => {
    await store.dispatch(startNewNote());
    const actions = store.getActions();
    // console.log(actions);
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    const docID = actions[0].payload.id;
    // console.log(docID);
    const noteRef = doc(db, `TESTING/jornal/notes/${docID}`);
    await deleteDoc(noteRef);
  });
  test("startLoadingNotes debde cargar los datos", async () => {
    await store.dispatch(startLoadingNotes("TESTING"));
    const actions = store.getActions();
    // console.log(actions);
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expeted = {
      body: expect.any(String),
      title: expect.any(String),
      id: expect.any(String),
      date: expect.any(Number),
    };

    expect(actions[0].payload[0]).toMatchObject(expeted);
  });

  test("starSaveNote debde actualizar la nota", async () => {
    const note = {
      id: "Jlkm1G9ByRfBVerh698L",
      title: "titulo",
      body: "body",
    };

    await store.dispatch(starSaveNotes(note));

    const actions = store.getActions();
    // console.log(actions);
    expect(actions[0].type).toBe(types.notesUpdate);
    // expect(actions[0].payload).toMatchObject({
    //   ...{ note },
    //   date: expect.any(Number),
    // });

    const noteRef = await getDoc(doc(db, `TESTING/jornal/notes/${note.id}`));

    expect(noteRef.data().title).toBe(note.title);
  });
  // test("StartUploading debe actualizar el url del entry", async () => {
  //   global.File = class MockFile {
  //     constructor(parts, filename, properties) {
  //       this.filename = filename;
  //     }
  //   };
  //   // global.FormData = jest.fn();
  //   fileUpload.mockImplementationOnce(() =>
  //   "https://hola-mundo.com/cosa.jpg"); const file = new File([],
  //   "foto.png"); await store.dispatch(startUploading(file));

  //   const docRef = await db
  //     .doc(`/TESTING/journal/notes/7Ohq4putBCuYfVhFmmM3`)
  //     .get();
  //   expect(docRef.data().url).toBe("https://hola-mundo.com/cosa.jpg");
  // });
});
