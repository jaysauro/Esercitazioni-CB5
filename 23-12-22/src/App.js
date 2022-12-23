import './App.css';
import { Layout } from './components/layout/Layout';
import { Container } from './components/container/Container';
import { TodoList } from './components/todoList/TodoList';

function App() {
  return (
      <Layout>
        <Container>
          <TodoList/>
        </Container>
      </Layout>
    
  );
}

export default App;

