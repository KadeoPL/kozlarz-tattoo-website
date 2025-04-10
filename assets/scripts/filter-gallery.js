let activeCategory = "all";
const categoryAllButton = document.getElementById("image-all");
const categoryTattooButton = document.getElementById("image-tattoo");
const categoryArtworkButton = document.getElementById("image-artwork");
let galleryImages;

const categoryButtons = [
  categoryAllButton,
  categoryTattooButton,
  categoryArtworkButton,
];

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.getAttribute("value");
    galleryImages = document.querySelectorAll("#gallery img");
    filterImages(activeCategory);
  });
});

function filterImages(category) {
  galleryImages.forEach((image) => {
    image.classList.remove("hidden");
    image.classList.remove("block");

    if (category === "all") {
      image.classList.add("block");
    } else if (image.dataset.category === category) {
      image.classList.add("block");
    } else {
      image.classList.add("hidden");
    }
  });
}
