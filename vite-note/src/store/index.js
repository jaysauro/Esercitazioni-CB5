import { createContext } from "react";

const initialState = {

   noteList: [
    {
      id: 1,
      title: "Oggi è Mercoledì",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
    },
    {
      id: 2,
      title: "Domani è Giovedì",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
    },
  ],
  initialNoteList: [
    {
      id: 1,
      title: "Oggi è Mercoledì",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
    },
    {
      id: 2,
      title: "Domani è Giovedì",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
    },
  ],

  noteList: JSON.parse(localStorage.getItem("note-list")) || [],
  initialNoteList: JSON.parse(localStorage.getItem("initial-note-list")) || [],
  user: {
    username: localStorage.getItem("Note-app-username"),
  },
}

const ApplicationCtx = createContext(initialState);

export { initialState, ApplicationCtx };