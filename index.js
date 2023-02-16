const recipesImagesContainer = document.querySelector(".recipes__content-images");

const recipesImageTemplate = ({ img, title, desc }, index) => {
  return `
  <div class="recipes__content-images_img swiper-slide f-center">
    <img class="recipes__content-images_img-bg" src="${img}${index+1}.png" alt="${title}">
    <div class="recipes__content-images_img-desc f-center">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
    <div class="recipes__content-images_img-glass"></div>
  </div>
  `;
}

const images = [
  {
    img: "./assets/img",
    title: "Asian Cuisines",
    desc: "Visit every country's best recipes all around Asia. Be blown away by the amount of diversity of food that this continent has to offer.",
  },
  {
    img: "./assets/img",
    title: "European Cuisines",
    desc: "Visit every country's best recipes all around Europe. Explore and experience the different unique tastes that this continent has to offer.",
  },
  {
    img: "./assets/img",
    title: "American Cuisines",
    desc: "Visit every country's best recipes all around America. From North to South, dive into the vast choices of food that these continents has to offer.",
  },
  {
    img: "./assets/img",
    title: "African Cuisines",
    desc: "Visit every country's best recipes all around Africa. Experience the tastiest food that these continents has to offer.",
  },
  {
    img: "./assets/img",
    title: "Australian Cuisines",
    desc: "Visit every country's best recipes all around Australia. Enjoy the various dishes that this continent has to offer.",
  }
];

recipesImagesContainer.innerHTML += images.map(recipesImageTemplate).join("");

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 3,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});