import { Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Navigation";
import classes from "./Layout.module.css";
const Layout = () => {
  return (
    <div>
      <Navigation />
      
      <main>
        <div style={{marginBottom : "40px"}}>
        </div>

        <Outlet
        />
      </main>
    </div>
  );
};

export default Layout;