import React from "react";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import data from "../data";

export default function Main(props){
    const {products, onAdd, onDetails, productToApp} = props;
    return (
        <main className="products">
            <div>
                <h2>Nasze produkty</h2>
            </div>

            <div className="products">

                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd} onDetails={onDetails} productToApp={productToApp}/>
                ))}

            </div>
        </main>
    )
}