import React from 'react'

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow'

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table className="mx-auto" >
        <thead className="">
          <tr>
            <th className="text-white text-2xl ">Name</th>
            <th className="text-white  text-2xl ">Price</th>
          </tr>
        </thead>
        <tbody className='text-white'>{rows}</tbody>
      </table>
    );
  }

export default ProductTable ;
