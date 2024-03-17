import Swal from "sweetalert2";

// Manage cart data
const addToDB = id => {
    let cart = {};

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    // add quantity
    if (cart[id]) {
        cart[id] += 1;
    } else {
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Get cart data
const getStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');

    if (storedCart) {
        cart= JSON.parse(storedCart);
    }
    return cart;
}


// Remove product
const removeFromDB = id => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');

    if(storedCart) {
        cart = JSON.parse(storedCart);
    }

    delete cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));

    Swal.fire({
        title: "Product Removed!",
        text: `Product removed`,
        icon: "info"
      });
    setTimeout(() => window.location.reload(), 1000);
}

// Delete shopping cart
const deleteShoppingCart = () => {
    localStorage.removeItem('cart');
    window.location.reload();
}

export {
    addToDB,
    getStoredCart,
    deleteShoppingCart,
    removeFromDB
}