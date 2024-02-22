import products from '../../../src/utils/products.js'
import TablesAdmin from '../reusables/admin/tables.jsx';
import React, { useEffect, useState } from 'react';
import { getFakeProducts, getFakeCarts, getFakeUsers} from '../../services/api/fakeStoreApi';

export function Board() {
    const [fakeProducts, setFakeProducts] = useState([]);
    const [fakeUsers, setFakeUsers] = useState([]);

    async function getUsers(){
      const fkeUsers = await getFakeUsers();
      setFakeUsers(fkeUsers)
    }
    async function getCarts(){
        await getFakeCarts();
    }

    async function getRandomProducts(){
         const fkeProducts =  await getFakeProducts();
        setFakeProducts(fkeProducts);
      }

    useEffect(() => {
        if (!localStorage.getItem('admin')) {
            console.log("not connected")
        }
        getRandomProducts();
        getCarts();
        getUsers();
    }, []);

    return (

        <div>
            <TablesAdmin data={fakeProducts}/>
            <TablesAdmin data={fakeUsers}/>
        </div>
    )
}