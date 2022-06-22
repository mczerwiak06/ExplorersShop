import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Outlet, Link} from "react-router-dom";

export default function Header(props) {
    const {childToParent, countCartItems} = props;
    const data = 1;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>ExplorersShop</h1>
                </a>
                <Link to="/contact">Kontakt</Link>
                <Link to="/shipping">Dostawa</Link>
                <Link to="/home">Strona główna</Link>
            </div>
            <div>
                <div>
                    <button onClick={() => childToParent(data)}>{countCartItems}<FontAwesomeIcon icon={faCartShopping}/>
                    </button>
                </div>
            </div>
        </header>
    )
}
