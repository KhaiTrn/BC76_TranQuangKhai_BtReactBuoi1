import React from "react";

const Item = () => {
  return (
    <div id="item">
      <div className="item_box text-center">
        <div className="item_img bg-gray-300 py-24 px-16"></div>
        <div className="item_title">
          <h4 className="text-2xl font-bold my-4">Card title</h4>
          <p className="text-base">
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            <br /> Sapiente esse necessitatibus <br /> neque.
          </p>
        </div>
        <div className="button py-4 bg-gray-100">
          <button className="p-3 bg-sky-700 text-white text-sm rounded-md">
            Find Out More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
