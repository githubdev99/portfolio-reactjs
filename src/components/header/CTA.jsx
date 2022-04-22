import React from 'react'

const CTA = (props) => {
    return (
        <div className='cta'>
            <a href={props.profileData.urlCv} target="_blank" rel="noreferrer" className='btn'>Unduh CV</a>
            <a href="#contact" className='btn btn-primary'>Kontak Saya</a>
        </div>
    )
}

export default CTA