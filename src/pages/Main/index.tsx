import React from 'react';
import { Body } from '../../components/Body';
import { Header } from '../../components/Header';
import styles from './styles.module.scss';

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Body />
    </div>
  );
}

export default Main;