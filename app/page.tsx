"use client"

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform"
            >
              <img
                src={`https://picsum.photos/400/300?random=${num}`}
                alt={`Blog ${num}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">Blog Post {num}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                This is a short description of blog post {num}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
