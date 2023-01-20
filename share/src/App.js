import { useState, useEffect } from 'react';
import PostsList from './components/postsList/PostsList';
import CommandBar from './components/commandBar/CommandBar';
import FriendsList from './components/friendList';
import FilterBar from './components/filterBar/filterBar';
import LogIn from './components/login/Login';
import './App.css';


function App() {
    const [filterState, setFilterState] = useState("");
    const [isModalEnabled, setModalEnabled] = useState(false);
    const [modalContent, setModalContent] = useState("NewMessage");
    const [user, setUser] = useState();

    useEffect(() => {
        if (localStorage.getItem("username")) {
          setUser(JSON.parse(localStorage.getItem("username")).username);
        }
      }, []);

    return user ? (
        <div className='App'>
            <div className='header'>
                <FilterBar setFilterState={setFilterState}/>
            </div>
            <div className='centerSection'>
              <FriendsList setModalContent={setModalContent} setModalEnabled={setModalEnabled}/>
              <PostsList nPost={"full"} filterSearch={filterState}/>
            </div>
            <CommandBar 
              setModalContent={setModalContent} 
              setModalEnabled={setModalEnabled} 
              isModalEnabled={isModalEnabled}
              modalContent={modalContent}/>
        </div>
    ) : (
        <>
          <LogIn/>
        </>
    );
}

export default App;
