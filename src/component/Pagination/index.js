import React from "react";
import "./Pagination.scss"
export default function Pagination({
  currentPage, // Page hiện tại mình đang xem
  pageSize, //Số phần tử trong 1 pages , cái này FE tự quyết định
  totalCount, //Tổng ố phần tử
  onChange,
}) {
  const generatePage = () => {
    const detal = 2;
    const totalPage = Math.ceil(totalCount / pageSize);
    const firstPage = Math.max(1, currentPage - detal);
    const lastPage = Math.min(totalPage, currentPage + detal);
    const pages = [];

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

  
  };
  const handleSelectPage = (page) => {
    if (page !== currentPage) {
      onChange(page);
    }
  };
  console.log("currentPage" ,currentPage);
  // console.log("onChange" , onChange);

  return (
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link">{`<`}</a>
        </li>
        {generatePage()}
        <li class="page-item active">
          <a class="page-link">{`>`}</a>
        </li>
      </ul>
    </nav>
  );
}
