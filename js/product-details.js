// Initialize product details page
async function initProductDetails() {
    const productDetails = document.getElementById('product-details');
    if (!productDetails) return;

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        productDetails.innerHTML = '<p class="text-red-600">Product not found</p>';
        return;
    }

    // Load products and find the requested product
    await fetchProducts();
    const product = getProductById(productId);

    if (!product) {
        productDetails.innerHTML = '<p class="text-red-600">Product not found</p>';
        return;
    }

    // Update page title
    document.title = `${product.name} - Cosmetic Shop`;

    // Render product details
    productDetails.innerHTML = createProductDetails(product);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initProductDetails); 