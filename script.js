// Function to add item to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Handle Add to Cart button click
document.querySelectorAll('.fa-cart-plus').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        const productElement = this.closest('.pro');
        const productName = productElement.querySelector('h5').textContent;
        const productPrice = productElement.querySelector('h4').textContent;
        const productImage = productElement.querySelector('img').src;

        const product = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        
        addToCart(product);
    });
});

// Function to show a notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add event listeners Add Cart buttons
document.querySelectorAll('.fa-cart-plus').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        showNotification('Item added to cart!');
    });
});


