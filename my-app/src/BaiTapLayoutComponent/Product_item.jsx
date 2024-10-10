import React from "react";
import Item from "./Item";

const Product_item = () => {
  return (
    <div className="product_item">
      <div className="container mx-auto">
        <div className="product_item_content grid grid-cols-4 gap-8 pb-6">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Product_item;
