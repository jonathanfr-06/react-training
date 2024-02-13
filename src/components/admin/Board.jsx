import products from '../../../src/utils/products.js'
import '../../../src/assets/css/components/admin/board.css'

export function Board() {
    return (
        <div class='board-admin'>
        <table>
            <thead>
                <th>id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Desc</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>

            </thead>
            <tbody>
                {products.map((e) => (
                    <tr><td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.category}</td>
                        <td>{e.desc}</td>
                        <td>{e.price}</td>
                        <td><button class='board-admin-button-upd'>Update</button></td>
                        <td><button class='board-admin-button-del'>Delete</button></td>
                        </tr>
                        
                ))}

            </tbody>
        </table></div>
    )
}