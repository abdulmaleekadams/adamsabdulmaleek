'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './projects.module.scss';

import TitleHeader from '@/components/titleHeader/titleHeader';
import Button from '@/components/buttons/button';

import AppWrap from '@/wrapper/appWrap';
import MotionWrap from '@/wrapper/wrapper';
import Image from 'next/image';
import { Project1 } from '@/assets';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import ProjectCard from '@/components/projectCard/projectCard';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const filterProjects = (e) => {
    setSelectedFilter(e.target.value);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      //   if (item === 'All') {
      //     setFilterWork(works);
      //   } else {
      //     setFilterWork(works.filter((work) => work.tags.includes(item)));
      //   }
    }, 500);
  };

  return (
    <div className={clsx(styles.projectContainer, 'component app_flex')}>
      <TitleHeader
        headerTitle={'Selected Projects'}
        headerSubtitle={'Check out some of my featured work'}
      />

      <div className={clsx(styles.filterBtnsContainer, 'flex')}>
        {['UI/UX', 'Web App', 'Backend Dev.', 'Frontend Dev.', 'All'].map(
          (item) => (
            <Button
              key={item}
              classNames={selectedFilter === item ? clsx(styles.active) : ''}
              handleClick={filterProjects}
              buttonText={item}
            />
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={clsx(styles.projectsPortfolio, 'flex')}
      >
        <ProjectCard
          title={'MERN E-Commerce'}
          imgUrl={Project1}
          projectDescription={`A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
          stackDescription={`Built using React JS, Node.js, MongoDB, and Express`}
          type={`Web App`}
        />

        <ProjectCard
          title={'Portfolio Website'}
          imgUrl={Project1}
          projectDescription={`A personal portfolio website showcasing my skills and projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
          stackDescription={`Designed with HTML, CSS, and vanilla JavaScript`}
          type={`Web App`}
        />

        <ProjectCard
          title={'Task Manager App'}
          imgUrl={Project1}
          projectDescription={`A simple task manager application with CRUD functionality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
          stackDescription={`Built using React JS for the frontend and Node.js for the backend`}
          type={`Web App`}
        />

        <ProjectCard
          title={'E-Book Reader App'}
          imgUrl={Project1}
          projectDescription={`An e-book reader application with customizable themes and font settings. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
          stackDescription={`Developed with React JS and integrated with a backend API`}
          type={`Web App`}
        />

        <ProjectCard
          title={'Expense Tracker'}
          imgUrl={Project1}
          projectDescription={`A financial expense tracker with graphical insights. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
          stackDescription={`Built using React JS and a Node.js backend for data storage`}
          type={`Web App`}
        />

        <ProjectCard
          title={'Online Quiz Platform'}
          imgUrl={Project1}
          projectDescription={`An online quiz platform with real-time scoring and feedback. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
          stackDescription={`Developed with React JS and integrated with a backend API`}
          type={`Web App`}
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Projects, 'projects'), 'projects');
