import { useState } from 'react';
import PostsList from './components/postsList/PostsList';
import CommandBar from './components/commandBar/CommandBar';
import FriendsList from './components/friendList';
import FilterBar from './components/filterBar/filterBar';
import './App.css';


function App() {
    const [filterState, setFilterState] = useState("");
    const [isModalEnabled, setModalEnabled] = useState(false);
    const [modalContent, setModalContent] = useState("NewMessage");

    return (
        <div className='App'>
            <div className='header'>
                <img className='logo' src='./logo.png' alt='logo'></img>
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
    )
}

export default App;
