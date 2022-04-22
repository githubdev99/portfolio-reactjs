/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const Footer = (props) => {
    return (
        <footer>
            <a href="#" className='footer__logo'>DEVSPACE</a>

            <ul className='permalinks'>
                <li><a href="#">Beranda</a></li>
                <li><a href="#about">Tentang</a></li>
                <li><a href="#work">Riwayat Pekerjaan</a></li>
                <li><a href="#experience">Keahlian</a></li>
                <li><a href="#services">Kemitraan</a></li>
                <li><a href="#portfolio">Portofolio</a></li>
                <li><a href="#contact">Kontak</a></li>
            </ul>

            <div className="footer__socials">
                <a href={props.profileData.linkedin} target="_blank" rel='noreferrer'><BsLinkedin /></a>
                <a href={props.profileData.github} target="_blank" rel='noreferrer'><BsGithub /></a>
                <a href={props.profileData.instagram} target="_blank" rel='noreferrer'><BsInstagram /></a>
                <a href={props.profileData.facebook} target="_blank" rel='noreferrer'><FaFacebookF /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Devspace. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer