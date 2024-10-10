import { useState } from "react";

import "./App.css";
import Header from "./BaiTapLayoutComponent/Header";
import Banner from "./BaiTapLayoutComponent/Banner";
import Footer from "./BaiTapLayoutComponent/Footer";

import Product_item from "./BaiTapLayoutComponent/Product_item";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <Product_item />
      <Footer />
    </>
  );
}

export default App;
