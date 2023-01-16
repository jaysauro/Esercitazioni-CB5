import PostsList from './components/postsList/PostsList';
import NewPost from './components/newPost/NewPost';
import './App.css';


function App() {
    return (
        <div className='App'>
            <div className='header'>
                <img className='logo' src='./logo.png' alt='logo'></img>
                <NewPost/>
            </div>
            <PostsList/>
        </div>
    )
}

export default App;
