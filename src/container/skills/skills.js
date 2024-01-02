'use client';
import MotionWrap from '@/wrapper/wrapper';
import styles from './skills.module.scss';
import AppWrap from '@/wrapper/appWrap';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Image from 'next/image';
import { skills } from '@/utils/skillsExp';
import experience from '@/utils/experience';
import TitleHeader from '@/components/titleHeader/titleHeader';
import { urlForImage } from '../../../sanity/lib/image';
import { useEffect, useState } from 'react';
import { client } from '../../../sanity/lib/client';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skillsIcon"]';
    client.fetch(skillsQuery).then((data) => setSkillsData(data));
    // const imgUrl = urlForImage(skillsData[0].icon);
  }, []);
  return (
    <div className={clsx(styles.skillsContainer, 'component app_flex')}>
      <TitleHeader
        headerTitle={'Skills & Experience'}
        headerSubtitle={'Tools I use and my career journey'}
      />
      {/* {console.log(urlForImage(skillsData[0].icon).format('webp').url())} */}
      <div className={clsx(styles.skillsExp, 'flex')}>
        <div className={clsx(styles.skills, 'flex')}>
          {skills.map(({ name, imgUrl }) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={name}
              className='flex'
            >
              <div className='flex'>
                <Image src={imgUrl} alt={name} fill={true} unoptimized />
              </div>
              <p>{name}</p>
            </motion.div>
          ))}
        </div>

        <div className={clsx(styles.exp, 'flex')}>
          {experience.map(({ year, work }, idx) => (
            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className={clsx(styles.expItem, 'flex')}
              key={year}
            >
              <div className={clsx(styles.expYear)}>
                <p>{year}</p>
              </div>
              <div className={clsx(styles.works, 'flex')}>
                {work.map(({ role, company }, idx) => (
                  <div
                    className={clsx(styles.expWorkInfo)}
                    key={`${company}-${idx}`}
                  >
                    <div className={clsx(styles.work)}>
                      <h3>{role}</h3>
                      <p>{company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills, 'skills'), 'skills');
