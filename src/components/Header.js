import React from "react";

export default function Header(props){
    const {childToParent, countCartItems} = props;
    const data = 1;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>ExplorersShop</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    Koszyk{' '}
                    {countCartItems ? (
                        <button onClick={() => childToParent(data)}>{countCartItems}</button>
                    ):('')}
                </a>
            </div>

        </header>
    )
}