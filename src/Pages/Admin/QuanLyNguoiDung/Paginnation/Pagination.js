import React from 'react'

export default function Pagination({
    currentPage, // Page hiện tại mình đang xem 1
    pageSize, //Số phần tử trong 1 pages , cái này FE tự quyết định 10
    totalCount, //Tổng số phần tử 20
    onChange,

}) {

  const generatePage = () => {
    const pages= [];
    const detal = 2;
    const totalPages = Math.ceil(totalCount / pageSize);
    const firstPage = Math.max( 1 , currentPage - detal);
    const lastPage = Math.min(totalPages, currentPage + detal);
    for (let page = firstPage; page <= lastPage; page++) {
        pages.push(
          <li style={{cursor: 'pointer'}}
            className={`page-item ${currentPage === page ? "active" : ''}`}
            onClick={() => {
              onChange(page)
            }}
          >
            <a className="page-link">{page}</a>
          </li>
        );
      }
      return pages;
  }
    return (
        <nav aria-label="Page navigation" className="pagination-custom">
      <ul className="pagination ">
        <li className="page-item disabled">
          <a className="page-link">{`<<`}</a>
        </li>
        {generatePage()}
        <li className="page-item">
          <a className="page-link">{`>>`}</a>
        </li>
      </ul>
    </nav>
    )
}
