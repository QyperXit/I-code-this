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




document.addEventListener('DOMContentLoaded', function () {
  // Selecting checkboxes for category, color, and size filters
  const checkboxes = document.querySelectorAll('#category-filter input[type="checkbox"]');
  const colorCheckboxes = document.querySelectorAll('#color-filter input[type="checkbox"]');
  const sizeCheckboxes = document.querySelectorAll('#size-filter input[type="checkbox"]');
  
  // Selecting all grid items
  const gridItems = document.querySelectorAll('.grid-item');

  // Function to handle changes in the filters
  const handleFilterChange = function () {
    // Extracting names of checked categories, colors, and sizes
    const checkedCategoryFilters = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.name.toLowerCase());

    const checkedColorFilters = Array.from(colorCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.name.toLowerCase());

    const checkedSizeFilters = Array.from(sizeCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.name.toLowerCase());

    // Iterating through each grid item and checking if it matches the selected filters
    gridItems.forEach(item => {
      const itemCategory = item.dataset.category.toLowerCase();
      const itemColor = item.dataset.color.toLowerCase();
      const itemSize = item.dataset.size.toLowerCase();

      // Checking if the item matches the selected filters
      const isCategoryMatch = checkedCategoryFilters.includes(itemCategory) || checkedCategoryFilters.length === 0;
      const isColorMatch = checkedColorFilters.includes(itemColor) || checkedColorFilters.length === 0;
      const isSizeMatch = checkedSizeFilters.includes(itemSize) || checkedSizeFilters.length === 0;

      // Setting the display property based on filter matches
      if (isCategoryMatch && isColorMatch && isSizeMatch) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  };

  // Adding event listeners to category checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });

  // Adding event listeners to color checkboxes
  colorCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });

  // Adding event listeners to size checkboxes
  sizeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', handleFilterChange);
  });
});



