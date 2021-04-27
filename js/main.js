let ratesData = [];

//Fetch the currency data for the date inputed by the user
function fetchCurrencyRatesByDate() {
    let month = document.querySelector('#month').value;
    let day = document.querySelector('#day').value;
    let year = document.querySelector('#year').value;
    const searchUrl = 'https://api.ratesapi.io/api/' + year +'-'+ month +'-' + day;
    fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
    ratesData = data.rates;
    render();
 })

//Render the graph
function render() {
    //Fetch the div from the page
    let graphDiv = document.querySelector('#graph');
    //Clear anything that might be in the div
    graphDiv.innerHTML = '';
    //Create and add each bar to the DOM 
    let bars = ["GBP", "AUD", "USD", "CAD"]
    for (let bar of bars) {
    let currency = ratesData[bar];
    // Create a new div that contains this information
    let newDiv = document.createElement('div');
    newDiv.classList.add('BarChart-bar-'+bar);
    newDiv.textContent = bar + " " + currency;
    newDiv.style.height = currency * 100 + 'px';
    graphDiv.appendChild(newDiv);
    }
  }

}