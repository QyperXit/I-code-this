document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.items');
    const totalPriceElement = document.querySelector('.totalPrice');

    items.forEach(item => {
      const plusButton = item.querySelector('.fa-plus');
      const minusButton = item.querySelector('.fa-minus');
      const itemPlus = item.querySelector('.itemPlus');
      const priceElement = item.querySelector('.itemD span');
    


      plusButton.addEventListener('click', function () {
        updateQuantity(itemPlus, priceElement, 1);
      });

      minusButton.addEventListener('click', function () {
        updateQuantity(itemPlus, priceElement, -1);
      });
    });

    function updateQuantity(itemPlus, priceElement, change) {
      let currentValue = parseInt(itemPlus.innerText, 10);
      currentValue += change;

      if (currentValue >= 1) {
        itemPlus.innerText = currentValue;
        
        updateTotalPrice();
      }
    }

    function updateTotalPrice() {
      const itemPrices = Array.from(document.querySelectorAll('.itemD span'))
        .map(priceElement => {
          const price = parseFloat(priceElement.innerText.replace('$', ''));
          const quantity = parseInt(priceElement.parentNode.querySelector('.itemPlus').innerText, 10);
          
          return price * quantity;
        });

      const totalPrice = itemPrices.reduce((acc, current) => acc + current, 0).toFixed(2);
      totalPriceElement.innerText = `$${totalPrice}`;


    }
});

console.log(itemPlus.)
