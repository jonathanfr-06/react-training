import {getjson} from "./apiUtils";


export async function getFakeProducts(){
    const url = 'https://fakestoreapi.com/products'
    const products = await getjson(url);
    return products;
}

export async function getFakeCarts(){
    const url = 'https://fakestoreapi.com/carts'
    const carts = await getjson(url);
    return carts;
}

export async function getFakeUsers(){
    const url = 'https://fakestoreapi.com/users'
    const users = await getjson(url);
    const keysToExclude = ['address', 'password']; 
    const filteredUsers = users.map(user => {
        const filteredUser = {};
        for (const key in user) {
            if (!keysToExclude.includes(key)) {
                filteredUser[key] = user[key];
            }
        }
        return filteredUser;
    });
    return filteredUsers;
}