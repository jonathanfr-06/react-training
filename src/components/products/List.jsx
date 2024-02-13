import '../../../src/assets/css/components/products/list.css'
import products  from '../../utils/products';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {  getRandomListPictures} from '../../services/lorempicsum';

function List() {
    const [imagesProduct, setImagesProduct] = useState([]);

    async function getImgs() {
        const imagess= await getRandomListPictures(products.length);
        for(let i = 0; i < imagess.length; i++ ){
         setImagesProduct(prevImages => [...prevImages, imagess[i].download_url]);
         console.log(imagess[i]);
        }
     }

    useEffect(() => {
        setImagesProduct([]);
        getImgs();
    }, []);

    const listItems = products.map((product, i) => (
        <div class='product-list-card'>
            <h1 className='product-list-name'>{product.name.toUpperCase()}</h1>
            <img className='product-list-img' src={imagesProduct[i]} alt={product.name} />
            <p className="product-list-category">Catégorie : {product.category}</p>
            <p className='product-list-desc'>{product.desc} </p>
            <p className='product-list-price'>Prix : {product.price} € </p>
            <Link to={`/product/${product.id}`} className='product-list-link'><button className='product-list-btn'>Details</button></Link>
        </div>
    )
    );
    return (
        <div class="list-card">
            {listItems}
        </div>
    )
}

export default List;