import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useRouteMatch } from "react-router-dom";
import Note from "./Note.jsx";
// import { isNil } from "ramda";

const Notepad = () => {
  const [notepadData, setNotepadData] = useState({});
  const history = useHistory();
  const R = require("ramda");
  const {
    params: { id },
  } = useRouteMatch();
  console.log(history, useHistory(), useRouteMatch(), id);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/gists/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token 83797ca72179c271a0eab82f9278acf085a648a8`,
          },
          path: {
            gist_id: id,
          },
        });
        console.log(typeof data);
        setNotepadData(data);
      } catch (e) {
        console.log("error:", e);
      }
    };
    getData();
  }, []);
  console.log(notepadData.files, notepadData, !R.isEmpty(notepadData));
  const displayNotes = () =>
    Object.keys(notepadData[`files`]).map((key, index) => {
      console.log("keys map", key, notepadData.files[key]);
      return <Note data={notepadData.files[key]} index={index} />;
    });

  return (
    <div>
      {!R.isEmpty(notepadData)
        ? displayNotes()
        : "Please wait for your data to load"}
    </div>
  );
};

export default Notepad;
