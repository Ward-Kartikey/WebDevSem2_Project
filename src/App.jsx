import { useState } from "react";

export default function AmazonClone() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  // ALL PRODUCTS
  const products = [
    {
      name: "Wireless Headphones",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Smart Watch",
      price: "₹3,499",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Laptop",
      price: "₹52,999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Gaming Mouse",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Bluetooth Speaker",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "DSLR Camera",
      price: "₹45,999",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Smartphone",
      price: "₹18,999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Mechanical Keyboard",
      price: "₹2,199",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "LED Monitor",
      price: "₹9,999",
      image:
        "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Gaming Chair",
      price: "₹7,499",
      image:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Tablet",
      price: "₹14,999",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Power Bank",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Air Conditioner",
      price: "₹32,999",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Refrigerator",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Microwave Oven",
      price: "₹8,499",
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Washing Machine",
      price: "₹19,999",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Coffee Maker",
      price: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Running Shoes",
      price: "₹2,299",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Backpack",
      price: "₹1,599",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Men's Jacket",
      price: "₹2,799",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Women's Handbag",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Sunglasses",
      price: "₹899",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Office Chair",
      price: "₹6,499",
      image:
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Study Table",
      price: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // SEARCH FILTER
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-[350px]">
          <h1 className="text-3xl font-bold text-center mb-6 text-yellow-500">
            {showSignup ? "Create Account" : "Amazon Login"}
          </h1>

          {showSignup && (
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full border p-3 rounded-lg mb-4 outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border p-3 rounded-lg mb-4 outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border p-3 rounded-lg mb-6 outline-none"
          />

          <button
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500"
          >
            {showSignup ? "Sign Up" : "Login"}
          </button>

          <p
            onClick={() => setShowSignup(!showSignup)}
            className="text-center mt-4 text-blue-500 cursor-pointer"
          >
            {showSignup
              ? "Already have an account? Login"
              : "Create new account"}
          </p>
        </div>
      </div>
    );
  }

  // MAIN HOME PAGE
  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-black text-white"
          : "min-h-screen bg-gray-100 text-black"
      }
    >
      {/* NAVBAR */}
      <nav className="bg-black text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-50">
        <div className="text-3xl font-bold text-yellow-400">
          Amazon Clone
        </div>

        {/* SEARCH BAR */}
        <div className="flex w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-l-lg text-black outline-none"
          />

          <button className="bg-yellow-400 px-5 rounded-r-lg text-black font-semibold hover:bg-yellow-500">
            Search
          </button>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex gap-5 items-center">
          <button className="hover:text-yellow-400">Home</button>

          <button className="hover:text-yellow-400">
            Cart ({cartCount})
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-700 px-4 py-2 rounded-lg"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <button
            onClick={() => setIsLoggedIn(false)}
            className="hover:text-red-400"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-yellow-300 to-orange-400 py-20 text-center text-black">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Amazon Clone
        </h1>

        <p className="text-lg">
          Best Deals on Electronics, Fashion & Home Appliances
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
          Shop Now
        </button>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">
          Top Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Electronics",
            "Fashion",
            "Mobiles",
            "Home Appliances",
            "Gaming",
            "Furniture",
            "Accessories",
            "Sports",
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-2xl shadow hover:scale-105 transition cursor-pointer text-center font-semibold"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              onClick={() => setSelectedProduct(product)}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-green-600 text-lg font-bold mb-4">
                  {product.price}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCartCount(cartCount + 1);
                  }}
                  className="w-full bg-yellow-400 py-2 rounded-xl font-semibold hover:bg-yellow-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT DETAILS POPUP */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-2xl w-[350px] shadow-2xl">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-52 object-cover rounded-xl"
            />

            <h2 className="text-2xl font-bold mt-4">
              {selectedProduct.name}
            </h2>

            <p className="text-green-600 text-xl font-bold mt-2">
              {selectedProduct.price}
            </p>

            <p className="text-gray-600 mt-3">
              Premium quality product with latest technology and
              amazing performance.
            </p>

            <button
              onClick={() => {
                setCartCount(cartCount + 1);
              }}
              className="mt-5 w-full bg-yellow-400 py-2 rounded-xl font-semibold hover:bg-yellow-500"
            >
              Add to Cart
            </button>

            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-3 w-full bg-red-500 text-white py-2 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>© 2026 Amazon Clone | All Rights Reserved</p>
      </footer>
    </div>
  );
}