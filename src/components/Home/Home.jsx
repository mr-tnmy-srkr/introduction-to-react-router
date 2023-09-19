// import React from 'react'

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Home;
