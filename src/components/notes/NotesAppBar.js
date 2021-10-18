import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { starSaveNotes, startUploading } from "../../actions/notes";
import moment from "moment";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    // console.log(active, "NOtesbar");
    dispatch(starSaveNotes(active));
  };

  const handlePicture = () => {
    // console.log("picture");
    document.querySelector("#fileSelector").click();
  };

  const handleFileChance = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  const date = new Date();

  return (
    <div className="notes__appbar">
      <span>{moment(date).format("MMMM Do YYYY")}</span>
      <input
        name="file"
        id="fileSelector"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChance}
      />

      <div>
        <button className="btn" onClick={handlePicture}>
          Picture
        </button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
