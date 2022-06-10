import React from "react";

export default function ProductDetails(props){
    const {itemDetails, onAdd, closeProductDetails} = props;
    const closeData =1;
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


                </div>
            ))}
            <button onClick={() => closeProductDetails(closeData)}>Zamknij</button>

        </aside>
    )
}