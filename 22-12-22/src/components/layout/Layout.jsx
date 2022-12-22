import { Header } from '../header/Header';
import { Button } from '../button/Button';
import { Footer } from '../footer/Footer';
import './layout.css';


export const Layout = () => {
    return <div className='layout'>
        <Header></Header>
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
        <Footer></Footer>
    </div>
           
}