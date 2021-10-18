import React, { useEffect, useRef } from "react";
import { NotesAppBar } from "./NotesAppBar";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";

export const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [values, handleValues, reset] = useForm(note);
  const { title, body, id } = values;

  const activeId = useRef(note.id);
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(values.id, { ...values }));
  }, [values, dispatch]);

  const handleDelete = () => {
    // console.log(id);
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          name="title"
          onChange={handleValues}
        />
        <textarea
          placeholder="what happen today"
          className="notes__textarea"
          value={body}
          name="body"
          onChange={handleValues}
        ></textarea>
        {note.url && (
          <div className="notes__img">
            <img src={`${note.url}`} alt="images" />
          </div>
        )}
      </div>
      <div className="btn btn-danger" onClick={handleDelete}>
        Delete
      </div>
    </div>
  );
};
