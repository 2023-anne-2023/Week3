const thumbnails = document.querySelectorAll(".thumbnails img");
const displayImage = document.getElementById("displayImage");

thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {

    displayImage.src = thumb.src;
    displayImage.alt = thumb.alt;
  });
});