
// DOM Elements
const box = document.getElementById("box");
const result = document.getElementById("result");

// Timing variables
let appearTime;
let timeoutID;

/**
 * Returns a random delay time between 1 to 5 seconds
 */
function getRandomDelay() {
  return Math.floor(Math.random() * 4000) + 1000;
}

/**
 * Shows the box after a random delay
 */
function showBox() {
  const delay = getRandomDelay();

  timeoutID = setTimeout(() => {
    box.style.display = "block";
    appearTime = Date.now();
  }, delay);
}

/**
 * Handles the box click and calculates reaction time
 */
box.addEventListener("click", () => {
  const clickTime = Date.now();
  const reactionTime = (clickTime - appearTime) / 1000; // convert ms to s

  result.textContent = `Your reaction time: ${reactionTime.toFixed(3)} seconds`;

  // Change box color and hide it again
  box.style.backgroundColor = "green";
  setTimeout(() => {
    box.style.display = "none";
    box.style.backgroundColor = "red";
    showBox(); // Restart the game
  }, 500);
});

/**
 * Initialize the game on page load
 */
window.onload = () => {
  showBox();
};
