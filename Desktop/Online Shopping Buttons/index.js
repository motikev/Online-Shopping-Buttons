let cartQuantity = 0;

function addToCart() {
    cartQuantity = cartQuantity + 1;
    console.log(`Cart quantity: ${cartQuantity}`);
}

function addThree() {
    cartQuantity = cartQuantity + 3;
    console.log(`Cart quantity: ${cartQuantity}`);
}

function addFour() {
    cartQuantity = 4;
    console.log(`Cart quantity: ${cartQuantity}`);
}

function resetCart() {
    cartQuantity = 0;
    console.log('Cart was reset.');
    console.log(`Cart quantity: ${cartQuantity}`);
}

const addToCartButton = document.getElementById('add-to-cart');
const addThreeButton = document.getElementById('add-three');
const addFourButton = document.getElementById('add-four');
const resetCartButton = document.getElementById('reset-cart');

addToCartButton.addEventListener('click', addToCart);
addThreeButton.addEventListener('click', addThree);
addFourButton.addEventListener('click', addFour);
resetCartButton.addEventListener('click', resetCart);