// VARIABLES
const elH = document.querySelectorAll(".papan >.kartu");
const alH = document.querySelectorAll(".col >.card2");
const ilH = document.querySelectorAll(".col >.card3");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
  setEqualHeights(alH);
  setEqualHeights(ilH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(elements) {
  let counter = 0;
  for (let i = 0; i < elements.length; i++) {
    const singleHeight = elements[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.height = `${counter}px`;
  }
}