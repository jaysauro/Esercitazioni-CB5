import './footer.css';

export const Footer = () => {

    const items = [
        {label: 'E-mail', href: 'mailto:jenniferdisclafani@gmail.com', id: 1},
        {label: 'GialloZafferano.it', href: 'https://www.giallozafferano.it/', id: 2},
        {label: '📞 3275469841', href: '', id: 3}
    ];

    return <footer className="Footer">
            <ul className='navbar_list'>
                {
                    items.map(function (item) {
                        return (
                            <li key={item.id} id="footer">
                                <a className='navbar_item' href={item.href}>{item.label}</a>
                            </li>
                        )
                    })
                }
            </ul>
    </footer>
}