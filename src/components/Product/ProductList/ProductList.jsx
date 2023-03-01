import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { productContext } from "../../../contexts/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const {
        addProduct,
        getProduct,
        product,
        oneEvent,
        getOneProduct,
        editProduct,
        deleteProduct,
    } = useContext(productContext);
    const {
        user: { email },
    } = useAuth();
    const ADMIN = "sultan4ik2003@mail.ru";
    useEffect(() => {
        getProduct();
    }, []);
    const navigate = useNavigate();
    return (
        <div className="product_list">
            <h1>тротуарная плитка</h1>
            {email && (
                <Button onClick={() => navigate("/admin")} variant="contained">
                    new product
                </Button>
            )}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {product?.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
