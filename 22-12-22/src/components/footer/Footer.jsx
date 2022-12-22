import './footer.css';

export const Footer = () => {

    const items = [
        {label: 'E-mail', href: 'mailto:jenniferdisclafani@gmail.com', id: 1},
        {label: 'Facebook', href: 'https://www.facebook.com/jennifer.disclafani.7/', id: 2},
        {label: '📞 3275469841', href: '', id: 3}
    ];

    return <footer className="Footer">
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
    </footer>
}