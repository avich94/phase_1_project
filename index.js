

//API fetch call
fetch("http://localhost:3000/resortData")
.then((response) => response.json())
.then((weatherData) => {
    console.log(weatherData)
});
