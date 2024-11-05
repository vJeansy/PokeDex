export const Footer = () => {
    const socialLinks = [
        {
            red: 'linkedin',
            href: 'https://www.linkedin.com/in/jeansy-peña-b575721b0/',
            class: 'bi bi-linkedin me-3 text-black',
            id: 1
        },
        {
            red: 'github',
            href: 'https://github.com/vJeansy',
            class: 'bi bi-github me-3 text-black',
            id: 2
        },
        {
            red: 'instagram',
            href: 'https://www.instagram.com/vjeansy/',
            class: 'bi bi-instagram me-3 text-black',
            id: 3
        },
        {
            red: 'facebook',
            href: 'https://www.facebook.com/jeansypen10?locale=es_LA',
            class: 'bi bi-facebook me-3 text-black',
            id: 4
        },
        {
            red: 'mailto',
            href: 'mailto:jeansygregorio@gmail.com',
            class: 'bi bi-envelope text-black',
            id: 5
        }
    ];
    return(
        <footer>
            {socialLinks.map((link) => (
                // eslint-disable-next-line react/jsx-key
                <ul className="footer-container">
                    <li className="footer-item">
                        <a key={link.id} href={link.href} target="blank" rel="noopener noreferrer">
                            <i className={link.class}></i>
                        </a>
                    </li>
                </ul>
            ))}
        </footer>
    )
}