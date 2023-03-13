import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";
import "./Admin.scss";
const Admin = () => {
    const [title, setTitle] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [material, setMaterial] = useState("");
    const [color, setColor] = useState("");
    const [img, setImg] = useState("");
    const [call, setCall] = useState("");
    const { addProduct } = useContext(productContext);
    const navigate = useNavigate();
    function handleData() {
        let obj = {
            title,
            size,
            price,
            material,
            color,
            img,
        };
        addProduct(obj);
    }

    return (
        <div className="admin_block">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "400px",
                    margin: "auto",
                }}
                className="input_block"
            >
                <h1>ADMIN</h1>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название"
                />

                <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Цена"
                />
                <input
                    type="text"
                    onChange={(e) => setMaterial(e.target.value)}
                    placeholder="Материал"
                />
                <input
                    type="text"
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Цвет"
                />
                <input
                    type="text"
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="image"
                />
                <input
                    placeholder="Размер"
                    onChange={(e) => setSize(e.target.value)}
                ></input>
                

                <button onClick={(() => navigate(`/product`), handleData)}>
                    Добавить Продукт
                </button>
            </div>
        </div>
    );
};

export default Admin;
