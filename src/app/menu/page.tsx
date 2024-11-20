"use client";

import { useEffect, useState } from 'react';
import Layout from '../layout'; // Import the Layout component

export default function Menu() {
    const [menuItems, setMenuItems] = useState<{ name: string; price: string; imageUrl?: string }[]>([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const items = [
                { name: "Nasi Goreng", price: "$10" },
                { name: "Sate Ayam", price: "$15" },
                { name: "Rendang", price: "$12" },
                { name: "Gado-Gado", price: "$8" },
                { name: "Mie Goreng", price: "$9" },
            ];

            // Fetch images for each menu item
            const itemsWithImages = await Promise.all(items.map(async (item) => {
                const imageUrl = await fetchImage(item.name);
                return { ...item, imageUrl };
            }));

            setMenuItems(itemsWithImages);
        };

        const fetchImage = async (query: string) => {
            const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`);
            const data = await response.json();
            return data.urls?.small; // Return the small image URL
        };

        fetchMenuItems();
    }, []);

    return (
        <>
            <div className="px-2 pb-2 bg-gray-100">
            <h1 className="text-4xl font-bold text-center my-6 text-amber-700 bg-gray-100">Our Signature Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto bg-gray-100">
                {menuItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden bg-gray-100">
                        {item.imageUrl && (
                            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                        )}
                        <h2 className="text-2xl text-center px-4 pt-2 text-gray-600">{item.name}</h2>
                        <p className="text-center text-lg text-amber-600">{item.price}</p>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
} 