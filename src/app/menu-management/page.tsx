"use client";

import { useState, useEffect } from 'react';
import axiosInstance from '../../lib/axiosInstance'; // Import the custom Axios instance

export default function MenuCRUD() {
    const [menuItems, setMenuItems] = useState<{ id: number; name: string; price: string; }[]>([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [editIndex, setEditIndex] = useState<number | null>(null);

    // Fetch menu items from the API
    const fetchMenuItems = async () => {
        try {
            const response = await axiosInstance.get('/api/menu');
            setMenuItems(response.data);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };

    useEffect(() => {
        fetchMenuItems(); // Fetch existing menu items from the API on component mount
    }, []);

    // Handle form submission for creating or updating menu items
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (editIndex !== null) {
                // Update existing item
                const updatedItem = { id: menuItems[editIndex].id, name, price };
                await axiosInstance.post(`/api/menu`, updatedItem);
                setEditIndex(null);
            } else {
                // Create new item
                await axiosInstance.post(`/api/menu`, { name, price });
            }
            setName('');
            setPrice('');
            fetchMenuItems(); // Refresh the menu items after submission
        } catch (error) {
            console.error('Error submitting menu item:', error);
        }
    };

    // Handle editing a menu item
    const handleEdit = (index: number) => {
        setName(menuItems[index].name);
        setPrice(menuItems[index].price);
        setEditIndex(index);
    };

    // Handle deleting a menu item
    const handleDelete = async (index: number) => {
        const itemToDelete = menuItems[index];
        try {
            await axiosInstance.delete(`/api/menu`, {
                data: { id: itemToDelete.id }
            });
            fetchMenuItems(); // Refresh the menu items after deletion
        } catch (error) {
            console.error('Error deleting menu item:', error);
        }
    };

    return (
        <>
            <div className="px-2 pb-2 bg-gray-100">
                <h1 className="text-4xl font-bold text-center mb-8">Menu Management</h1>
                <h2 className="text-2xl text-center mb-8">Add, update or remove the old menu on this page</h2>
            <form onSubmit={handleSubmit} className="mb-8 flex flex-col items-center">
                <input 
                    type="text" 
                    placeholder="Menu Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="border p-2 rounded mb-2 w-full max-w-xs"
                />
                <input 
                    type="text" 
                    placeholder="Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                    className="border p-2 rounded mb-2 w-full max-w-xs"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full max-w-xs">Submit</button>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                {menuItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                        <p className="text-lg">{item.price}</p>
                        <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</button>
                        <button onClick={() => handleDelete(index)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}