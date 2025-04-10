const galleryImages = document.querySelectorAll("#gallery img");
const imagesArray = Array.from(galleryImages);
const overlay = document.getElementById("overlay");
const imageModal = document.getElementById("imageModal");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");
let activeImageIndex;

imagesArray.forEach((image, index) => {
  image.addEventListener("click", function () {
    onClickImage(image.src);
    activeImageIndex = index;
  });
});

overlay.addEventListener("click", function (e) {
  if (e.target === this) {
    showOverlay(overlay);
  }
});

prevArrow.addEventListener("click", function () {
  if (activeImageIndex > 0) {
    activeImageIndex--;
    imageModal.src = imagesArray[activeImageIndex].src;
    console.log(activeImageIndex);
  } else if (activeImageIndex === 0) {
    activeImageIndex = 5;
    imageModal.src = imagesArray[activeImageIndex].src;
    console.log(activeImageIndex);
  }
});

nextArrow.addEventListener("click", function () {
  if (activeImageIndex < imagesArray.length - 1) {
    activeImageIndex++;
    imageModal.src = imagesArray[activeImageIndex].src;
    console.log(activeImageIndex);
  } else if (activeImageIndex === imagesArray.length - 1) {
    activeImageIndex = 0;
    imageModal.src = imagesArray[activeImageIndex].src;
    console.log(activeImageIndex);
  }
});

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
