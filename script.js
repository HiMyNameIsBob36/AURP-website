 const images = [
    "asseta/bg/01.png",
    "images/bg/02.png",
    "images/bg/03.png"
    "images/bg/04.png"
    "images/bg/05.png"
  ];

  const hero = document.getElementById("hero");
  const randomIndex = Math.floor(Math.random() * images.length);

  hero.style.backgroundImage = `url(${images[randomIndex]})`;
