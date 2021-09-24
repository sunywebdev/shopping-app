import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import LocalStroage from '../localStroage/LocalStroage';
import Products from '../products/Products';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchItems(data)
            })
    }, [])

    const [cart, setCart] = useState([])
    const getProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        LocalStroage(product.key)
    }
    const [searchItems, setSearchItems] = useState([])
    const search = (event) => {
        const searchText = event.target.value
        const search = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchItems(search)
    }
    return (
        <div>
            <div className='bg-dark pb-3 mb-2'>
                <form className="d-flex w-75 mx-auto">
                    <input onChange={search} className="form-control me-2" type="search" placeholder="Search Products......." aria-label="Search" />
                </form>
            </div>
            <div className="home row">
                <div className="products col-lg-9">
                    {searchItems.map(product =>
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
        </div>
    );
};

export default Home;