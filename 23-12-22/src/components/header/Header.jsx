import './header.css';

export const Header = () => {

    const items = [
        {label: 'Home', href: '#header', id: 1},
        {label: 'Contacts', href: '#footer', id: 2},
    ];

    return <header className="Header">
        <nav className='navbar'>
            <ul className='navbar_list'>
                {
                    items.map(function (item) {
                        return (
                            <li key={item.id}>
                                <a className='navbar_item' href={item.href}>{item.label}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
}