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

                     <button data-product-name="${product.name}" class="add-to-cart-button button-primary js-add-to-cart"> Add to Cart</button>

                </div>
        `
    }).join('');

    productGrid.innerHTML = productHTML;

    // Add to cart function
    const addToCart = document.querySelectorAll('.js-add-to-cart');

    addToCart.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(btn.dataset.productName);
        })
    })


}

renderProducts(products);


// <div class="product-container">
//             
//             <div class="product-rating-container">
//                 <img class="product-rating-stars"
//                 src="images/ratings/rating-${product.rating.stars * 10}.png">
//                 <div class="product-rating-count link-primary">
//                 ${product.rating.count}
//                 </div>
//             </div>

//             <div class="product-price">
//                 $${(product.priceCents / 100).toFixed(2)}
//             </div>

//             <div class="product-quantity-container">
//                 <select>
//                 <option selected value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//                 </select>
//             </div>

//             <div class="product-spacer"></div>

//             <div class="added-to-cart">
//                 
//             </div>

//             <button data-product-name="${product.name}" class="add-to-cart-button button-primary js-add-to-cart">
//                 Add to Cart
//             </button>
//             </div>` ;

