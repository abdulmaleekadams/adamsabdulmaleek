import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import styles from './projectCard.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { urlForImage } from '../../../sanity/lib/image';

const ProjectCard = ({
  type,
  title,
  imgUrl,
  stackDescription,
  projectDescription,
  previewLink,
  repoLink,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.details}>
        <div className={clsx(styles.image)}>
          <Image unoptimized={true} fill={true} src={urlForImage(imgUrl).url()} alt={title} />
          <p className={clsx(styles.filterType)}>{type}</p>
        </div>

        <h4>{title}</h4>
        <p>{stackDescription && stackDescription.substring(0, 90)}</p>
        <div className={clsx(styles.link, 'flex')}>
          {repoLink && (
            <motion.a
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.25 }}
              viewport={{ once: true }}
              target='_blank'
              href={repoLink}
            >
              <AiOutlineGithub />
            </motion.a>
          )}
          <motion.a
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
            target='_blank'
            href={previewLink}
          >
            <AiOutlineLink />
          </motion.a>
        </div>
      </div>
      <div className={clsx(styles.about)}>
        <p>{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
