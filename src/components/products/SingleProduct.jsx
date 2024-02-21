import React, { useState, useEffect } from 'react';
import products from '../../utils/products';
import '../../../src/assets/css/components/products/SingleProduct.css'
import '../../../src/index.css'

import { useParams } from 'react-router-dom';
import { getRandomPicture } from '../../services/lorempicsum';

function SingleProduct() {
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id)); // Use parseInt to convert id to integer
    const [image, setImage] = useState("");

    async function getImg() {
        let img = await getRandomPicture(400, 400);
        setImage(img);
    }
    useEffect(() => {
        getImg()
    }, []);


    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            {product ? (
                <div className='product-page'>
                    <div className='product-page-div-img'>
                        <img className='product-page-img' src={image} alt={product.name} />
                        <p className='product-page-img-text'>Desc</p>
                    </div>
                    <div className='product-page-texts'>
                        <h2 className='product-page-title'>{product.name.toUpperCase()}</h2>
                        <p className='product-page-cat'>Catégorie : {product.category}</p>
                        <p className='product-page-desc'>Desc: {product.desc}</p>
                        <p className='product-page-price'>Price: {product.price}</p></div>
                </div>
            ) : (
                <div>Product not found!</div>
            )}
        </div>
    );
}

export default SingleProduct;
