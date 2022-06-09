import React from "react";

export default function ProductDetails(props){
    const {itemDetails, onAdd, onRemove} = props;
    // const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    // const shippingPrice = itemsPrice > 300 ? 0 : 20;
    // const taxPrice = itemsPrice * 0.23;
    // const totalPrice = itemsPrice + shippingPrice;
    return (
        <aside className="block col-1">
            <h2>Details</h2>

            {itemDetails.map((item) => (
                <div key={item.id} className="row">
                    <div>
                        <img className="small" src={item.image} alt={item.name}></img>
                        <h3>{item.name}</h3>
                        <div>{item.price}zł</div>
                        <div>{item.details}</div>
                    </div>
                    {/*<div className="col-2"> {item.name}</div>*/}
                    {/*<div className="col-2">*/}
                    {/*    <button onClick={() => onAdd(item)} className="add">+</button>*/}
                    {/*    <button onClick={() => onRemove(item)} className="remove">-</button>*/}
                    {/*</div>*/}
                    {/*<div className="col-2 text-rig">*/}
                    {/*    {item.qty} x {item.price.toFixed(2)} zł*/}
                    {/*</div>*/}
                </div>
            ))}

        </aside>
    )
}