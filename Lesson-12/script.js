function buyProduct(price) {
    let cartCookie = getCookie("cart")
    if(cartCookie === undefined)
    {
        let cart = {
            products: []
        }
        cartCookie = JSON.stringify(cart)
        setCookie("cart", cartCookie, {
            "max-age": 86000
        })
    }
    let cart = JSON.parse(cartCookie)
    if(cart.products === null || 
        cart.products === undefined
    ) 
        cart.products = []
    cart.products.push(price)
    setCookie("cart", JSON.stringify(cart), {
        "max-age": 86000
    })
}

function getCartTotal() {
    let cart = JSON.parse(getCookie("cart") || "{}")
    if(cart.products === null || 
        cart.products === undefined
    ) 
        return 0
    let total = 0
    cart.products.forEach(product => {
        total += product
    });
    return total
}

function refreshCartTotal() {
    document.querySelector(".cart-total span")
        .innerText = `${getCartTotal()} грн`
}

let previousCartTotal = 0

function checkCartUpdates() {
    let currentCartTotal = getCartTotal()
    
    if(currentCartTotal !== previousCartTotal) {
        refreshCartTotal()
        previousCartTotal = currentCartTotal
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    previousCartTotal = getCartTotal()
    refreshCartTotal()

    setInterval(() => {
        checkCartUpdates()
    }, 500)

    document.querySelector("button")
        .addEventListener("click", (event) => {
            buyProduct(100)
            refreshCartTotal()
            previousCartTotal = getCartTotal()
        })
})