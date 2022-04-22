import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = (props) => {
    return (
        <section id='experience'>
            <h5>Keahlian Apa Yang Saya Miliki</h5>
            <h2>Keahlian Saya</h2>

            <div className="container experience__container">
                {props.experienceData.cards.map((itemCards, indexCards) => {
                    return (
                        <div>
                            <h3>{itemCards.title}</h3>
                            <div className="experience__content">
                                {itemCards.skills.map((itemSkills, indexSkills) => {
                                    return (
                                        <article className='experience__details'>
                                            <BsFillPatchCheckFill className='experience__details-icon' />
                                            <div>
                                                <h4>{itemSkills.name}</h4>
                                                <small className='text-light'>{itemSkills.description}</small>
                                            </div>
                                        </article>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience