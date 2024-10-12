import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="banner_content p-6 lg:p-12 bg-gray-50">
        <div className="banner_title m-6 lg:m-12">
          <h1 className="text-slate-900 text-7xl font-light mb-2">
            A warm welcome!
          </h1>
          <p className="text-2xl mb-4">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been <br /> removed from the framework. Why
            create custom CSS when you can use utilities?
          </p>

          <button className="p-3 bg-sky-700 text-white text-2xl rounded-xl">
            Call to action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
