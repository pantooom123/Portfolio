// const openBtn = document.querySelector(".open");
// const modal = document.querySelector(".modal");
// const closeBtn = document.querySelector(".close");

// openBtn.addEventListener("click", () => {
//   modal.style.display = "flex";
// });

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// modal.addEventListener("click", (event) => {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// });

///////////////////////////////////////////

document.querySelectorAll(".box").forEach((box, index) => {
  box.addEventListener("click", () => {
    const modal = document.querySelector(`#modal${index + 1}`);
    modal.style.display = "flex";
  });
});

document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", () => {
    const modalId = box.dataset.modal;
    const modal = document.querySelector(`#${modalId}`);
    modal.style.display = "flex";
  });
});

document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".modal");
    modal.style.display = "none";
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
