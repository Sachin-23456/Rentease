"use client";

import { useEffect, useState } from "react";

interface Item {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  securityDeposit: number;
  city: string;
  image: string;
}

const BASE_URL = "http://localhost:5000"; // Adjust if hosted elsewhere

export default function ListItems() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${BASE_URL}/api/items`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }
    fetchItems();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Available Items</h1>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item._id} className="border rounded-lg p-4 shadow-md">
            <img
              src={`${BASE_URL}${item.image}`}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-2">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="font-semibold">₹{item.price} / day</p>
          </div>
        ))}
      </div>
    </div>
  );
}
