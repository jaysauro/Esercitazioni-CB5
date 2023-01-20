import "./index.css";


const HeaderLayout = ({children}) => {


    return (
        <div className='HeaderLayout'>
                <img className='logo' src='./logo.png' alt='logo'></img>
                {children}
        </div>
    )
}

export default HeaderLayout;