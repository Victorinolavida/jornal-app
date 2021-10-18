import { collection, getDocs, query } from "@firebase/firestore";

import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const notesSnap = await getDocs(query(collection(db, `${uid}/jornal/notes`)));
  const notes = [];

  // console.log(notesSnap);
  notesSnap.forEach((snapHijo) => {
    // console.log(snapHijo.data());
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });
  // console.log(notes);
  return notes;
};
