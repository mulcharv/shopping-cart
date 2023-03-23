import { Outlet } from "react-router-dom";
import ShopNav from "./shopcatgs/shopnav";

function Shop(props) {



    return (
        
          <div className="shopmain">
            <ShopNav />
            <Outlet />
          </div>
    );
};

export default Shop;