import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import ProductDetails from "./components/ProductDetails";

export default function App(){
    const[basketVisible, setBaketVisible] = useState(false);
    const[detailsVisible, setDetailsVisible] = useState(false);
    const[mainVisible, setMainVisible] = useState(true);

    //wyświetlenie szczegółów produktu
    const productToApp = (dataToPass) => {
        setDetailsVisible(true);
        setMainVisible(false);
        //console.log("jestem")
    }
    //zamknięcie szczegółów produktu
    const closeProductDetails = (closeData) => {
        setDetailsVisible(false);
        setMainVisible(true);
    }

    const onDetails = (product) =>{
        setItemDetails([product]);
        //setDetailsVisible(true);
        console.log(product.id);

    }
    //wyświetlenie koszyka
    const childToParent = (childdata) => {
        setBaketVisible(true);
        setMainVisible(false);
    }
    //zamknięcie koszyka
    const closeBasket = (basketCloseData) => {
        setBaketVisible(false);
        setMainVisible(true);
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
                    x.id === product.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
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
                    x.id === product.id ? {...exist, qty: exist.qty + -1} : x
                )
            );
        }
    }

    return(
        <div className="App">
            <Header childToParent={childToParent} countCartItems={cartItems.length}/>
            <div className="row">
                {mainVisible &&<Main onAdd={onAdd} onDetails={onDetails}  productToApp={productToApp}  products={products}/>}
                {basketVisible &&<Basket onAdd={onAdd} onRemove={onRemove}  closeBasket={closeBasket} cartItems={cartItems}/>}
                {detailsVisible &&<ProductDetails onAdd={onAdd} onRemove={onRemove}   closeProductDetails={closeProductDetails} itemDetails={itemDetails}/>}

            </div>
        </div>
    )
}