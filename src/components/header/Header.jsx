import React from 'react'
import './header.css'
import CTA from './CTA';
import ME from './../../assets/me-header.png'
import HeaderSocials from './HeaderSocials';

const Header = (props) => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hai, Saya</h5>
                <h1>{props.profileData.fullName}</h1>
                <h5 className="text-light">{props.profileData.profession}</h5>
                <CTA {...props} />
                <HeaderSocials {...props} />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header