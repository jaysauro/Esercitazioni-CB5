export function ToDoItem(props){
    const {children, isDone, changeStatus, index} = props;
  
    const clickHandler = () => {
        changeStatus(index, isDone)
    }
  
    return <li>
      { isDone ? '😎' : '' } 
      <span>{children}</span>
      <button onClick={clickHandler}>{ isDone ? '🗵': '🗹'}</button>
    </li>
  }