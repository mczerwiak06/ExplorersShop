import React from "react";

export default function Basket(props){
    const {cartItems, onAdd, onRemove, closeBasket} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 300 ? 0 : 20;
    const taxPrice = itemsPrice * 0.23;
    const totalPrice = itemsPrice + shippingPrice;
    const closeBasketData = 1;
    return (
        <aside className="block col-1">
            <h2>Twój koszyk</h2>
            <div>
                {cartItems.length === 0 &&<div><div>Koszyk pusty. Jak to możliwe?</div><button onClick={() => closeBasket(closeBasketData)}>Zamknij</button></div>}

            </div>
            {cartItems.map((item) => (
               <div key={item.id} className="row">
                   <div className="col-2"> {item.name}</div>
                   <div className="col-2">
                       <button onClick={() => onAdd(item)} className="add">+</button>
                       <button onClick={() => onRemove(item)} className="remove">-</button>
                   </div>
                   <div className="col-2 text-rig">
                       {item.qty} x {item.price.toFixed(2)} zł
                   </div>
               </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="basket">
                        <div className="col-2">Cena za produkty:</div>
                        <div className="col-1 text-right">{itemsPrice.toFixed(2)} zł</div>
                    </div>
                    <div className="basket">
                        <div className="col-2">W tym VAT:</div>
                        <div className="col-1 text-right">{taxPrice.toFixed(2)} zł</div>
                    </div>
                    <div className="basket">
                        <div className="col-2">Dostawa:</div>
                        <div className="col-1 text-right">{shippingPrice.toFixed(2)} zł</div>
                    </div>
                    <div className="basket">
                        <div className="col-2"><strong>Łącznie:</strong></div>
                        <div className="col-1 text-right"><strong>{totalPrice.toFixed(2)} zł</strong></div>
                    </div>
                    <hr/>
                <div className="row">
                    <button onClick={()=> alert ("Implement checkout")}>Checkout</button>
                </div>
                    <button onClick={() => closeBasket(closeBasketData)}>Zamknij</button>
                </>
            )}
        </aside>
    )
}