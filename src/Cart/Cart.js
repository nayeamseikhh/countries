import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population; 
    // }
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    // (for loop and reduce is same )
    return (
        <div>
            <h4>This is cart: {cart.length}</h4>
            <p>Total Population : {totalPopulation}</p>
            
        </div>
    );
};

export default Cart;