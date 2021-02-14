import React, { useState } from "react";
import "./Note.css";

const Note = ({ data }) => {
  const [fieldData, setFieldData] = useState({
    name: "",
    content: "",
  });
  console.log("note", data);
  const handleChange = (value, field) => {
    console.log("on change:", value, field);
  };
  return (
    <div>
      {data.filename}
      <div className="input-container">
        <input
          name="name"
          defaultValue={data.filename}
          onChange={(e) => {
            handleChange(e.target.value, "name");
          }}
        />
        <input
          name="content"
          defaultValue={data.content}
          onChange={(e) => {
            handleChange(e.target.value, "content");
          }}
        />
      </div>
    </div>
  );
};

export default Note;
