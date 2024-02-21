import products from '../../../src/utils/products.js'
import '../../../src/assets/css/components/admin/board.css'
import React, { useEffect } from 'react';

export function Board() {

    // const is_visible = 1;

    useEffect(() => {
        if (!localStorage.getItem('admin')) {
            console.log("not connected")
        }
    }, []);

    return (

        <div className='flex shadow-md sm:rounded-lg justify-center content-center'>
            <table className='w-5/6 text-sm text-left rtl:text-right text-white dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-blue-900'>
                    <tr>
                        <th scope="col" className="px-6 py-3">id</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Desc</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Update</th>
                        <th scope="col" className="px-6 py-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((e) => (
                        <tr className="odd:bg-blue-700  even:bg-blue-600 border-b ">
                            <td className="px-6 py-4">{e.id}</td>
                            <td className="px-6 py-4">{e.name}</td>
                            <td className="px-6 py-4">{e.category}</td>
                            <td className="px-6 py-4">{e.desc}</td>
                            <td className="px-6 py-4">{e.price}</td>
                            <td className="px-6 py-4"> <button type="button" className="text-white border bg-green-700 hover:bg-green-100 hover:text-green-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Update</button></td>
                            <td className="px-6 py-4"> <button type="button" className="text-white border bg-red-700 hover:bg-red-100 hover:text-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}