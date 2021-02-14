import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotepadList from "./NotepadList.jsx";
import Notepad from "./Notepad.jsx";
import "./App.css";

const App = () => {
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
      Authorization: `token 83797ca72179c271a0eab82f9278acf085a648a8`,
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
      <BrowserRouter>
        <Switch>
          <Route path={`/`} exact component={NotepadList} />
          <Route path={`/notepad/:id`} exact component={Notepad} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
