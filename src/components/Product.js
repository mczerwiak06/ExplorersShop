import React from "react";

export default function Product(props){
    const {product, onAdd, onDetails, productToApp} = props;
    const dataToPass = 1;
    return (
        <div className="product">
            <img className="small" src={product.image} alt={product.name}></img>
                <h3>{product.name}</h3>
            <div>{product.price}zł</div>
            <div>
                <button onClick={() => onAdd(product)}>Dodaj do koszyka</button>
                <button onClick={() => {
                    onDetails(product);
                    productToApp(dataToPass);
                }}>Szczegóły</button>
            </div>
        </div>
    )
}
