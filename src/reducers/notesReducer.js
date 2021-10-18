/*

notes:[]
active:null
active{
  id:'sadgkjhgfds',
  tilte:'',
  body:'',
  imagURL:'',
  data:1235678765432
}
*/

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case types.noteDelete:
      console.log(state.notes.filter((note) => note.id !== action.payload));
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case types.noteLogoutCleaning:
      return { ...state, active: null, notes: [] };
    default:
      return state;
  }
};
