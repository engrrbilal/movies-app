import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export const CustomPagination = ({ current, take, onChange, total }) => {
  const pageItems = [];

  // Determine range of page numbers to display
  
  let startPage, endPage;

  if (total <= 5) {
    startPage = 1;
    endPage = total;
  } else if (current <= 3) {
    startPage = 1;
    endPage = 5;
  } else if (current >= total - 2) {
    startPage = total - 4;
    endPage = total;
  } else {
    startPage = current - 2;
    endPage = current + 2;
  }

  // Create array of page numbers
  for (let i = startPage; i <= endPage; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={i === current}
        onClick={() => onChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  // Add ellipsis to the beginning of the list if necessary
  if (startPage > 1) {
    pageItems.unshift(
      <Pagination.Ellipsis
        key={-1}
        onClick={() => onChange(startPage - 5)}
      />
    );
    pageItems.unshift(
      <Pagination.Item
        key={0}
        active={current === 1}
        onClick={() => onChange(1)}
      >
        {1}
      </Pagination.Item>
    );
  }

  // Add ellipsis to the end of the list if necessary
  if (endPage < total) {
    pageItems.push(
      <Pagination.Ellipsis
        key={-2}
        onClick={() => onChange(endPage + 1)}
      />
    );
    pageItems.push(
      <Pagination.Item
        key={total}
        active={current === total}
        onClick={() => onChange(total)}
      >
        {total}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.Prev onClick={() => onChange(current - 1)} disabled={current === 1} />
      {pageItems}
      <Pagination.Next onClick={() => onChange(current + 1)} disabled={current === total} />
    </Pagination>
  );
};

export default CustomPagination;
