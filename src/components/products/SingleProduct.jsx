import React from 'react';
import products from '../../utils/products';
import { useParams } from 'react-router-dom';

function SingleProduct() {
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id)); // Use parseInt to convert id to integer

    console.log(product);
    
    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            ) : (
                <div>Product not found!</div>
            )}
        </div>
    );
}

export default SingleProduct;
