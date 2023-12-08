

//API fetch call
function fetchAllData(){
fetch("http://localhost:3000/resortData")
.then(response => response.json())
.then(resortData => {
    const resortDataDiv = document.getElementById('weather-summary')

    resortData.map(resort => {
    const cardDiv = document.createElement('div')
    cardDiv.className = 'resort-card'

    const resortName = document.createElement('h2')
    resortName.textContent = resort.name
    cardDiv.appendChild(resortName)

    resortDataDiv.appendChild(cardDiv)
   })
});
}
fetchAllData()