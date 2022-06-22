import React, {useState} from "react";
import Product from "./Product";

export default function Main(props) {
    const {products, onAdd, onDetails, productToApp, closeProductDetails, getProductDataFromMain} = props;
    //przekazanie obiektu product z Product.js
    const [productDataFromProductToMain, setProductDataFromProductToMain] = useState(null);
    const getProductDataFromProduct = (product) => {
        setProductDataFromProductToMain(product);
        getProductDataFromMain(product);
    }
    return (
        <main className="products">
            <div>
                <h2>Nasze produkty</h2>

            </div>

            <div className="products">

                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd} onDetails={onDetails}
                             productToApp={productToApp} closeProductDetails={closeProductDetails}
                             getProductDataFromProduct={getProductDataFromProduct}/>
                ))}

            </div>
        </main>
    )
}