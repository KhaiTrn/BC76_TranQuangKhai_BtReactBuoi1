import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-950 text-white py-4">
      <div className="lg:container lg:mx-auto">
        <div className="header_content flex justify-between">
          <div className="logo text-2xl">Start Bootstrap</div>
          <nav>
            <ul className="flex justify-start list-none text-gray-600">
              <li className="mx-3 text-white">
                <a href="#">Home</a>
              </li>
              <li className="mx-3 hover:text-white ease-out duration-300">
                <a href="#">About</a>
              </li>
              <li className="mx-3 hover:text-white ease-out duration-300">
                <a href="">Service</a>
              </li>
              <li className="mx-3 hover:text-white ease-out duration-300">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
