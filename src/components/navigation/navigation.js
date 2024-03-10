'use client';

import clsx from 'clsx';
import { FiMoon, FiSun } from 'react-icons/fi';
import { BsList } from 'react-icons/bs';
import { useState } from 'react';

import styles from './navigation.module.scss';
import { navLinks, socialPageLinks } from '@/utils/naviLinks';
import NavigationLinks from './navigationLinks';
import SocialLinks from './socialLinks';
import { useTheme } from '../ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'tween',
        duration: 5,
      },
    },
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const { pageTheme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div
        className={clsx(styles.brand, 'flex', isOpen ? styles.menuOpen : '')}
      >
        <div className='navLogo'>
          <span className='bracket'>[</span>
          <span className='initial'>A</span>
          <span className='bracket'>]</span>
        </div>
        <button className={clsx(styles.menuIcon)} onClick={handleOpen}>
          <BsList />
        </button>
      </div>

      <nav className={clsx(styles.navContainer, isOpen ? 'show' : '')}>
        <div className={clsx(styles.navItems, 'flex')}>
          <div className={clsx(styles.navLinks, 'flex')}>
            {navLinks.map(({ title, icon }, idx) => (
              <NavigationLinks
                key={`navLink-${idx}`}
                linkText={title}
                linkUrl={title}
                icon={icon}
                classNames={styles.navLink}
                handleClick={handleOpen}
              />
            ))}
          </div>

          <div className={clsx(styles.socials, 'flex')}>
            {socialPageLinks.map(({ icon, link }, idx) => (
              <SocialLinks
                key={`socialLink-${idx}`}
                icon={icon}
                socialLink={link}
                classNames={styles.socialLink}
              />
            ))}

            <hr />

            <button id='theme' onClick={toggleTheme}>
              {pageTheme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
