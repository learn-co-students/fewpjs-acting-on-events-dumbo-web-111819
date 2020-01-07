

function moveDodgerRight() {
  let dodger = document.querySelector("#dodger")
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10); // convert to num
  // let game = document.querySelector("#game")
  if (left < (400-40)) {
    dodger.style.left = `${left + 1}px`;
  }
}


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});




function moveDodgerLeft() {
  let dodger = document.querySelector("#dodger")
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10); // convert to num
  // let game = document.querySelector("#game")
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
