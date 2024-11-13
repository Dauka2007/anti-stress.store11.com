let cart = [];
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} - ${item.price} тг x ${item.quantity}`;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });


    totalPrice.textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Ваша корзина пуста.");
        return;
    }
    alert("Заказ оформлен!");
    cart = [];
    updateCart();
    toggleCart();
}