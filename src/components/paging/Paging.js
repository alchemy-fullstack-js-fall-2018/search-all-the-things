import React from 'react';
import styles from './Paging.css';

export default function Paging({ currentPage, totalPages, updatePage }) {
  const previousButton = currentPage > 1 && (
    <button onClick={() => updatePage(currentPage - 1)}>&lt;</button>
  );

  return (
    <div className={styles.paging}>
      {previousButton}
      <span>
        {currentPage} out of {totalPages}
      </span>
      <button onClick={() => updatePage(currentPage + 1)}>&gt;</button>
    </div>
  );
}
