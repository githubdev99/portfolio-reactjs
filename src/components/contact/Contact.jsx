import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Contact = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mxkofe9', 'template_6nnfq7k', form.current, 'JJndjKdTeeM6qpjfF')
            .then((result) => {
                Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                }).fire({
                    icon: 'success',
                    title: `Pesan berhasil dikirim`,
                })

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Hubungi</h5>
            <h2>Kontak Saya</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>{props.profileData.email}</h5>
                        <a href="mailto:{props.profileData.email}" target='_blank' rel='noreferrer'>Kirim Pesan</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>{props.profileData.phoneNumber}</h5>
                        <a href={`https://api.whatsapp.com/send?phone=${props.profileData.phoneNumber}`} target='_blank' rel='noreferrer'>Kirim Pesan</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Nama Lengkap' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <textarea name="message" rows="7" placeholder='Pesan' required></textarea>
                    <button type='submit' className='btn btn-primary'>Kirim Pesan</button>
                </form>
            </div>
        </section>
    )
}

export default Contact