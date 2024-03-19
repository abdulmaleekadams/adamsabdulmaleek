'use client';

import AppWrap from '@/wrapper/appWrap';
import styles from './contact.module.scss';
import MotionWrap from '@/wrapper/wrapper';
import TitleHeader from '@/components/titleHeader/titleHeader';
import clsx from 'clsx';
import Button from '@/components/buttons/button';
import { useRef, useState } from 'react';
import {
  FaEnvelope,
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleTextareaHeight = (e) => {
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const handleInput = (e) => {
    setFormDetails({ ...setFormDetails, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setFormDetails({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className={clsx(styles.contactContainer, 'component app_flex')}>
      <TitleHeader
        headerTitle={`Get in touch`}
        headerSubtitle={`Let's build something awesome.`}
      />
      <div className={clsx(styles.contactForm, 'flex')}>
        <div className={clsx(styles.formHeading, 'flex')}>
          <div className={clsx(styles.traffic, 'flex')}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>New message</p>
        </div>
        <form className='flex' ref={form} onSubmit={sendMessage}>
          <label htmlFor='email' className='flex'>
            Email
            <input
              onChange={handleInput}
              name='user_email'
              value={formDetails.email}
              placeholder='Enter your email address'
            />
          </label>
          <label htmlFor='name' className='flex'>
            Name
            <input
              onChange={handleInput}
              name='name'
              value={formDetails.name}
              placeholder='Enter your name'
            />
          </label>
          <label htmlFor='subject' className='flex'>
            Subject
            <input
              onChange={handleInput}
              name='subject'
              value={formDetails.subject}
              placeholder='Enter Subject'
            />
          </label>
          <div className={clsx(styles.textareaContainer)}>
            <textarea
              className={clsx(styles.textarea)}
              onChange={handleInput}
              onKeyDown={handleTextareaHeight}
              value={formDetails.message}
              placeholder='Write a message'
              name='message'
            ></textarea>
          </div>
          <Button
            buttonStyle={'bg-fill'}
            buttonType={'submit'}
            buttonText='Send'
            classNames={styles.sendBtn}
          />
        </form>
      </div>
      <div className={clsx(styles.socials, 'flex')}>
        <a
          href='mailto:abdulmaleekadams@outlook.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FaEnvelope />
        </a>
        <a
          href='https://twitter.com/abdmaleekadams'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FaSquareXTwitter />
        </a>
        <a
          href='https://www.linkedin.com/in/abdulmaleekadams/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FaLinkedin />
        </a>
        <a href=''>
          <FaGithubSquare />
        </a>
        <a
          href='https://github.com/abdulmaleekadams'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FaWhatsappSquare />
        </a>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Contact, 'contact'), 'contact');


