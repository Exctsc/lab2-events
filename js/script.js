let starCount = 0;

// 1. TIME: show a live clock and change the background for day or night
function updateClock() {
  let now = new Date();
  document.getElementById("clock").innerHTML = now.toLocaleTimeString();

  let hour = now.getHours();
  if (hour >= 7 && hour < 19) {
    document.body.style.backgroundColor = "#6fb3e8"; // day sky
    document.getElementById("title").innerHTML = "Day Sky";
  } else {
    document.body.style.backgroundColor = "#0b1a3a"; // night sky
    document.getElementById("title").innerHTML = "Night Sky";
  }
}

updateClock();
setInterval(updateClock, 1000); // run every second

// 2. MOUSE: click the sky to add a star where you clicked
document.getElementById("sky").addEventListener("click", function (event) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.left = (event.clientX - 5) + "px";
  star.style.top = (event.clientY - 5) + "px";
  document.getElementById("sky").appendChild(star);

  starCount = starCount + 1;
  document.getElementById("count").innerHTML = starCount;
});

// 3. BUTTON: clear all the stars
document.getElementById("clearBtn").addEventListener("click", function () {
  let stars = document.getElementsByClassName("star");
  while (stars.length > 0) {
    stars[0].remove();
  }

  starCount = 0;
  document.getElementById("count").innerHTML = starCount;
});
