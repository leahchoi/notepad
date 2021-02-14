import React, { useEffect, useState } from "react";
import axios from "axios";

import NotepadItem from "./NotepadListItem";
import "./Notepad.css";

const Notepad = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/gists`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token 83797ca72179c271a0eab82f9278acf085a648a8`,
          },
        });
        setData(data);
      } catch (e) {
        console.log("error:", e);
      }
    };
    getData();
  }, []);
  console.log("inside of notepad:", data);
  return (
    <div className="notepad-list-container">
      <h3>Notepad</h3>
      <div>
        {data.map((file, key) => {
          return <NotepadItem file={file} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Notepad;
