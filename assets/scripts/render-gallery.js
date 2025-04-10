const images = [
  {
    src: "./assets/tattoo-images/image_1.jpg",
    category: "artwork",
  },
  {
    src: "./assets/tattoo-images/image_2.jpg",
    category: "artwork",
  },
  {
    src: "./assets/tattoo-images/image_3.jpg",
    category: "tattoo",
  },
  {
    src: "./assets/tattoo-images/image_4.jpg",
    category: "tattoo",
  },
  {
    src: "./assets/tattoo-images/image_5.jpg",
    category: "artwork",
  },
  {
    src: "./assets/tattoo-images/image_6.jpg",
    category: "tattoo",
  },
];

const galleryBox = document.getElementById("gallery");

function renderGallery() {
  images.forEach((element) => {
    const newImage = document.createElement("img");
    newImage.src = element.src;
    newImage.dataset.category = element.category;
    newImage.classList.add("gallery-image");

    galleryBox.appendChild(newImage);
  });
}

document.addEventListener("DOMContentLoaded", renderGallery);
