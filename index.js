const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });
  
  
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    // const rightNumbers = dodger.style.right.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    // const right = parseInt(rightNumbers, 10);
  
    if (left > 0 && left <= 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }