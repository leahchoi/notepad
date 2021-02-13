import React, { useEffect } from "react";
import Notepad from "./Notepad.jsx";
import "./App.css";

const App = () => {
  useEffect(() => {
    try {
      fetch(`https://api.github.com/gists`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token 83797ca72179c271a0eab82f9278acf085a648a8`,
        },
      }).then((res) => {
        console.log(res);
      });
    } catch (e) {
      console.log("error:", e);
    }
  }, []);

  const json = JSON.stringify({
    "note 1": {
      content: "sample",
    },
  });

  const js = JSON.stringify({
    description: "description",
    public: true,
    files: {
      "note 1": {
        content: "sample",
      },
    },
  });

  console.log(js);

  const requestOption = {
    method: "POST",
    headers: {
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
      Authorization: `token 94afceec6c5d6615339fde51306014bdece9437f`,
    },
    body: js,
  };

  const createNotepad = () => {
    try {
      fetch(`https://api.github.com/gists`, requestOption).then((res) => {
        console.log(res);
      });
    } catch (e) {}
  };
  return (
    <div className="App">
      <h2
        className="App-header"
        onClick={() => {
          createNotepad();
        }}
      >
        Notepad Application
      </h2>
      hello: <Notepad />
    </div>
  );
};

export default App;
