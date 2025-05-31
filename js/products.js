// Global variable to store products
let products = [];

// Function to fetch products from JSON file
async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to get a single product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Function to format price
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Function to create product card HTML
function createProductCard(product) {
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="product.html?id=${product.id}" class="block">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            </a>
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
                <p class="text-pink-600 font-bold mt-2">${formatPrice(product.price)}</p>
                <button 
                    onclick="addToCart(${product.id})"
                    class="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Function to create product details HTML
function createProductDetails(product) {
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="w-full h-96 object-cover">
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">${product.name}</h1>
            <p class="text-pink-600 text-2xl font-bold mb-4">${formatPrice(product.price)}</p>
            <p class="text-gray-600 mb-6">${product.description}</p>
            <button 
                onclick="addToCart(${product.id})"
                class="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
                Add to Cart
            </button>
        </div>
    `;
} 