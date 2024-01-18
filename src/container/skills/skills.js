'use client';
import MotionWrap from '@/wrapper/wrapper';
import styles from './skills.module.scss';
import AppWrap from '@/wrapper/appWrap';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Image from 'next/image';
import experience from '@/utils/experience';
import TitleHeader from '@/components/titleHeader/titleHeader';
import { useEffect, useState } from 'react';
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [expData, setExpData] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const workExpQuery = '*[_type == "exp"]';
    client.fetch(skillsQuery).then((data) => setSkillsData(data));
    client.fetch(workExpQuery).then((data) => setExpData(data));
  }, []);

  return (
    <div className={clsx(styles.skillsContainer, 'component app_flex')}>
      <TitleHeader
        headerTitle={'Skills & Experience'}
        headerSubtitle={'Tools I use and my career journey'}
      />
      <div className={clsx(styles.skillsExp, 'flex')}>
        <div className={clsx(styles.skills, 'flex')}>
          {skillsData.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={skill.name}
              className='flex'
            >
              <div className='flex'>
                <Image src={urlForImage(skill.icon).url()} alt={skill.name} fill={true} unoptimized />
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <div className={clsx(styles.exp, 'flex')}>
          {expData.map(({ year, works }, idx) => (
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
                {works.map(({ role, company }, idx) => (
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
