import { Button } from "@mui/material";
import React from "react";
import "./Product.css";
import ProductList from "./ProductList/ProductList";
const Product = () => {
    return (
        <div>
            <div className="welcome_block">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstellard.ru%2Fwp-content%2Fuploads%2F2017%2F11%2Fplitka-novyj-gorod-kolormiks-braun-foto.jpg&f=1&nofb=1&ipt=a2d7177a3b5850696bc37667ba79b0c7be57ac5793f808df9b61aee225145504&ipo=images"
                    alt=""
                    className="welcome_img"
                />
                <div className="welcome_header">
                    <h2>ПРОДАЖА ТРОТУАРНОЙ ПЛИТКИ</h2>
                    <button>WhatsApp</button>
                </div>
            </div>
            <div>
                <ProductList />
            </div>
        </div>
    );
};

export default Product;
