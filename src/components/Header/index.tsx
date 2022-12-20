import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt="logo" />
    </header>
  );
}
