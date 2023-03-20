import { Outlet } from "react-router-dom";
import Jerseys from "./shopcatgs/jerseys";
import Shirts from "./shopcatgs/shirts";
import LongSleeve from "./shopcatgs/longsleeve";
import Shorts from "./shopcatgs/shorts";
import Hats from "./shopcatgs/hats";
import ShopNav from "./shopcatgs/shopnav";

function Shop() {
    return (
        
          <div className="shopmain">
            <ShopNav />
            <Outlet />
          </div>
    );
};

export default Shop;