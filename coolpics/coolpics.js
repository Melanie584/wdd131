const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const modal = document.querySelector("#imgModal");
const modalImg = document.querySelector("#modalImg");
const closeModalBtn = document.querySelector("#closeModal");

document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.showModal();
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});


