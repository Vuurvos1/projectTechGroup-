// eslint-disable-next-line no-unused-vars
const checkbox = document.querySelector('#yesCheer');
const noCheck = document.querySelector('#noNot');

// events zorgen ervoor dat als je klikt op een van de radio buttons
// er een muziekje worden afgespeelt (blij of verdrietig)
checkbox.addEventListener('click', () => {
  const audio = new Audio('../img/cheer.mp3');
  audio.play();
});
noCheck.addEventListener('click', () => {
  const sad = new Audio('../img/sad.mp3');
  sad.play();
});

//Sources:
// Gaming Sound FX. (2016, 10 september). Kids Cheering - Gaming Sound Effect (HD) [Videobestand]. Geraadpleegd van https://www.youtube.com/watch?v=_Z3ra0CxCE0
// l Mr Hybrid l. (2017, 1 maart). SAD - SOUND EFFECT [Videobestand]. Geraadpleegd van https://www.youtube.com/watch?v=mN7ai6ql8bQ