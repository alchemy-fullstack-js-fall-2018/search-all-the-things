import React, from 'react';

export default function Pageable({ currentPage, updatePage }) {
  return (
    <div>
      <button onClick={() => updatePAge(currentPage -1)}>&lt;</button>
      <span> {currentPage} </span>
      <button onClick={() => updatePAge(currentPage +1)}>&gt;</button>
    </div>
  )
}