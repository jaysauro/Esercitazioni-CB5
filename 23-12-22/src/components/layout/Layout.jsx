import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import '../todoList/todoList.css';


export const Layout = (props) => {
    const {
        children,
        onClick,
    } = props;

    console.log({props})

    return <div className='App' onClick={onClick}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
    </div>
           
}