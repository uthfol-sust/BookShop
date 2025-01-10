import React from 'react';

function Homepage() {
  return (
    <>
      <div className="p-4">
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Bookshop</h1>
        <p className="text-sm">Find the books you love</p>
      </header>
      <main className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to our Bookshop</h2>
        <p className="text-gray-700">
          Discover our wide collection of books and explore categories like
          bestsellers, new arrivals, and more!
        </p>
      </main>
    </div>
    </>
  );
}

export default Homepage;
