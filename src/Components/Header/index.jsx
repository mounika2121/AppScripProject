import { useState } from 'react';
import './index.css';

const Header = () => {
    const [onClickHam, setClickHam] = useState(false);

    const onClickHamburger = () =>{
        setClickHam(prev => !prev);
    }

return(
    <div>
        <div className='header-container-lg'>
            <div>
                <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1712405834/Logo_z5iosl.png" 
                alt="logo"
                className='logo' />
            </div>
            <h2 className='logo-title'>LOGO</h2>
            <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1712405843/Icons_cxxzcx.png" 
            alt="header-icons"
            className='header-icons' />
        </div>
        <div className='header-container-md'>
            <div>
                <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1712406750/hamburger_wizvrs.png" 
                alt='hamburger'
                className='hamburger'
                onClick={onClickHamburger} />
                <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1712405834/Logo_z5iosl.png" 
                alt="logo"
                className='logo' />
            </div>
            <h2 className='logo-title'>LOGO</h2>
            <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1712407341/md_Icons_dntiz8.png" 
            alt="header-icons"
            className='header-icons' />
        </div>
        <div className='navigation-btn-container'>
            <button type='button' className='navigation-buttons'>SHOP</button>
            <button type='button' className='navigation-buttons'>SKILLS</button>
            <button type='button'className='navigation-buttons'>STORIES</button>
            <button type='button' className='navigation-buttons'>ABOUT</button>
            <button type='button' className='navigation-buttons'>CONTACT US</button>
        </div>
        {onClickHam && (
            <div class="navigation-container">
            <div class="navigation-btn-container-md">
                <div className='close-btn-container'>
                    <button type='button' onClick={onClickHamburger} className='close-button'>&#10060;</button>
                </div>
                <ul>
                    <li className='nav-li'><button type="button" class="navigation-buttons">SHOP</button></li>
                    <li className='nav-li'><button type="button" class="navigation-buttons">SKILLS</button></li>
                    <li className='nav-li'><button type="button" class="navigation-buttons">STORIES</button></li>
                    <li className='nav-li'><button type="button" class="navigation-buttons">ABOUT</button></li>
                    <li className='nav-li'><button type="button" class="navigation-buttons">CONTACT US</button></li>
                </ul>
            </div>
        </div>
        )}
    </div>
)
}

export default Header;
