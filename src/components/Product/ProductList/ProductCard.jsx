import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { productContext } from "../../../contexts/ProductContext";
import "./ProductList.scss";
const ProductCard = ({ item }) => {
    const { deleteProduct } = useContext(productContext);
    const navigate = useNavigate();
    const {
        user: { email },
    } = useAuth();
    const ADMIN = "aibekovadik@mail.ru";
    return (
        <div className="prod_card">
            <div style={{ width: "100%" }}>
                <img
                    src={item.img}
                    alt=""
                    width="100%"
                    style={{ height: "300px" }}
                />
            </div>
            <div className="prod_card_body">
                <h3>{item.title}</h3>
                <div className="prod_card_body_info">
                    <p>Размер: {item.size}</p>
                    <p>Цвет: {item.color}</p>
                    <p>Материал: {item.material}</p>
                </div>
                {email == ADMIN && (
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginRight: "10px" }}
                            onClick={() => navigate(`/edit/${item.id}`)}
                        >
                            Edit
                        </Button>
                        <Button
                            color="error"
                            variant="contained"
                            onClick={() => deleteProduct(item.id)}
                        >
                            Delete
                        </Button>
                    </div>
                )}
            </div>
          
            <button>{item.price}</button>
            
        </div>
    );
};

export default ProductCard;
