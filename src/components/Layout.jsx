import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <div className="container mt-4 ">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
