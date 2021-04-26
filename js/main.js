let ratesData = [];

function fetchCurrencyRatesByDate() {
       console.log('Submit button was clicked');
       let month = document.querySelector('#month').value;
       let day = document.querySelector('#day').value;
       let year = document.querySelector('#year').value;
       const searchUrl = 'https://api.ratesapi.io/api/' + year +'-'+ month +'-' + day;
       console.log(searchUrl);
       fetch(searchUrl)
       .then(response => response.json())
       .then(data => {
        //    console.log(data);
            ratesData = data.rates;
        //    console.log(ratesData["GBP"]);
        render();
       })


          function render() {
          console.log('---------- rendering!')
          //Fetch the div from the page
        //   let graphDiv = document.querySelector('#graph');
          let graphDiv = document.querySelector('#graph');
    
           //Clear anything that might be in the div
            graphDiv.innerHTML = '';

           let bars = ["GBP", "AUD", "USD", "CAD"]
           for (let bar of bars) {
              console.log(bar);
              console.log(ratesData[bar]);
              let currency = ratesData[bar];
              // Create a new div that contains this information
              let newDiv = document.createElement('div');
              newDiv.classList.add('BarChart-bar-'+bar);
              newDiv.textContent = bar + " " + currency;
              newDiv.style.height = currency * 100 + 'px';
              graphDiv.appendChild(newDiv);


           }
        }

        onClick="alert('1 EUR = 1.1883 USD')" 




// function renderBarcharts() {

// barcharts = `
//     <div class="BarChart-bar-1" style="height: 100%">EUR</div>
//     <div class="BarChart-bar-2" onClick="alert('1 EUR = 1.1883 USD')" style="height: 75.5%">USD</div>
//     <div class="BarChart-bar-3" onClick="alert('1 EUR = 1.5491 AUD')" style="height: 55.9%">AUD</div>
//     <div class="BarChart-bar-4" onClick="alert('1 EUR = 1.4938 CAD')" style="height: 52.9%">CAD</div>
// `;

// }

    }