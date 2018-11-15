import React from 'react';

const News = ({ result }) => {
  const { title } = result;
  return (
    <li>
      <h2>{title}</h2>
    </li>
  );
};

export default News;
