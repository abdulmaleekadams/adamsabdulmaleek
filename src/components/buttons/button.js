import clsx from 'clsx';
import styles from './button.module.scss';
const Button = ({
  buttonText = 'Button Text',
  handleClick,
  buttonType,
  buttonStyle,
  classNames,
  href,
}) => {
  const ButtonElement = href ? 'a' : 'button';
  return (
    <ButtonElement
      onClick={handleClick}
      className={clsx(styles[buttonStyle], styles.btn, classNames)}
      value={buttonText}
      type={buttonType}
      href={ href }
      target='_blank'
    >
      {buttonText}
    </ButtonElement>
  );
};

export default Button;
