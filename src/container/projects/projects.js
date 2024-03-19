'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './projects.module.scss';

import TitleHeader from '@/components/titleHeader/titleHeader';
import Button from '@/components/buttons/button';

import AppWrap from '@/wrapper/appWrap';
import MotionWrap from '@/wrapper/wrapper';
import { Project1 } from '@/assets';
import ProjectCard from '@/components/projectCard/projectCard';
import { client } from '../../../sanity/lib/client';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const projectsQuery = '*[_type == "projects"]';
    client.fetch(projectsQuery).then((data) => {
      setProjectsData(data);
      setFilterWork(data);
    });
  }, []);

  const filterProjects = (e) => {
    const selectedCategory = e.target.value;

    setSelectedFilter(selectedCategory);

    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      let filteredProjects = [];

      if (selectedCategory === 'All') {
        // If 'All' is selected, show all projects
        filteredProjects = projectsData;
      } else {
        filteredProjects = projectsData.filter((project) =>
          project.tags.includes(selectedCategory)
        );
      }

      setFilterWork(filteredProjects);

      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  return (
    <div className={clsx(styles.projectContainer, 'component app_flex')}>
      <TitleHeader
        headerTitle={'Selected Projects'}
        headerSubtitle={'Check out some of my featured work'}
      />

      <div className={clsx(styles.filterBtnsContainer, 'flex')}>
        {['UI/UX', 'Web App', 'Backend', 'Frontend', 'All'].map((item) => (
          <Button
            key={item}
            classNames={selectedFilter === item ? clsx(styles.active) : ''}
            handleClick={filterProjects}
            buttonText={item}
          />
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={clsx(styles.projectsPortfolio, 'flex')}
      >
        {filterWork.map((project) => (
          <ProjectCard
            title={project.title}
            imgUrl={project.previewImage}
            projectDescription={project.desc}
            stackDescription={project.stack}
            type={project.type}
            key={project._id}
            repoLink={project.repoLink}
            previewLink={project.previewLink}
            responsiveness={project.responsive}
            status={project.status}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Projects, 'projects'), 'projects');
