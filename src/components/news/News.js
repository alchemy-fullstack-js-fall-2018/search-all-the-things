import React from 'react';

const News = ({ result }) => {
  const { title, description, urlToImage } = result;
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={urlToImage}/>
    </li>
  );
};

export default News;
