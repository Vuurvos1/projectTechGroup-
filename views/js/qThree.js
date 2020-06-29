// questionFour extra's
const changeText = document.querySelector('#text');
let i = 0;
let j = 0;
// eslint-disable-next-line max-len
const options = [' romantic.', ' boring.', ' good food, bad date.', ' cute!', ' super fun!'];

// Om de tekst te laten schrijven, 1 voor 1. Hier doet allen romatic het.
function typing() {
  const text = 'the date was' + options[j];
  console.log(text.length);
  if (i<text.length) {
    changeText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

// Om door de array heen te gaan, en later te stoppen bij nr 5 in de array
// en weer terug naar nr 0 in de array
changeText.addEventListener('click', () => {
  changeText.innerHTML = '';
  i=0;
  j++;
  if (j == 5) {
    j = 0;
  }
  typing();
});

typing();
