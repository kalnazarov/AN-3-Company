import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";

const Edit = () => {
    const [title, setTitle] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [material, setMaterial] = useState("");
    const [color, setColor] = useState("");
    const [img, setImg] = useState("");
    const {
        addProduct,
        getProduct,
        product,
        oneProduct,
        getOneProduct,
        editProduct,
        deleteProduct,
    } = useContext(productContext);
    const { id } = useParams();
    useEffect(() => {
        getOneProduct(id);
    }, []);
    useEffect(() => {
        setTitle(oneProduct.title);
        setSize(oneProduct.size);
        setPrice(oneProduct.price);
        setMaterial(oneProduct.material);
        setColor(oneProduct.color);
        setImg(oneProduct.img);
    }, [oneProduct]);
    function handleData() {
        let obj = {
            title,
            size,
            price,
            material,
            color,
            img,
        };
        editProduct(id, obj);
    }

    return (
        <div className="admin_block">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "300px",
                    margin: "auto",
                }}
                className="input_block"
            >
                <h1>EDIT</h1>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название"
                    value={title}
                />

                <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Цена"
                    value={price}
                />
                <input
                    type="text"
                    onChange={(e) => setMaterial(e.target.value)}
                    placeholder="Материал"
                    value={material}
                />
                <input
                    type="text"
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Цвет"
                    value={color}
                />
                <input
                    type="text"
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="image"
                    value={img}
                />
                <input
                    placeholder="Размер"
                    onChange={(e) => setSize(e.target.value)}
                ></input>
                <button onClick={handleData} >Редактировать</button>
            </div>
        </div>
    );
};

export default Edit;
