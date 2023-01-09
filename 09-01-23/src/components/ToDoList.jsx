import { useState } from "react";
import { Input } from "../atoms/inputs";
import { ToDoItem } from "./ToDoItem";

export function TodoList(){
    const [items, setItems] = useState([
        {label: 'Svegliati presto', isDone: false},
        {label: 'Prenditi cura di qualcuno o qualcosa', isDone: false},
        {label: 'Prenditi del tempo per te ogni giorno', isDone: false},
        {label: "Leggi piu' che puoi", isDone: false},
        {label: 'Metti in ordine la casa, metti in ordine la mente', isDone: false},
        {label: "Divertiti: leggerezza non e' superficilita'", isDone: false},
        {label: 'Smetti di rimandare, fallo', isDone: false},
        {label: 'Non prendere decisioni se sei triste o arrabbiato', isDone: false},
    ]);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const formEl = event.target;
        const formData = new FormData(formEl);
        const label = formData.get('taskName');

        setItems((oldItems) => {
            const newItem = { label, isDone: false }
            return [...oldItems, newItem];
        })
    }

    const changeStatus = (index, currentStatus) => {

        setItems(oldItems => {
            const newItems = oldItems.concat([]);
            newItems[index].isDone = !currentStatus;
            return newItems;
        })
    }
  
    return <div>
      <h1>Vivere una vita felice</h1>
      
        <form onSubmit={formSubmitHandler}>
            <Input label={'Aggiungi qualcosa di tuo:'} name='taskName' />
        </form>

      <ul>
        { items.map((item, index) => (
            <ToDoItem key={index}
                      index={index}
                      isDone={item.isDone}
                      changeStatus={changeStatus}
            >{item.label}</ToDoItem>
        )) }
      </ul>
    </div>
  }