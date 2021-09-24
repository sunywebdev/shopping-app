import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    console.log(cart);
    let total = 0
    let shipping = 0
    let tax = 0
    let totalBeforeTax = 0
    let orderTotal = 0
    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
        totalBeforeTax = total + shipping
        tax = totalBeforeTax / 10
        orderTotal = shipping + totalBeforeTax + tax
    }

    return (
        <div className='cart sticky-top'>
            <h3>Order Summary</h3>
            <h5> Items ordered: {cart.length}</h5>
            <table className="table text-start">
                <tbody>
                    <tr>
                        <th scope="col">Items:</th>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th scope="col">Shipping & Handling:</th>
                        <td>${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th scope="col">Total before tax:</th>
                        <td>${totalBeforeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th scope="col">Estimated Tax:</th>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th scope="col">Order Total:</th>
                        <td>${orderTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-warning py-0 px-5 border border-dark text-center"> <i class="fas fa-shopping-basket pe-2"></i> Review orders</button>
        </div>
    );
};

export default Cart;