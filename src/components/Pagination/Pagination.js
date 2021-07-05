import React from "react";
import { Pagination } from "antd";
export default function PaginationComponent({
  postsPerPage,
  totalUserNumber,
  paginate,
}) {
  console.log("Pagination");
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalUserNumber / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination flex flex-row flex-wrap">
        {pageNumber.map((number, index) => {
          return (
            <li className="page-item" key={index}>
              <a
                href="#"
                onClick={() => {
                  paginate(number);
                }}
                className="page-link text-white p-2 bg-red-400 w-4 h-4"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
