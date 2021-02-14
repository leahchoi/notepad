import React from "react";
import { useHistory } from "react-router-dom";
import "./NotepadListItem.css";

const NotepadItem = ({ file }) => {
  const history = useHistory();

  const handleClick = (id) => {
    console.log("", id);
    history.push(`/notepad/${id}`);
  };
  return (
    <div
      id={file.id}
      className="list-item"
      onClick={(props) => {
        console.log("props", props);
        handleClick(props.target.id);
      }}
    >
      {file.description}
    </div>
  );
};

export default NotepadItem;
