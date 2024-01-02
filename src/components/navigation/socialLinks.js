import clsx from 'clsx';

const SocialLinks = ({ socialLink, icon, classNames }) => {
  return (
    <a
      href={socialLink}
      target='_blank'
      rel='noopener noreferrer'
      className={clsx(classNames)}
    >
      {icon}
    </a>
  );
};

export default SocialLinks;
