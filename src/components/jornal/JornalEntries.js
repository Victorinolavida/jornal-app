import React from "react";
import { JornalEntry } from "./JornalEntry";
import { useSelector } from "react-redux";

export const JornalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="jornal__entries">
      {notes.map((note) => (
        <JornalEntry key={note.id} {...note} />
      ))}
    </div>
  );
};
