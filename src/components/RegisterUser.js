import React, {useReducer, useState} from "react";

export default function RegisterUser(props) {
    const {closeRegisterUser, basketData} = props;
    const closeData = 1;
    const formInitialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    }

    const [inputValues, dispatchFormValue] = useReducer(
        (curVal, newVal) => ({...curVal, ...newVal}),
        formInitialState,
    );

    const [orderVisible, setOrderVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(true);

    const {firstName, lastName, email, phone, address} = inputValues

    const reducerInputChange = (e) => {
        const {name, value} = e.target
        dispatchFormValue({[name]: value});

        console.log(inputValues);
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(inputValues)
        setOrderVisible(true);
        setFormVisible(false);
    }

    return (
        <div className="product_details">
            {formVisible && <div>
                <form onSubmit={onFormSubmit} noValidate>
                    <div className="sending_form">
                        <div className="sending_form_field">
                            <label className="mb-2">
                                <strong>Imię: </strong>
                            </label>
                            <div className="form_input">
                                <input
                                    required
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    className="form-control"
                                    onChange={reducerInputChange}
                                />
                            </div>
                        </div>
                        <div className="sending_form_field">
                            <label className="mb-2">
                                <strong>Nazwisko: </strong>
                            </label>
                            <div className="form_input">
                                <input
                                    required
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    className="form-control"
                                    onChange={reducerInputChange}
                                />
                            </div>
                        </div>
                        <div className="sending_form_field">
                            <label className="mb-2">
                                <strong>Email: </strong>
                            </label>
                            <div className="form_input">
                                <input
                                    required
                                    type="text"
                                    name="email"
                                    value={email}
                                    className="form-control"
                                    onChange={reducerInputChange}
                                />
                            </div>
                        </div>
                        <div className="sending_form_field">
                            <label className="mb-2">
                                <strong>Telefon: </strong>
                            </label>
                            <div className="form_input">
                                <input
                                    required
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    className="form-control"
                                    onChange={reducerInputChange}
                                />
                            </div>
                        </div>
                        <div className="sending_form_field">
                            <label className="mb-2">
                                <strong>Adres: </strong>
                            </label>
                            <div className="form_input">
                                <input
                                    required
                                    type="text"
                                    name="address"
                                    value={address}
                                    className="form-control"
                                    onChange={reducerInputChange}
                                />
                            </div>
                        </div>
                        <div className="basket_buttons">
                            <button type="submit" className="checkout" onClick={() => basketData(closeData)}>Zamawiam
                            </button>
                            <button type="button" className="checkout"
                                    onClick={() => closeRegisterUser(closeData)}>Zamknij
                            </button>
                        </div>
                    </div>
                </form>
            </div>}
            <div>
                {orderVisible && <div>
                    <h2>Dziękujemy za złożenie zamówienia.</h2>
                    <h3>Po zaksięgowaniu wpłaty, towar zostanie wysłany na poniższe dane:</h3>
                    <div className="customer_data">
                        <p>{firstName} {lastName}</p>
                        <p>{address}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                    </div>
                    <div className="payment">Wpłaty prosimy dokonać na konto podane w zakładce "Kontakt".</div>
                    <button className="checkout" onClick={() => closeRegisterUser(closeData)}>Zamknij</button>
                </div>}
            </div>
        </div>
    )
}
