import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'
function Join() {

    // const form2 = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_4tunhj4', 'template_vzia9zv', form2.current)
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4tunhj4', 'template_x40sxmi', formRef.current, '4_hy3Kw313djaLigE')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                formRef.current.reset();
            }, (error) => {
                console.error('Failed to send email:', error);
            });
    };

    return (
        <div className='Join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>

            <div className="right-j">
                <form action="" className="email-container" ref={formRef} onSubmit={handleSubmit}>
                    <input type='text' name='user_name' placeholder='Enter your Name' required/>
                    <input type='email' name='user_email' placeholder='Enter you Email address' required/>
                    <button type='submit' className="btn btn-j">Get Updates</button>
                </form>
            </div>
        </div>
    )
}

export default Join
