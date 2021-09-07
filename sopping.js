const displayLocalStrorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayItem(name)
    }
};

const addItem = () => {
    const nameFiled = document.getElementById('product-name');
    const name = nameFiled.value;
    if (!name) {
        return;
    }
    //display add the ui
    displayItem(name)
        // add local storage
    addProductToCart(name);


    nameFiled.value = '';
}

const displayItem = (name) => {
    const ul = document.getElementById('addItem');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
    } else {
        cartObject = {};
    }
    return cartObject;
}
const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] += 1;
    } else { cart[name] = 1; }
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const placeOrder = () => {
    document.getElementById('addItem').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStrorageCart();