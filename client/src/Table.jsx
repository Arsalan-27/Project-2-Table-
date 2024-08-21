// client/src/components/ItemTable.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemTable = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/items')
            .then(response => setItems(response.data))
            .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>  
                         
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            {console.log(item.name)} 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemTable;
