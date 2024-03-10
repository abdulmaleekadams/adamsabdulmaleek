'use client';

import AppWrap from '@/wrapper/appWrap';
import styles from './contact.module.scss';
import MotionWrap from '@/wrapper/wrapper';
import TitleHeader from '@/components/titleHeader/titleHeader';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Button from '@/components/buttons/button';
import { useState } from 'react';
import {
  FaEnvelope,
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => {
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
        <form className='flex' method='post'>
          <label htmlFor='email' className='flex'>
            Email
            <input
              onChange={handleInput}
              name='email'
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
