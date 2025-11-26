export const cart = [];

 export function addToCartFunc(productId) {
        let matchedItem;

            cart.forEach(cartItem => {
                if (productId === cartItem.productId)
                {
                    matchedItem = cartItem;
                }
            });

            if (matchedItem)
            {
                matchedItem.quantity += 1;
            }else {
                cart.push({
                    productId,
                    quantity: 1
                });
            }
    }