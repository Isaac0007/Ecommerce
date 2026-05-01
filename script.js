const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    }); 
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.toggle('active');
    }); 
}
        
function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (email && password) {
                alert(`Welcome back! You have successfully logged in.\nEmail: ${email}`);
                // Reset form
                document.getElementById('loginForm').reset();
            } else {
                alert('Please enter both email and password.');
            }
        }
        
        function handleRegister(event) {
            event.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            
            if (!name || !email || !password) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }
            
            alert(`Account created successfully!\nWelcome ${name}!\nYou can now login with your credentials.`);
            document.getElementById('registerForm').reset();
        }
        
        function socialLogin(provider) {
            alert(`You are logging in with ${provider}. This feature will be available soon!`);
        }

function sendMessage() {
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            alert(`Thank you ${name}! Your message has been sent. We'll get back to you within 24 hours.`);
            
            // Clear form
            document.getElementById('contactName').value = '';
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactSubject').value = '';
            document.getElementById('contactMessage').value = '';
        }

        // Add this to your existing script.js file

// Cart Functions
function getCart() {
    const cart = localStorage.getItem('shoppingCart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

function addToCart(productId, productName, productPrice, productImg) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            img: productImg,
            quantity: 1
        });
    }
    
    saveCart(cart);
    alert(`${productName} added to cart!`);
}

// Update cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

