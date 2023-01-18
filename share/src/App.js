import { useState } from 'react';
import PostsList from './components/postsList/PostsList';
import CommandBar from './components/commandBar/CommandBar';
import FriendsList from './components/friendList';
import FilterBar from './components/filterBar/filterBar';
import './App.css';


function App() {
    const [filterState, setFilterState] = useState("");

    return (
        <div className='App'>
            <div className='header'>
                <img className='logo' src='./logo.png' alt='logo'></img>
                <FilterBar setFilterState={setFilterState}/>
            </div>
            <FriendsList/>
            <PostsList nPost={"full"} filterSearch={filterState}/>
            <CommandBar/>
        </div>
    )
}

export default App;
