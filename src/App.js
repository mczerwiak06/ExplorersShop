import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import ProductDetails from "./components/ProductDetails";

export default function App(){
    const[basketVisible, setBaketVisible] = useState(false);
    const[detailsVisible, setDetailsVisible] = useState(false);

    const productToApp = (dataToPass) => {
        setDetailsVisible(true);
        console.log("jestem")
    }

    const onDetails = (product) =>{
        setItemDetails([product]);
        //setDetailsVisible(true);
        console.log(product.id);

    }

    const childToParent = (childdata) => {
        setBaketVisible(true);
    }

    //wyswietlanie koszyka
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
                <Main onAdd={onAdd} onDetails={onDetails}  productToApp={productToApp} products={products}/>
                {basketVisible &&<Basket onAdd={onAdd} onRemove={onRemove}  cartItems={cartItems}/>}
                {detailsVisible &&<ProductDetails onAdd={onAdd} onRemove={onRemove}   itemDetails={itemDetails}/>}

            </div>
        </div>
    )
}