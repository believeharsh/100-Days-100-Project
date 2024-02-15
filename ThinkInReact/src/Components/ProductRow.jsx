import { useState } from 'react';

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr className="text-center border-blue-400 border-[0.8px] my-[1px]">
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
export default ProductRow;


