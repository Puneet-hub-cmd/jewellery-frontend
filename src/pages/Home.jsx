import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-yellow-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Jewellery 💎</h1>
        <div className="space-x-6">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#orders" className="hover:underline">Orders</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center text-white h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Our Jewellery Store
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-lg">
          Find your perfect piece 💍
        </p>
        <a
          href="#products"
          className="bg-white text-yellow-600 font-bold px-6 py-3 rounded-full hover:bg-yellow-50 transition"
        >
          Explore Products
        </a>
      </section>

      {/* Products Section */}
      <section id="products" className="p-8 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-8">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/product1.jpg" alt="Product 1" className="rounded-md mb-2"/>
            <h4 className="font-bold">Gold Ring</h4>
            <p className="text-gray-600">Elegant 22k gold ring</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/product2.jpg" alt="Product 2" className="rounded-md mb-2"/>
            <h4 className="font-bold">Silver Necklace</h4>
            <p className="text-gray-600">Stylish silver necklace</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/product3.jpg" alt="Product 3" className="rounded-md mb-2"/>
            <h4 className="font-bold">Diamond Earrings</h4>
            <p className="text-gray-600">Sparkling diamond earrings</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-600 text-white text-center p-4 mt-auto">
        © 2025 Jewellery Store. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
