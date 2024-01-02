import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import styles from './projectCard.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const ProjectCard = ({
  type,
  title,
  imgUrl,
  stackDescription,
  projectDescription,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={clsx(styles.image)}>
        <Image unoptimized={true} fill={true} src={imgUrl} alt={title} />
        <p className={clsx(styles.filterType)}>{type}</p>

        <div className={clsx(styles.about)}>
          <p>{projectDescription}</p>
        </div>
      </div>

      <h4>{title}</h4>
      <p>{stackDescription.substring(0, 90)}</p>
      <div className={clsx(styles.link, 'flex')}>
        <motion.a
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.25 }}
          viewport={{ once: true }}
          href='#'
        >
          <AiOutlineGithub />
        </motion.a>
        <motion.a
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.25 }}
          viewport={{ once: true }}
          href='#'
        >
          <AiOutlineLink />
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectCard;
