import React from 'react';
import './Products.css'

const Products = (props) => {
    const { name, img, seller, price, stock, features } = props.product
    return (
        <div className="card-group">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} alt={name} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8 text-start ">
                        <div className="card-body">
                            <h5>{name}</h5>
                            <p>Seller : {seller}</p>
                            <div className='row'>
                                <div className="col-md-6">
                                    <h3>${price}</h3>
                                    <p>only {stock} left in stock - order soon</p>
                                    <button onClick={() => props.getProduct(props.product)} type="button" className="btn btn-warning py-0 px-5 border border-dark">Add to cart</button>
                                </div>
                                <div className="features col-md-6">
                                    <h3>Features</h3>
                                    {
                                        features.map(feature =>
                                            <ul>
                                                <li>{feature.description} : {feature.value}</li>
                                            </ul>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;