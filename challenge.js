// As a user, i should see the timer increment every second once the page has loaded
const counter = document.getElementById("counter")

document.addEventListener("DOMContentLoaded", function(){

  function incrementCounter(){
    counter.innerText++;
  }
  setInterval(incrementCounter, 1100);
})

// As a user, i can manually increment and decrement the counter as i like
const addButton = document.getElementById("+")
addButton.addEventListener('click', function(){
  counter.innerText++;
})

const minusButton = document.getElementById("-")
minusButton.addEventListener('click', function(){
  counter.innerText--;
})

// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number

let likestracker = {};

const likeButton = document.getElementById("<3")
likeButton.addEventListener('click', function(){
  const likesList = document.querySelector(".likes")
    if (Boolean(likestracker[counter.innerText])) {
      likestracker[counter.innerText]++;
      row = document.getElementById(`# ${counter.innerText}`);
      row.innerText = `${counter.innerText} has been liked ${likestracker[counter.innerText]} times`;
    }
    else {
      newLike = document.createElement("li");
      newLike.id = `# ${counter.innerText}`;
      likestracker[counter.innerText] = 1;
      newLike.innerText = `${counter.innerText} has been liked ${likestracker[counter.innerText]} time`;
      likesList.appendChild(newLike)
    }
})



// As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'



// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
