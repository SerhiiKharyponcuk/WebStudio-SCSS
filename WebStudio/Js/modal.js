document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector("[data-modal-open]");
  const modal = document.querySelector("[data-modal]");
  const closeModalBtn = document.querySelector("[data-modal-close]");

  function toggleModal() {
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  if (openModalBtn && closeModalBtn) {
    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);
  }
});
