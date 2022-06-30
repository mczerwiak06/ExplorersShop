import React from "react";

export default function Product(props) {
    const {product, onAdd, onDetails, productToApp, getProductDataFromProduct} = props;
    const dataToPass = 1;
    return (
        <div className="product">
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>{product.price}zł</div>
            <div className="product_buttons">
                <button className="product_button" onClick={() => onAdd(product)}>Dodaj do koszyka</button>
                <button className="product_button" onClick={() => {
                    onDetails(product);
                    productToApp(dataToPass);
                    getProductDataFromProduct(product);
                }}>Szczegóły
                </button>
            </div>
        </div>
    )
}
