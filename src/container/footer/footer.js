import clsx from 'clsx';
import styles from './footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={clsx( 'flex', styles.footer)}>
      <div className={clsx('container flex', styles.footerContainer)}>
        <div className={clsx('flex', styles.brand)}>
          <div className='navLogo'>
            <span className='bracket'>[</span>
            <span className='initial'>A</span>
            <span className='bracket'>]</span>
          </div>
          <p>Thank for stopping by</p>
          <p className={styles.copyright}>© {year} Abdulmaleek Adams. All Rights Reserved</p>
        </div>

        <div className={clsx('flex', styles.linksContainer)}>
          <div className={clsx('flex', styles.links)}>
            <p>Links</p>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#skills'>Skills</a>
            <a href='#contact'>Contact</a>
          </div>
          <div className={clsx('flex', styles.elsewhere)}>
            <p>Elsewhere</p>
            <a href='#about'>Email</a>
            <a href='#projects'>LinkedIn</a>
            <a href='#skills'>Github</a>
            <a href='#contact'>Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
