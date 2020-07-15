var mapButton = document.querySelector(".map-button");
var map = document.querySelector(".modal-map");
var mapClose = map.querySelector(".modal-close");

mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
});
