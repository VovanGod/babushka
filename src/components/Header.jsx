import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className="header-container">
                <a className="logo">
                    <img src="img/logo.png" alt="logo" />
                </a>
                <nav>
                    <ul>
                        <li><a href="#">О проекте</a></li>
                        <li><a href="#">стать мастером</a></li>
                        <li><a href="#">контакты</a></li>
                    </ul>
                </nav>
                <a href='#' className="header-catalog">Каталог</a>
            </div>
        </header>
    );
};

export default Header;