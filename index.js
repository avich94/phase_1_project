document.addEventListener('DOMContentLoaded', function() {
    const commentsList = document.getElementById('list');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const comment = commentInput.value.trim()
      if (comment !== '') {
        const commentItem = document.createElement('div');
        commentItem.textContent = comment
        commentsList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
});

//API fetch call
function fetchAllData(){
fetch("http://localhost:3000/resortData")
.then(response => response.json())
.then(resortData => {
    const resortDataDiv = document.getElementById('weather-summary')

    resortData.map(resort => {
    const resortCardDiv = document.createElement('div')
    resortCardDiv.className = 'resort-card'

    const resortName = document.createElement('h2')
    resortName.textContent = resort.name
    resortCardDiv.appendChild(resortName)

    const resortTemp = document.createElement('h3')
    resortTemp.textContent = `Temperature: ${resort.temperature} Fahrenheit`
    resortCardDiv.appendChild(resortTemp)

    const resortSnowFall = document.createElement('h3')
    resortSnowFall.textContent = `Snowfall: ${resort.snowfall}"`
    resortCardDiv.appendChild(resortSnowFall)

    const resortWindSpeed = document.createElement('h3')
    resortWindSpeed.textContent = `Wind: ${resort.windspeed} MPH`
    resortCardDiv.appendChild(resortWindSpeed)

    let likes = 0
    const likeForecast = document.createElement('p')
    likeForecast.textContent = `Likes: ${likes}`
    resortCardDiv.appendChild(likeForecast);

    const likeButton = document.createElement('button')
    likeButton.className = 'like-btn'
    likeButton.textContent = "Like: 👍"
    likeButton.name = resort.name
    resortCardDiv.appendChild(likeButton)

    likeButton.addEventListener("click", () => {
      likes = likes + 1
      likeForecast.textContent = `Likes: ${likes}`
    });
    resortCardDiv.appendChild(likeButton)

    resortDataDiv.appendChild(resortCardDiv)
   })
});
}
fetchAllData()
