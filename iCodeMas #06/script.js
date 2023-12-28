let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    let cart = item.querySelector('.cartS');
    let cartIcon = item.querySelector('.fa-cart-shopping');
    let cartHeading = item.querySelector('.cart-heading');

    let isAddedToCart = false;

    item.addEventListener('mouseover', e => {
        if (cart) {
            cart.style.opacity = 1;
        }
    });

    item.addEventListener('mouseout', e => {
        if (!isAddedToCart) {
            if (cart) {
                cart.style.opacity = 0;
            }
        }
    });

    item.addEventListener('click', e => {
        if (cart) {
            isAddedToCart = !isAddedToCart;

            if (isAddedToCart) {
                if (cartIcon) {
                    cartIcon.style.display = 'none';
                }
                if (cartHeading) {
                    cartHeading.innerText = 'Added to cart';
                }
                cart.style.background = 'var(--gradient-9)'; // Change background color to grey
            } else {
                if (cartIcon) {
                    cartIcon.style.display = 'flex';
                }
                if (cartHeading) {
                    cartHeading.innerText = 'Add to cart';
                }
                cart.style.background = 'var(--gradient-14)'; // Change background color back to the original
            }
        }
    });
});

