import '../../../src/assets/css/components/products/list.css'

function List() {
    const products = [
                      { name: 'product 1', desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid eaque reprehenderit. Soluta, iure laborum? Eum, qu', price: 30 }, 
                      { name: 'product 2', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid eaque reprehenderit. Soluta, iure laborum? Eum, qu', price: 30 }, 
                      { name: 'product 3', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid eaque reprehenderit. Soluta, iure laborum? Eum, qu', price: 30 }, 
                      { name: 'product 4', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid eaque reprehenderit. Soluta, iure laborum? Eum, qu', price: 30 },
                      { name: 'product 5', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid eaque reprehenderit. Soluta, iure laborum? Eum, qu', price: 30 },
                      { name: 'product 6', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid eaque reprehenderit. Soluta, iure laborum? Eum, qu', price: 30 },
                      { name: 'product 7', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid eaque reprehenderit. Soluta, iure laborum? Eum, qu', price: 30 },
                      { name: 'product 8', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid eaque reprehenderit. Soluta, iure laborum? Eum, qu', price: 30 }
                    
                    ]
    const listItems = products.map((product, i) => (
        <div class='product-list-card'>
            <h1 class='product-list-name'>{product.name.toUpperCase()}</h1>
            <p class='product-list-desc'>{product.desc}</p>
            <p class='product-list-price'>{product.price}€ </p>
            </div>)

    );
    return (
        <div class="list-card">
            {listItems}
        </div>
    )
}

export default List;