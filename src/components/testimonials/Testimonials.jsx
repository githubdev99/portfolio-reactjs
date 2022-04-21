import React from 'react'
import './testimonials.css'
import AVTR1 from './../../assets/avatar1.jpg'
import AVTR2 from './../../assets/avatar2.jpg'
import AVTR3 from './../../assets/avatar3.jpg'
import AVTR4 from './../../assets/avatar4.jpg'

const data = [
    {
        image: AVTR1,
        name: 'name',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut vitae dolor quas impedit iste, quaerat libero neque error consequuntur qui earum eligendi non cum quae corporis explicabo ipsum pariatur saepe.'
    },
    {
        image: AVTR2,
        name: 'name',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut vitae dolor quas impedit iste, quaerat libero neque error consequuntur qui earum eligendi non cum quae corporis explicabo ipsum pariatur saepe.'
    },
    {
        image: AVTR3,
        name: 'name',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut vitae dolor quas impedit iste, quaerat libero neque error consequuntur qui earum eligendi non cum quae corporis explicabo ipsum pariatur saepe.'
    },
    {
        image: AVTR4,
        name: 'name',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut vitae dolor quas impedit iste, quaerat libero neque error consequuntur qui earum eligendi non cum quae corporis explicabo ipsum pariatur saepe.'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                {data.map((item, index) => {
                    return (
                        <article key={index} className='testimonial'>
                            <div className="client__avatar">
                                <img src={item.image} alt={`avatar${index}`} />
                            </div>
                            <h5 className='client__name'>{item.name}</h5>
                            <small className='client__review'>
                                {item.review}
                            </small>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonials