import PostsList from './components/postsList/PostsList';
import CommandBar from './components/commandBar/CommandBar';
import NewPost from './components/newPost';
import FriendsList from './components/friendList';
import './App.css';


function App() {
    return (
        <div className='App'>
            <div className='header'>
                <img className='logo' src='./logo.png' alt='logo'></img>
            </div>
            <FriendsList/>
            <CommandBar/>
            <PostsList/>
            <NewPost/>
        </div>
    )
}

export default App;
