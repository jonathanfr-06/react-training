import React, { useEffect, useState } from 'react';

function TablesAdmin({ data }) {
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const allKeys = data.reduce((keys, item) => {
                return [...keys, ...Object.keys(item)];
            }, []);
            const uniqueKeys = [...new Set(allKeys)];
            setKeys(uniqueKeys);

        }
    }, [data]);

    return (
        <div className='flex shadow-md sm:rounded-lg justify-center content-center'>
            <table className='w-5/6 text-sm text-left rtl:text-right text-white dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-blue-900'>
                    <tr>
                        {keys.map((key, index) => (
                            <th key={index} scope="col" className="px-6 py-3">{key}</th>

                        ))}
                        <th scope="col" className="px-6 py-3">Update</th>
                        <th scope="col" className="px-6 py-3">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowData, index) => (
                        <tr className="odd:bg-blue-700  even:bg-blue-600 border-b " key={index}>
                            {keys.map((key, subIndex) => (
                                <td className="px-6 py-4" key={subIndex}>
                                    {typeof rowData[key] === 'object' ? (
                                        <div>
                                            {Object.keys(rowData[key]).map((subKey, innerIndex) => (
                                                <div key={innerIndex}>
                                                    {subKey}: {rowData[key][subKey]}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        key === 'image' ? (
                                            <img src={rowData[key]} alt={rowData[key]} /> 
                                        ) : (
                                            rowData[key]
                                        )
                                    )}
                                </td>
                            ))}
                            <td className="px-6 py-4"> <button type="button" className="text-white border bg-green-700 hover:bg-green-100 hover:text-green-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Update</button></td>
                            <td className="px-6 py-4"> <button type="button" className="text-white border bg-red-700 hover:bg-red-100 hover:text-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablesAdmin;
