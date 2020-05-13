/* eslint-disable react/jsx-no-target-blank */ 

import React from 'react';
import {ContactSection, ContactTitle, SPAN, Form, FormInput , TextArea, InputEmail, InputSubmit, InputSubject, InputText, Social, UL, LI} from './style'
import { AiFillLinkedin, AiFillTwitterSquare, AiFillFacebook, AiFillGithub, AiOutlineCodepen } from 'react-icons/ai';

const Contact = () => {
    return (
        <React.Fragment>
            <ContactSection>
                <div>
                    <h2><mark>#Contact Us</mark></h2> 
                    <ContactTitle><SPAN>Drop </SPAN>Me A line</ContactTitle>
                    <Form>
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email" />
                        </FormInput>
                        <InputSubject type="text" className="sub" placeholder="Your Subject" />
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSubmit type="submit" value="Send Message" />
                    </Form>
                    <hr />
                    <h2><mark>Follow us</mark></h2>
                    <Social>
                        <UL>
                            <LI>
                                <a href="https://www.linkedin.com/in/mohamed-khaled-yousef-421081a5/" target="_blank">
                                    <AiFillLinkedin />
                                </a>
                            </LI>
                            <LI>
                                <a href="https://github.com/mkhy19" target="_blank">
                                    <AiFillGithub />
                                </a>
                            </LI>
                            <LI>
                                <a href="https://codepen.io/mkhy7" target="_blank">
                                    <AiOutlineCodepen />
                                </a>
                            </LI>
                            <LI>
                                <a href="https://twitter.com/mkhy_19" target="_blank">
                                    <AiFillTwitterSquare />
                                </a>
                            </LI>
                            <LI>
                                <a href="https://www.facebook.com/mohamedkhaledyouseff" target="_blank">
                                    <AiFillFacebook />
                                </a>
                            </LI>
                            
                        </UL>
                    </Social>
                </div>
            </ContactSection>
        </React.Fragment>

    );
}

export default Contact;
