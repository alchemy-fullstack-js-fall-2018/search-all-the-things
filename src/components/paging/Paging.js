import React from 'react';

export default function Paging({ currentPage, totalPages, updatePage }) {
  return (
    <div>
      <button onClick={() => updatePage(currentPage - 1)}>&lt;</button>
      <span>{currentPage} of {totalPages}</span>
      <button onClick={() => updatePage(currentPage + 1)}>&gt;</button>
    </div>
  );
}
