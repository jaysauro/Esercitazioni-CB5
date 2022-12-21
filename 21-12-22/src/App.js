import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Text } from './components/Text';


function App() {
  return (
      <div>
        <div className="textBox">
          <Text as="h1"
                variant="title"
          >NON PREMERE IL PULSANTE ROSSO!</Text>
        </div>
        <Button aria-label="Non premere il bottone"
                variant="primary"
                className=""
                onClick={() => console.log('Sei un ribelle, mi piaci')}
        ></Button>
        <Button aria-label="Secondo bottone"
                variant="secondary"
                className=""
                onClick={() => console.log('Good boy 🐶')}
        ></Button>
        <Button aria-label="Terzo bottone"
                variant="tertiary"
                className=""
                onClick={() => console.log('Sapevi che il blu provoca dipendenza?')}
                ></Button>
      </div>
  )
}

export default App;