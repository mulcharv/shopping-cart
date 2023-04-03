import { Outlet } from "react-router-dom";

function Product () {

    return (
        <div className="productmain">
            <Outlet />
        </div>
    );
};

export default Product;