import React from 'react';
import Rating from 'react-rating';
import './Products.css'

const Products = (props) => {
    const { name, img, seller, price, stock, features, star, starCount } = props.product
    return (
        <div className="card-group">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} alt={name} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8 text-start ">
                        <div className="card-body">
                            <h5 className="text-primary">{name}</h5>
                            <p>Seller : {seller}</p>
                            <div className='row'>
                                <div className="col-md-6">
                                    <h3>${price}</h3>
                                    <p><small>only {stock} left in stock - order soon</small></p>
                                    <button onClick={() => props.getProduct(props.product)} type="button" className="btn btn-warning py-0 px-5 border border-dark"><i class="fas fa-cart-plus pe-2"></i>Add to cart</button>
                                </div>
                                <div className="features col-md-6">
                                    <Rating className='py-1 pe-1'
                                        emptySymbol="far fa-star text-warning "
                                        fullSymbol="fas fa-star text-warning"
                                        initialRating={star}
                                        readonly
                                    ></Rating>({starCount})
                                    <h6 className='fw-bold'>Features</h6>
                                    {
                                        features.map(feature =>
                                            <li><small>{feature.description} : {feature.value}</small></li>
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