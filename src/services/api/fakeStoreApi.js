import {getjson} from "./apiUtils";


export async function getFakeProducts(){
    const url = 'https://fakestoreapi.com/products'
    const products = await getjson(url);
    console.log(products);
    return products;
}