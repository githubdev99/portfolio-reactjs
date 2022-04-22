import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa';

const HeaderSocials = (props) => {
    return (
        <div className='header__socials'>
            <a href={props.profileData.linkedin} target="_blank" rel='noreferrer'><BsLinkedin /></a>
            <a href={props.profileData.github} target="_blank" rel='noreferrer'><BsGithub /></a>
            <a href={props.profileData.instagram} target="_blank" rel='noreferrer'><BsInstagram /></a>
            <a href={props.profileData.facebook} target="_blank" rel='noreferrer'><FaFacebookF /></a>
        </div>
    )
}

export default HeaderSocials