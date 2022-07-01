import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export default function Header(props) {
    const {childToParent, countCartItems} = props;
    const data = 1;
    return (
        <header className="header">
            <div className="header_menu">
                <div className="link">
                    <Link to="/contact">Kontakt</Link>
                </div>
                <div className="link">
                    <Link to="/shipping">Dostawa</Link>
                </div>
                <div className="link">
                    <Link to="/home">Strona główna</Link>
                </div>
            </div>
            <div className="header_title">
                <h1>ExplorersShop</h1>
            </div>
            <div>
                <div>
                    <button className="basket_button"
                            onClick={() => childToParent(data)}>{countCartItems}<FontAwesomeIcon icon={faCartShopping}/>
                    </button>
                </div>
            </div>
        </header>
    )
}
