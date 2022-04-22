import React from 'react'
import './work.css'

const Work = (props) => {
    return (
        <section id='work'>
            <h5>Pernah Bekerja Di</h5>
            <h2>Riwayat Pekerjaan</h2>

            <div className="container portfolio__container">
                {props.workData.cards.map((item, index) => {
                    return (
                        <article key={index} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={item.image} alt={`img${index}`} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <br />
                            <div className="portfolio__item-cta">
                                {(item.urlGithub) ? <a href={item.urlGithub} className='btn' target='_blank' rel='noreferrer'>Github</a> : ``}
                                {(item.urlDemo) ? <a href={item.urlDemo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a> : ``}
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Work