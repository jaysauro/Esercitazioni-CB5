import './App.css';
import { Bloods } from './fetch/components/blood_types/Bloods';
import { Beers } from './fetch/components/beers/Beers';
import { Cards } from './fetch/components/credit_cards/Cards';
import { Banks } from './fetch/components/banks/Banks';

function App() {
  return (
    <div className="App">
      <h1>--- USING HOOKS ---</h1>
      <div className='card'>
        <Beers/>
        <Banks/>
        <Bloods/>
        <Cards/>
      </div>  
    </div>
  );
}

export default App;
