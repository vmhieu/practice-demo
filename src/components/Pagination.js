import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const navigate = useNavigate();
  return (
    <nav>
      <ul
        className="pagination justify-content-center"
        style={{ cursor: "pointer" }}
      >
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            onClick={() => {
              paginate(pageNumber);
            }}
            className="page-link"
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
