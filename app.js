const btn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

btn.addEventListener("click", function () {
  modalOverlay.classList.add("show-overlay");
});
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("show-overlay");
});
