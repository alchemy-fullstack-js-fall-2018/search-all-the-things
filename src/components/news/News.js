import React from 'react';
import styles from './News.css';

const News = ({ result }) => {
  const { title, description, urlToImage } = result;
  return (
    <li className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={urlToImage}/>
    </li>
  );
};

export default News;
