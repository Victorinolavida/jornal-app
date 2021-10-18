import React from "react";
import { useSelector } from "react-redux";
import { NoteScreen } from "../notes/NoteScreen";
import { NothinsSelected } from "./NothinsSelected";
import SideBar from "./SideBar";

export default function JornalScreen() {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="jornal__main-container">
      <SideBar />

      <main>{active ? <NoteScreen /> : <NothinsSelected />}</main>
    </div>
  );
}
