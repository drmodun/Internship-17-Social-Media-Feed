import { Outlet, useSearchParams } from "react-router-dom";
import Navigation from "./Navigation";
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