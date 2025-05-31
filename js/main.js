// Initialize the homepage
async function initHomePage() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    // Load products
    const products = await fetchProducts();
    
    // Display products
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initHomePage); 