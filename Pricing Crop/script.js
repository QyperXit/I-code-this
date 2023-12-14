let container = document.querySelectorAll('.container');

let text = [
    {
        heading: 'Starting up',
        h1: '1 Domain',
        h2: 'Email Support',
        h3: '200 GB Cloud Space',
        h4: '$4/mo',
        color: '#02a9f7'
        
    },
    {
        heading: 'Growing Business',
        h1: '10 Domain',
        h2: 'Email and Phone Support',
        h3: '500 GB Space Space',
        h4: '$12/mo',
        color: '#A901FF'
        
    },
    {
        heading: 'Enterprise',
        h1: '100 Domain',
        h2: '24/7 Email and Phone Support',
        h3: 'Unlimited Space Space',
        h4: '$52/mo',
        color: '#F20157'
    }
];

container.forEach((card, index) => {
    card.innerHTML = `
    <div class="badge" style="background:${text[index].color}">${text[index].h4}</div>
    <div class="top">
      <iconify-icon icon="uil:server-network"></iconify-icon>
      <h1>${text[index].heading}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatibus et, est deleniti</p>
    </div>
    <div class="bottom">
      <div class="col">
        <i class="fa-solid fa-check"></i>
        <h2>${text[index].h1}</h2>
      </div>
      <div class="col">
        <i class="fa-solid fa-check"></i>
        <h2>${text[index].h2}</h2>
      </div>
      <div class="col">
        <i class="fa-solid fa-check"></i>
        <h2>${text[index].h3}</h2>
      </div>
       <button>SELECT</button>
    </div>
  `;
});

