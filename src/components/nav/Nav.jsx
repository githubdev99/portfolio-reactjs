/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { MdOutlineWork } from 'react-icons/md'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" className={(activeNav === '#') ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={(activeNav === '#about') ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#work" onClick={() => setActiveNav('#work')} className={(activeNav === '#work') ? 'active' : ''}><MdOutlineWork /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={(activeNav === '#experience') ? 'active' : ''}><BiBook /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={(activeNav === '#services') ? 'active' : ''}><RiServiceLine /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={(activeNav === '#portfolio') ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={(activeNav === '#contact') ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav