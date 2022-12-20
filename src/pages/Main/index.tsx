import React from 'react';
import { Header } from '../../components/Header';
import styles from './styles.module.scss';

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Pages</h1>
    </div>
  );
}

export default Main;