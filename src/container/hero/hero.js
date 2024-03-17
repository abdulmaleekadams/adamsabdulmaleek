/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Button from '../../components/buttons/button';
import styles from './hero.module.scss';
import MotionWrap from '@/wrapper/wrapper';
import AppWrap from '@/wrapper/appWrap';
import { ProfileImg } from '@/assets';

const Hero = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  // console.log(ProfileImg);
  return (
    <div className={clsx(styles.heroContainer, 'app_flex')}>
      <div className={clsx(styles.profile, 'flex')}>
        <div className={clsx(styles.image)}>
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            alt='Profile Img'
            src={ProfileImg.src}
          />
        </div>

        <div className={clsx(styles.details, 'flex')}>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={clsx(styles.text)}
          >
            <h1 className='title-text'>
              <span></span>
              I'm Adams Abdulmaleek
            </h1>
            <p>
              A fullstack web developer helping startups turn their vision into
              a digital reality. I specialize in designing and building modern
              and responsive web-based apps.
            </p>
          </motion.div>

          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className={clsx(styles.button, 'flex')}
          >
            <Button
              buttonStyle={'bg-fill'}
              href={
                'https://drive.google.com/file/d/1iLggv_3hfg6c3DENZIs7BbA7Ke-M1jT0/view?usp=sharing'
              }
              buttonText='See my resume'
            />
            <Button
              buttonStyle={'border-fill'}
              buttonText='Get in touch'
              href={'#contact'}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Hero, 'hero'), 'home', 'white');
