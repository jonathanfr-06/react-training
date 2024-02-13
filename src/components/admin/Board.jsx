import products from '../../../src/utils/products.js'
import '../../../src/assets/css/components/admin/board.css'
import React, { useState, useEffect } from 'react';

export function Board() {
    
    useEffect(() => {
        if(!localStorage.getItem('admin'))
        {
            console.log("not connected")
        }
    }, []);

    return (
        <div className='board-admin'>
        <table>
            <thead>
                <tr><th>id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Desc</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map((e) => (
                    <tr key={e.id}><td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.category}</td>
                        <td>{e.desc}</td>
                        <td>{e.price}</td>
                        <td><button className='board-admin-button-upd'>Update</button></td>
                        <td><button className='board-admin-button-del'>Delete</button></td>
                        </tr>
                        
                ))}

            </tbody>
        </table></div>
    )
}