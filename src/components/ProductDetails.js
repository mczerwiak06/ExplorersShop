import React, {useState} from "react";

export default function ProductDetails(props) {
    const {itemDetails, onAdd, closeProductDetails, passQuantity, productDataFromMainToProduct} = props;
    const closeData = 1;
    const [quantity, setQuantity] = useState(1);

    function handleChange(event) {
        setQuantity(event.target.value);
    }

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
            <form>
                <input
                    type='text'
                    placeholder='1'
                    onChange={handleChange}
                />
                <button onClick={() => closeProductDetails(closeData)}>Zamknij</button>
                <button type="button" onMouseOver={() => {
                    passQuantity(quantity)
                }} onClick={() => {
                    onAdd(productDataFromMainToProduct)
                }}>Do koszyka
                </button>
            </form>
        </aside>
    )
}