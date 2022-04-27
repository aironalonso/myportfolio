import React, { useRef, useState } from 'react';
import "./contact.css"
import Address from "../../img/address.png";
import Email from "../../img/email.png";
import Phone from "../../img/phone.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_jy8urpb',
                'template_7lrx4z4',
                formRef.current,
                'm6wTfxxFGCD0jNDTl'
            )
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                {/* Left container */}
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                alt="contact number"
                                className="c-icon"
                                src={Phone}
                            />
                            +63 926 133 5981
                        </div>
                        <div className="c-info-item">
                            <img
                                alt="email address"
                                className="c-icon"
                                src={Email}
                            />
                            eronjoswaalonso@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                alt="address"
                                className="c-icon"
                                src={Address}
                            />
                            483 Anne's Apt. Balaga Subd. Kampupot St. Bagong Bayan, Malolos, Bulacan
                        </div>
                    </div>
                </div>

                {/* Right container */}
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            name="user_name"
                            placeholder="Name"
                            type="text"
                        />
                        <input
                            name="user_subject"
                            placeholder="Subject"
                            type="text"
                        />
                        <input
                            name="user_email"
                            placeholder="Email"
                            type="text"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5">
                        </textarea>
                        <button>Submit</button>
                        {done && 'Thank you...'}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;