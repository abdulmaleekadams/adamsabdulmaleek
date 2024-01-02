import { motion } from 'framer-motion';

import styles from './titleHeader.module.scss'
import clsx from 'clsx';
const TitleHeader = ({headerTitle, headerSubtitle}) => {
  return (
    <motion.div
      whileInView={{ y: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={clsx('titleHeader', styles.title)}
      viewport={{ once: true }}
    >
      <h2 className='title-text'>{headerTitle}</h2>
      <p>{headerSubtitle}</p>
    </motion.div>
  );
};

export default TitleHeader;
