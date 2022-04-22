import React from 'react'
import './portfolio.css'

const Portfolio = (props) => {
    return (
        <section id='portfolio'>
            <h5>Riwayat Proyek</h5>
            <h2>Portofolio</h2>

            <div className="container portfolio__container">
                {props.portfolioData.cards.map((item, index) => {
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

export default Portfolio