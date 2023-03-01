import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { productContext } from "../../../contexts/ProductContext";

const ProductCard = ({ item }) => {
    const { deleteProduct } = useContext(productContext);
    const navigate = useNavigate();
    const {
        user: { email },
    } = useAuth();
    const ADMIN = "adik@mail.ru";
    return (
        <div>
            <div style={{ width: "300px" }}>
                <img src={item.img} alt="" width="100%" />
            </div>
            <div>
                <h3>{item.title}</h3>
                {email == ADMIN && (
                    <div>
                        <button onClick={() => navigate(`/edit/${item.id}`)}>
                            edit
                        </button>
                        <button onClick={() => deleteProduct(item.id)}>
                            delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
