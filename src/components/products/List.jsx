import '../../../src/assets/css/components/products/list.css'
import products  from '../../utils/products';
import logo from '../../../src/assets/images/products/picture.png'
import { Link } from 'react-router-dom';

function List() {

    const listItems = products.map((product) => (
        <div class='product-list-card'>
            <h1 className='product-list-name'>{product.name.toUpperCase()}</h1>
            <img className='product-list-img' src={logo} alt={product.name} />
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