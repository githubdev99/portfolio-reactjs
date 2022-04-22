import React from 'react'
import './about.css'
import ME from './../../assets/me-about-edited.png'
import { FaAward } from "react-icons/fa"
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = (props) => {
    return (
        <section id='about'>
            <h5>Mengenal Lebih Lanjut</h5>
            <h2>Tentang Saya</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Pengalaman Kerja</h5>
                            <small>{props.aboutData.historyExperience}</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Pernah Bermitra</h5>
                            <small>{props.aboutData.historyPartner}</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Proyek</h5>
                            <small>{props.aboutData.historyProject}</small>
                        </article>
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: props.aboutData.aboutMe }} />

                    <a href="#contact" className='btn btn-primary'>Kontak Saya</a>
                </div>
            </div>
        </section>
    )
}

export default About