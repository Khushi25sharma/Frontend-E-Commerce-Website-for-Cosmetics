// Render cart items
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartSummary = document.getElementById('cart-summary');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItems || !emptyCart || !cartSummary || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        emptyCart.classList.remove('hidden');
        cartSummary.classList.add('hidden');
        return;
    }

    emptyCart.classList.add('hidden');
    cartSummary.classList.remove('hidden');

    // Render cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="bg-white rounded-lg shadow-md p-4 flex items-center">
            <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg">
            <div class="ml-4 flex-grow">
                <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
                <p class="text-pink-600 font-bold">${formatPrice(item.price)}</p>
                <div class="flex items-center mt-2">
                    <button 
                        onclick="updateQuantity(${item.id}, ${item.quantity - 1})"
                        class="text-gray-600 hover:text-pink-600"
                    >
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="mx-4">${item.quantity}</span>
                    <button 
                        onclick="updateQuantity(${item.id}, ${item.quantity + 1})"
                        class="text-gray-600 hover:text-pink-600"
                    >
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button 
                onclick="removeFromCart(${item.id})"
                class="ml-4 text-gray-600 hover:text-red-600"
            >
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Update total
    cartTotal.textContent = formatPrice(calculateTotal());
}

// Initialize cart page
function initCartPage() {
    renderCart();

    // Add checkout button functionality
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('Thank you for your purchase! This is a demo site, so no actual payment will be processed.');
            cart = [];
            saveCart();
            renderCart();
        });
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initCartPage); 