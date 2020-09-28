import React from 'react';
import HeaderLogo from '../../assets/salud360 1.png';
import '../header/header_style.css';


function Header() {
    return (
      <div>
        <div className="header">
          <div className='header_Logo_contenier'>
            <img src={HeaderLogo} alt="loading" />
          </div>
        </div>
      </div>
    );
}

export default Header;