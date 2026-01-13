 const images = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg"
  ];

  const hero = document.getElementById("hero");
  const randomIndex = Math.floor(Math.random() * images.length);

  hero.style.backgroundImage = `url(${images[randomIndex]})`;
