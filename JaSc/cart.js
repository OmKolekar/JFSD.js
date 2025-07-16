let value = 0;

function changeStatus() {
    document.querySelector("#message").innerText = `Your Cart has "${value}" items!`;
}

function add() {
    document.querySelector('#message').innerText = `Your Cart Has "${value = value + 1}"`;


}

function move() {
    let move = value;
    move = value - 1;
    if (move > -1) {

        value = move;
        document.querySelector('#message').innerText = `"${move}" Item Moved To Wishlist`;
    } else {
        alert("Bag Is Empty")
    }

}


function sale() {
    let wishList = value;
    document.querySelector("#message").innerText = `Buy "${wishList}" Items In The WishList And Get "${wishList}" Free`;

}

function clearCart() {
    document.querySelector('#message').innerText = "Cart cleared!";
}