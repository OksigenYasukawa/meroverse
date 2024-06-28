// VARIABLES
const elH = document.querySelectorAll(".papan >.kartu");
const alH = document.querySelectorAll(".papan >.list");
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

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
  document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3(){
  document.getElementById("popup-3").classList.toggle("active");
}