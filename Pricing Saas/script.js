document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggle');
    let row = document.querySelector('.row')
    const rootElement = document.documentElement;

    toggleSwitch.addEventListener('change', function () {
      if (toggleSwitch.checked) {
        cardTwo()
        rootElement.style.setProperty('--main-color', '#8325c2');
      } else {
        cardOne()
        
        rootElement.style.setProperty('--main-color', '#C2255C');
      }
    });



    function cardOne(){
        row.innerHTML = ` <div class="container">
        <h2>Starter</h2>
        <h1>$19<span> / month</span></h1>
       
     <ul style="margin-top: 2em;">
        <li>500 MAUs</li>
        <li>3 projects</li>
        <li>Unlimited guides</li>
        <li>Unlimited flows</li>
        <li>Unlimited branded themes</li>
        <li>Email support</li>
     </ul>
    
     <button>Choose Plan</button>
    </div>
    
    <div class="container">
        <h2>Pro</h2>
        <h1>$99<span> / month</span></h1>
        <form action="">
            <select>
              <option value="2500 MAUs">2500 MAUs</option>
              <option value="1500 MAUs">1500 MAUs</option>
            </select>
          </form>
          
     <ul>
        <li>All start features, plus:</li>
        <li>Unlimited projects</li>
        <li>Unlimited fully customizable themes</li>
        <li>A dedicated Customer Success Manager</li>
     </ul>
    
     <button>Choose Plan</button>
    </div>
    
     <div class="container">
        <h2>Enterprise</h2>
        <h1>Let's Talk!</h1>
        
     <ul style="margin-top: 4em;">
        <li>All Pro features</li>
        <li>Unlimited MAUs</li>
        <li>Dedicated environment</li>
        <li>Enterprise account administration</li>
        <li>Premium support and services</li>
     </ul>
    
     <button class="borderBtn">Choose Plan</button>
    </div>`
    }

    cardOne()

    function cardTwo(){
        row.innerHTML = ` <div class="container">
        <h2>Starter</h2>
        <h1>$169<span> / year</span></h1>
       
     <ul style="margin-top: 2em;">
        <li>500 MAUs</li>
        <li>3 projects</li>
        <li>Unlimited guides</li>
        <li>Unlimited flows</li>
        <li>Unlimited branded themes</li>
        <li>Email support</li>
     </ul>
    
     <button>Choose Plan</button>
    </div>
    
    <div class="container">
        <h2>Pro</h2>
        <h1>$999<span> / year</span></h1>
        <form action="">
            <select>
              <option value="2500 MAUs">2500 MAUs</option>
              <option value="1500 MAUs">1500 MAUs</option>
            </select>
          </form>
          
     <ul>
        <li>All start features, plus:</li>
        <li>Unlimited projects</li>
        <li>Unlimited fully customizable themes</li>
        <li>A dedicated Customer Success Manager</li>
     </ul>
    
     <button>Choose Plan</button>
    </div>
    
     <div class="container">
        <h2>Enterprise</h2>
        <h1>Let's Talk!</h1>
        
     <ul style="margin-top: 4em;">
        <li>All Pro features</li>
        <li>Unlimited MAUs</li>
        <li>Dedicated environment</li>
        <li>Enterprise account administration</li>
        <li>Premium support and services</li>
     </ul>
    
     <button class="borderBtn">Choose Plan</button>
    </div>`
    }
  });



