import '../../../src/assets/css/components/products/list.css'
import products  from '../../utils/products';

function List() {

    const listItems = products.map((product) => (
        <div class='product-list-card'>
            <h1 class='product-list-name'>{product.name.toUpperCase()}</h1>
            <p className="product-list-category">{product.category}</p>
            <p class='product-list-desc'>{product.desc} </p>
            <p class='product-list-price'>Prix : {product.price} € </p>
            <button class='product-list-btn'>Details</button>
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