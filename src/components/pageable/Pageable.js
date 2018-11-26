import React, { Fragment } from 'react';

export default function Pageable({ currentPage, totalPages, updatePage }) {
    let previousButton = null;
    if(currentPage > 1) {
        previousButton = (
            <button type="button" onClick={() => updatePage(currentPage - 1)}>
                Previous
            </button>
        );
    }

    let nextButton = null;
    if(currentPage < totalPages) {
        nextButton = (
            <button type="button" onClick={() => updatePage(currentPage + 1)}>
                Next
            </button>
        );
    }

    return (
        <Fragment>
            <h1>test</h1>
            {previousButton}
            <span>
                {currentPage} out of {totalPages}
            </span>
            {nextButton}
        </Fragment>
    );
}
