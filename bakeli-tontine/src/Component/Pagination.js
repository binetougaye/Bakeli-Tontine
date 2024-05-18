import React from 'react';
import './Pagination.css'; 
const Pagination = () => {
  return (
    <div className="pagination-container">
      <span className='text-secondary'>Previous page</span>
      <button className="pagination-button" style={{background:'#20DF7F'}}><strong>1</strong></button>
      <button className="pagination-button"><strong>2</strong></button>
      <button className="pagination-button"><strong>3</strong></button>
      <button className="pagination-button"><strong>4</strong></button>
      <span><b>Next Page</b></span>
    </div>
  );
};

export default Pagination;
