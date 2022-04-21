import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/devan-firmansyah-ramadhan-aaba4a10a" target="_blank" rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/githubdev99" target="_blank" rel='noreferrer'><BsGithub /></a>
            <a href="https://www.instagram.com/devanfrmnsyh/" target="_blank" rel='noreferrer'><BsInstagram /></a>
        </div>
    )
}

export default HeaderSocials