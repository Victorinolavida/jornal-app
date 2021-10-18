import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {startLogout} from "../../actions/auth";
import {startNewNote} from "../../actions/notes";
import {JornalEntries} from "./JornalEntries";

export default function SideBar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // console.log("click");
    dispatch(startLogout());
  };

  const {name} = useSelector((state) => state?.auth);

  const handleAddNew = () => { dispatch(startNewNote()); };

  return (
    <aside className="jornal__sidebar">
      <div className="jornal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> {name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          logout
        </button>
      </div>

      <div className="jornal__new-entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">new entry</p>
      </div>
      <JornalEntries />
    </aside>
  );
}
