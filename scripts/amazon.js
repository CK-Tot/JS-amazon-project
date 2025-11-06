const productGrid = document.querySelector('.js-products-grid');

function renderProducts (products) {
    productGrid.innerHTML = '';

    const productHTML = products.map(product => {
        return `
                <div class="product-container">

                    <div class="product-image-container">
                        <img class="product-image" src="${product.image}" />
                    </div>

                    <div class="product-name limit-text-to-2-lines">
                        ${product.name}
                    </div>

                    <div class="product-rating-container">
                        <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png" />
                        <div class="product-rating-count link-primary">
                            ${product.rating.count}
                        </div>
                    </div>

                    <div class="product-price">
                    $${(product.priceCents / 100).toFixed(2)}
                    </div>

                    <div class="product-quantity-container">
                        <select>
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                     <div class="product-spacer"></div>

                     <div class="added-to-cart">
                        <img src="images/icons/checkmark.png">
                        Added
                     </div>

                     <button data-product-id="${product.id}" class="add-to-cart-button button-primary js-add-to-cart"> Add to Cart</button>

                </div>
        `
    }).join('');

    productGrid.innerHTML = productHTML;

    // Add to cart function
    const addToCart = document.querySelectorAll('.js-add-to-cart');

   addToCart.forEach((btn) => {

    btn.addEventListener('click', () => {
        const productId = btn.dataset.productId;
        let mathcingItem;

        cart.forEach((item) => {
            if (productId === item.productId)
            {
                mathcingItem = item
            }
        });

        if (mathcingItem)
        {
            mathcingItem.quantity += 1;
        }else{
            cart.push({
                productId: productId,
                quantity: 1
            });
        }
        
        let cartQuantity = 0;
        const cartEL = document.querySelector('.js-cart-quantity');
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });
        
        cartEL.innerHTML = cartQuantity;
    });


   });
}

renderProducts(products);
