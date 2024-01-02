import clsx from 'clsx';

const NavigationLinks = ({
  linkUrl,
  linkText,
  classNames,
  icon,
  handleClick,
}) => {
  return (
    <a
      //   key={}
      href={`#${linkUrl}`}
      className={clsx(classNames)}
      onClick={handleClick}
    >
      {icon}
      <span>{linkText}</span>
    </a>
  );
};

export default NavigationLinks;
