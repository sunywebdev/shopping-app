import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Products from '../products/Products';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])
    const getProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="home row">
            <div className="products col-lg-9">
                {products.map(product =>
                    /*  console.log(product.key) */
                    <Products
                        key={product.key}
                        product={product}
                        getProduct={getProduct}
                    ></Products>
                )}
            </div>
            <div className="cart col-lg-3">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;