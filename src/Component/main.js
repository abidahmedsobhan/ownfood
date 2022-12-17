import React from "react";
import classNames from "classnames";
import useSticky from "./sticky";
import Slider from "./slider/slider";
import Topbar from "./navbar/navbar";
import EarnMoney from "./earn_money/earn_money";
import Custom_Search from "./Search_Bar_OnSlider/custom_Search";
import Blog from "./Blog/blog";
import Footer from "./footer/footer";
import Cuisine from "./cuisine/cuisine";
import "../App.css";
const Main = () => {
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <header className="header" style={{ height: 100 }}>
        <h1>Header</h1>
      </header>
      <nav ref={stickyRef} className={classNames("nav", { sticky })}>
        <Topbar />
      </nav>
      <div
        style={{
          height: sticky ? `${stickyRef.current?.clientHeight}px` : "0px",
        }}
      />
      <Slider />
      <Custom_Search />
      <EarnMoney />
      <Cuisine />
      <Blog />
      <Footer />
    </>
  );
};

export default Main;
