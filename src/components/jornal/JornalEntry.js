import React from "react";
import moment from "moment";

import { activeNote } from "../../actions/notes";
import { useDispatch } from "react-redux";

export const JornalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);
  //   // console.log(id);
  const handleEntryClic = () => {
    dispatch(activeNote(id, { date, body, title, url }));
    // console.log(e.target);
  };

  return (
    <div className="jornal__entry pointer" onClick={handleEntryClic}>
      {url && (
        <div
          className="jornal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="jornal__entry-body">
        <p className="jornal__entry-title">{title}</p>

        <p className="jornal__entry-content">{body}</p>
      </div>
      <div className="jornal__entry-date">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};
