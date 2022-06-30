import React, {useState} from "react";

export default function ProductDetails(props) {
    const {itemDetails, onAdd, closeProductDetails, passQuantity, productDataFromMainToProduct} = props;
    const closeData = 1;
    const [quantity, setQuantity] = useState(1);

    function handleChange(event) {
        setQuantity(event.target.value);
    }

    return (
        <aside className="product_details">
            <h2>Details</h2>

            {itemDetails.map((item) => (
                <div key={item.id} className="row">
                    <div>
                        <img className="large" src={item.image} alt={item.name}></img>
                        <h3>{item.name}</h3>
                        <div>{item.price}zł</div>
                        <div>{item.details}</div>
                    </div>


                </div>
            ))}
            <form>
                <div className="product_details_form">
                <input
                    type='text'
                    placeholder='1'
                    onChange={handleChange}
                />
                <button className="details_button" type="button" onMouseOver={() => {
                    passQuantity(quantity)
                }} onClick={() => {
                    onAdd(productDataFromMainToProduct)
                }}>Do koszyka
                </button>
                <button className="details_button" onClick={() => closeProductDetails(closeData)}>Zamknij</button>
                </div>
            </form>
        </aside>
    )
}