// const e = require("express");
const slider = document.querySelector('.slider');
const val = document.querySelector('#dateValue');
const smile = document.querySelector('#smiley');

// Geeft de slider een waarde mee
slider.addEventListener('input', () => {
  val.value = slider.value;
});

// Zorgt ervoor dat bij een value van minder dan 40 verdrietige smiley komt
// Bij meer dan 65 een blije
// en als het er tussen in zit een neutrale smiley.
slider.oninput = function() {
  if (slider.value < 40) {
    val.value = slider.value;
    smile.src='../img/sad.png';
  }
  if (slider.value > 65) {
    val.value = slider.value;
    smile.src='../img/happy.png';
  } if (slider.value > 40 && slider.value < 65) {
    val.value = slider.value;
    smile.src='../img/null.png';
  }
};
