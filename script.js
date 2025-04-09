const galleryImages = document.querySelectorAll("#gallery img");
const imagesArray = Array.from(galleryImages);
const overlay = document.getElementById("overlay");
const imageModal = document.getElementById("imageModal");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

imagesArray.forEach((image, index) => {
  image.addEventListener("click", function () {
    onClickImage(image.src);
  });
});

overlay.addEventListener("click", function (e) {
  if (e.target === this) {
    showOverlay(overlay);
  }
});

prevArrow.addEventListener("click", function () {});

function onClickImage(element) {
  imageModal.src = element;
  showOverlay(overlay);
}

function showOverlay(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}
