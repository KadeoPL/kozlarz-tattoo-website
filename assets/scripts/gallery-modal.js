// function initGalleryModal() {
//   const galleryImages = document.querySelectorAll("#gallery img");
//   const imagesArray = Array.from(galleryImages);
//   const overlay = document.getElementById("overlay");
//   const imageModal = document.getElementById("imageModal");
//   const prevArrow = document.getElementById("prevArrow");
//   const nextArrow = document.getElementById("nextArrow");
//   let activeImageIndex;

//   imagesArray.forEach((image, index) => {
//     image.addEventListener("click", function () {
//       onClickImage(image.src);
//       activeImageIndex = index;
//     });
//   });

//   overlay.addEventListener("click", function (e) {
//     if (e.target === this) {
//       toggleOverlay(overlay);
//     }
//   });

//   overlay.addEventListener("keydown", function (e) {
//     if (e.key === "Escape" || e.code === "Escape") {
//       toggleOverlay(overlay);
//     }
//   });

//   prevArrow.addEventListener("click", function () {
//     if (activeImageIndex > 0) {
//       activeImageIndex--;
//       imageModal.src = imagesArray[activeImageIndex].src;
//     } else if (activeImageIndex === 0) {
//       activeImageIndex = 5;
//       imageModal.src = imagesArray[activeImageIndex].src;
//     }
//   });

//   nextArrow.addEventListener("click", function () {
//     if (activeImageIndex < imagesArray.length - 1) {
//       activeImageIndex++;
//       imageModal.src = imagesArray[activeImageIndex].src;
//     } else if (activeImageIndex === imagesArray.length - 1) {
//       activeImageIndex = 0;
//       imageModal.src = imagesArray[activeImageIndex].src;
//     }
//   });

//   function onClickImage(element) {
//     imageModal.src = element;
//     toggleOverlay(overlay);
//     overlay.focus();
//   }

//   function toggleOverlay(element) {
//     if (element.classList.contains("hidden")) {
//       element.classList.remove("hidden");
//     } else {
//       element.classList.add("hidden");
//     }
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(function () {
//     initGalleryModal();
//   }, 500);
// });

function initGalleryModal() {
  const galleryImages = document.querySelectorAll("#gallery img");
  const imagesArray = Array.from(galleryImages);
  const overlay = document.getElementById("overlay");
  const imageModal = document.getElementById("imageModal");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");
  let activeImageIndex;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  imagesArray.forEach((image, index) => {
    image.addEventListener("click", function () {
      onClickImage(image.src);
      activeImageIndex = index;
    });
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === this) {
      toggleOverlay(overlay);
    }
  });

  overlay.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.code === "Escape") {
      toggleOverlay(overlay);
    }
  });

  if (!isMobile) {
    prevArrow.addEventListener("click", showPrevImage);
    nextArrow.addEventListener("click", showNextImage);

    overlay.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft" || e.code === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "ArrowRight" || e.code === "ArrowRight") {
        showNextImage();
      }
    });
  } else {
    if (prevArrow) prevArrow.style.display = "none";
    if (nextArrow) nextArrow.style.display = "none";

    let touchStartX = 0;
    let touchEndX = 0;

    overlay.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
    });

    overlay.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeThreshold = 50;

      if (touchEndX < touchStartX - swipeThreshold) {
        showNextImage();
      }

      if (touchEndX > touchStartX + swipeThreshold) {
        showPrevImage();
      }
    }
  }

  function showPrevImage() {
    if (activeImageIndex > 0) {
      activeImageIndex--;
    } else {
      activeImageIndex = imagesArray.length - 1;
    }
    imageModal.src = imagesArray[activeImageIndex].src;
  }

  function showNextImage() {
    if (activeImageIndex < imagesArray.length - 1) {
      activeImageIndex++;
    } else {
      activeImageIndex = 0;
    }
    imageModal.src = imagesArray[activeImageIndex].src;
  }

  function onClickImage(element) {
    imageModal.src = element;
    toggleOverlay(overlay);
    overlay.focus();
  }

  function toggleOverlay(element) {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    initGalleryModal();
  }, 500);
});
