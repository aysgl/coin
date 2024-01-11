import React from 'react'

const PaginationView = ({ total, page, onPageChange }) => {
    const pageNumbers = Array.from({ length: total }, (_, index) => index + 1);

    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
            <ul className="pagination">
                <li className={`page-item ${page === 1 ? 'disable' : ''}`}>
                    <a className="page-link" href="#" onClick={() => onPageChange(page - 1)}>
                        &#8676;
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === page ? 'active' : ''}`}>
                        <a className="page-link" href="#" onClick={() => onPageChange(number)}>
                            {number}
                        </a>
                    </li>
                ))}
                <li className={`page-item ${page === total ? 'disable' : ''}`}>
                    <a className="page-link" href="#" onClick={() => onPageChange(page + 1)}>
                        &#8677;
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default PaginationView