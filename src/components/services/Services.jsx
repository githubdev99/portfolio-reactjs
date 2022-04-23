import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = (props) => {
    return (
        <section id='services'>
            <h5>Pernah Bekerjasama Dengan Beberapa Mitra</h5>
            <h2>Riwayat Kemitraan</h2>

            <div className="container services__container">
                {props.servicesData.cards.map((itemCards, indexCards) => {
                    return (
                        <article key={indexCards} className='service'>
                            <div className="service__head">
                                <img src={itemCards.logo} alt="partner-logo" className='partner__logo' />
                                <h3>{itemCards.title}</h3>
                            </div>

                            <ul className="service__list">
                                {itemCards.descriptions.map((itemDescriptions, indexDescriptions) => {
                                    return (
                                        <li key={indexDescriptions}>
                                            <BiCheck className='service__list-icon' />
                                            <p>{itemDescriptions}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services