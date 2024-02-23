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

    const test2 = func => {
        func();
        setCount(count => count - 1);     
    }

    async function getRandomProducts(){
        const fkeProducts =  await getFakeProducts();
        setFakeProducts(fkeProducts);
      }

    const test = func => {
        func();    
        setCount(count => count + 1);
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
            {count}
            <NavBar test={test} test2={test2}/>
            <TablesAdmin data={fakeProducts} />
            <TablesAdmin data={fakeUsers} />
        </div>
    )
}