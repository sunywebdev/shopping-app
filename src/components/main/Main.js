import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
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
    }
    const [searchItems, setSearchItems] = useState([])
    const search = (event) => {
        const searchText = event.target.value
        const search = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchItems(search)
    }
    return (
        <div>
            <div className='bg-dark py-3 mb-2 sticky-top'>
                <form className="d-flex w-75 mx-auto">
                    <input onChange={search} className="form-control me-2" type="search" placeholder="Search Products......." aria-label="Search" />
                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" type="button" class="btn btn-warning position-relative">
                        <i class="fas fa-shopping-cart text-dark" ></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.length}
                            <span class="visually-hidden">Added Iteams</span>
                        </span>
                    </button>
                </form>
                <div class=" d-lg-none d-md-block offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <Cart
                            cart={cart}
                        ></Cart>
                    </div>
                </div>
            </div>
            <div className="home row mx-md-5 mx-auto">
                <div className="products col-lg-9">
                    {searchItems.map(product =>
                        <Products
                            key={product.key}
                            product={product}
                            getProduct={getProduct}
                        ></Products>
                    )}
                </div>
                <div className="cart col-lg-3 d-md-none d-lg-block">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;