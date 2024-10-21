import { motion } from "framer-motion";

const MotionWrap = ({
  Component,
  classNames,
}: {
  Component: React.ElementType;
  classNames: string;
}) =>
  function HOC() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [100, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`${classNames} app_flex`}
        viewport={{ once: true }}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
