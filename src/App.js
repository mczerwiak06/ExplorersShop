import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import {Routes, Route} from "react-router-dom";
import Shipping from "./components/Shipping";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterUser from "./components/RegisterUser";


export default function App() {
    const [basketVisible, setBasketVisible] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [mainVisible, setMainVisible] = useState(true);
    const [orderFormVisible, setOrderFormVisible] = useState(false);
//przekazanie obiektu product z Main
    const [productDataFromMainToProduct, setProductDataFromMainToProduct] = useState(null);
    const getProductDataFromMain = (product1) => {
        setProductDataFromMainToProduct(product1);
        //console.log(productDataFromMainToProduct);
    }
    //przekazanie obiektu product do productDetails
    const [productDataToProductDetails, setProductDataToProductDetails] = useState(null);
    const postProductDataToProductDetails = (productDataFromMainToProduct) => {
        setProductDataToProductDetails(productDataFromMainToProduct);
        // console.log(productDataToProductDetails);
    }

    //obsługa quantity
    const [quantityToAdd, setQuantityToAdd] = useState(1);
    const passQuantity = (quantity) => {
        setQuantityToAdd(quantity);
        //console.log(quantityToAdd);
    }

    //wyświetlenie szczegółów produktu
    const productToApp = (dataToPass) => {
        setDetailsVisible(true);
        setMainVisible(false);
    }
    //zamknięcie szczegółów produktu
    const closeProductDetails = (closeData) => {
        setDetailsVisible(false);
        setMainVisible(true);
    }

    const onDetails = (product) => {
        setItemDetails([product]);
    }
    //wyświetlenie koszyka
    const childToParent = (childdata) => {
        setBasketVisible(true);
        setMainVisible(false);
        setDetailsVisible(false);
        setOrderFormVisible(false);
    }
    //zamknięcie koszyka
    const closeBasket = (basketCloseData) => {
        setBasketVisible(false);
        setMainVisible(true);
        setOrderFormVisible(false);
    }
    //obsługa koszyka
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);
    const [itemDetails, setItemDetails] = useState([]);


    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {...exist, qty: exist.qty + parseInt(quantityToAdd)} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: parseInt(quantityToAdd)}]);
        }
        setQuantityToAdd(1);
    };
    const onRemove = (product) => {
        //spr czy produkt istnieje w koszyku
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            //zastępuję tablice cartItems nową tablicę, która zawiera element spełniające podany warunek
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {...exist, qty: exist.qty - 1} : x
                )
            );
        }
    }
    const checkout = (checkoutData) => {
        setBasketVisible(false);
        setOrderFormVisible(true);
    }

    const closeRegisterUser = (closeData) => {
        setOrderFormVisible(false);
        setMainVisible(true);
    }
    const basketData = (closeData) => {
        setCartItems([]);
    }

    return (
        <div className="App">
            <Header childToParent={childToParent} countCartItems={cartItems.length}/>
            <div className="row">
                {mainVisible && <Main onAdd={onAdd} onDetails={onDetails} productToApp={productToApp}
                                      getProductDataFromMain={getProductDataFromMain} products={products}/>}
                {basketVisible &&
                    <Basket onAdd={onAdd} onRemove={onRemove} closeBasket={closeBasket} checkout={checkout}
                            cartItems={cartItems}/>}
                {detailsVisible &&
                    <ProductDetails onAdd={onAdd} onRemove={onRemove} closeProductDetails={closeProductDetails}
                                    passQuantity={passQuantity}
                                    itemDetails={itemDetails}
                                    productDataFromMainToProduct={productDataFromMainToProduct}/>}
                {orderFormVisible &&
                    <RegisterUser checkout={checkout} closeRegisterUser={closeRegisterUser} basketData={basketData}/>}
                <Routes>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/shipping" element={<Shipping/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}
