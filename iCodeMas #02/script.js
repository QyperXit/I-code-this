document.addEventListener('DOMContentLoaded', function () {
  let clicked = document.querySelector('.card');
  let list = document.querySelectorAll('.list');

  list.forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.tagName.toLowerCase() === 'img') {
        const imgSrc = e.target.src;
        const imgAlt = e.target.alt;

        // Add the fade-out class to initiate the fade effect
        clicked.classList.add('fade-out');

        // Set a timeout to wait for the fade-out animation to complete
        setTimeout(() => {
          if (imgAlt === 'tree') {
            clicked.innerHTML = `
              <img src="${imgSrc}" alt="${imgAlt}">
              <div class="detail">
                <h2>Christmas Tree Stickers</h2>
                <div class="newTo">NEW</div>
                <span>$19.99</span>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                </div>
                <p class="para">As the festive season approaches, spread the joy of Christmas with these delightful stickers. Each sticker features a cheerful Christmas motif, perfect for adorning cards, gift tags, or even your holiday decorations. </p>
                <button>Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
              </div>`;
          } else if (imgAlt === 'box') {
            clicked.innerHTML = `
              <img src="${imgSrc}" alt="${imgAlt}">
              <div class="detail">
                <h2>Mystery gift</h2>
                <div class="saleTo">NEW</div>
                <span>$12.99</span>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                </div>
                <p class="para">Revel in the anticipation of the unknown, as the concealed treasures promise to be a source of joy and delight, offering a splendid surprise that will undoubtedly create lasting, cherished memories. </p>
                <button>Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
              </div>`;
          } else if (imgAlt === 'bread') {
            clicked.innerHTML = `
              <img src="${imgSrc}" alt="${imgAlt}">
              <div class="detail">
                <h2>Gingerbread Cookie</h2>
                <span>$8.99</span>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>
                </div>
                <p class="para">Celebrate the magic of Christmas with a delightful array of sweet treats. Indulge in the season's joy by savoring delectable flavors that add a touch of sweetness to your holiday festivities.. </p>
                <button>Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
              </div>`;
          }

          // Remove the fade-out class to reveal the new content
          clicked.classList.remove('fade-out');
        }, 500); // Adjust the timeout to match the transition duration
      }
    });
  });
});

