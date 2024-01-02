/* eslint-disable react/no-unescaped-entities */
'use client';
import clsx from 'clsx';
import { FaUserSecret } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './about.module.scss';
import AppWrap from '@/wrapper/appWrap';
import MotionWrap from '@/wrapper/wrapper';
import aboutDetails from '../../utils/aboutme';
import TitleHeader from '@/components/titleHeader/titleHeader';
import { client } from '../../../sanity/lib/client';
import { useEffect, useState } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
    const aboutQuery = '*[_type == "about"]';
    client.fetch(aboutQuery).then((data) => setAboutData(data));
  }, []);

  return (
    <div className={clsx(styles.aboutContainer, 'component app_flex')}>
      <TitleHeader
        headerTitle={'A little bit about me'}
        headerSubtitle={'Who I am and what I do'}
      />
      <div className={clsx(styles.details)}>
        <div className={clsx(styles.info)}>
          {aboutData.map(({ title, content }, idx) => (
            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={`details-${idx}`}
            >
              <h3>{title}</h3>
              <p>{content}</p>
            </motion.div>
          ))}
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Feel free to reach out via <a href='#'>e-mail</a>, or follow me on{' '}
              <a href='#'>Twitter</a>. Want to see where I've worked? Check out
              my <a href='#'>Resume</a>, or Connect with me on{' '}
              <a href='#'>LinkedIn</a>
            </p>
          </motion.div>

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>Let's build something great,</p>
            <p>Adams Abdulmaleek</p>
          </motion.div>
        </div>

        <motion.div className={clsx(styles.icon)}>
          <FaUserSecret />
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, 'about'), 'about');
