import products from '../../../src/utils/products.js'
import TablesAdmin from '../reusables/admin/tables.jsx';
import React, { useEffect, useState } from 'react';
import { getFakeProducts} from '../../services/api/fakeStoreApi';

export function Board() {
    const [fakeProducts, setFakeProducts] = useState([]);

    async function getRandomProducts(){
       const fkeProducts =  await getFakeProducts();
        setFakeProducts(fkeProducts);
        console.log(fkeProducts);
        }
    useEffect(() => {
        if (!localStorage.getItem('admin')) {
            console.log("not connected")
        }
        getRandomProducts();
    }, []);

    return (

        <div>
            <TablesAdmin data={fakeProducts}/>
        </div>
    )
}