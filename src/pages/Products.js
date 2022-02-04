import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <ul>
      <li><Link to='/products/book'>A Book</Link></li>
      <li><Link to='/products/carpet'>A Carpet</Link></li>
      <li><Link to='/products/online-course'>An Online Course</Link></li>
    </ul>
  );
};

export default Products;
