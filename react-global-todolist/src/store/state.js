import { createContext } from "react";

const initialState = {
  todoList: [
    {
      id: "1",
      content: "6:00 => Autocommiserazione",
      status: true,
    },
    {
      id: "2",
      content: "16:30 => fissare il muro",
      status: true,
    },
    {
      id: "3",
      content: " 17:00 => risolvere la fame nel mondo e non dirlo a nessuno",
      status: true,
    },
    {
      id: "4",
      content: "17:30 => ginnastica",
      status: true,
    },
    {
      id: "5",
      content: "18:30 => a cena con me, questo non lo posso rimandare ancora",
      status: true,
    },
  ],
};

const ApplicationCtx = createContext(initialState);

export { ApplicationCtx, initialState };
