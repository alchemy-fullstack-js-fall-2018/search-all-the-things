import React from 'react';

export default function Paging({ currentPage, totalPages, updatePage }) {
  const previousButton = currentPage > 1 && (
    <button onClick={() => updatePage(currentPage - 1)}>&lt;</button>
  );
  const nextButton = currentPage > 1 && (
    <button onClick={() => updatePage(currentPage + 1)}>&gt;</button>
  );

  return (
    <div>
      {previousButton}
      <span>
        {currentPage} out of {totalPages}
      </span>
      {nextButton}
    </div>
  );
}
