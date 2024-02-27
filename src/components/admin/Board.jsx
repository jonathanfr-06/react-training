import TablesAdmin from '../reusables/admin/tables.jsx';
import React, { useEffect, useState } from 'react';
import { getFakeProducts, getFakeCarts, getFakeUsers} from '../../services/api/fakeStoreApi';
import NavBar from "../../components/admin/NavBar";

export function Board() {

    const [fakeProducts, setFakeProducts] = useState([]);
    const [fakeUsers, setFakeUsers] = useState([]);
    const [count, setCount] = useState(0);

    async function getUsers(){
      const fkeUsers = await getFakeUsers();
      setFakeUsers(fkeUsers)
    }
    async function getCarts(){
        await getFakeCarts();
    }

    const showUsers = func => {
        func();
        setCount(1);     
    }

    async function getRandomProducts(){
        const fkeProducts =  await getFakeProducts();
        setFakeProducts(fkeProducts);
      }

    const showProducts = func => {
        func();    
        setCount(0);
    };

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
            <NavBar showProducts={showProducts} showUsers={showUsers}/>
            {count === 0 && <TablesAdmin data={fakeProducts} />}
            {count > 0 && <TablesAdmin data={fakeUsers} />}
        </div>
    )
}