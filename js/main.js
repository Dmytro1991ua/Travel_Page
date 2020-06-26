// WOW JS

new WOW({ mobile: false }).init();

//preloader
function runPreloader() {
   const preloader = document.querySelector(".preloader-container");
   preloader.classList.add("opacity-0");
   setTimeout(function () {
      preloader.style.display = "none";
   }, 1000);
}
window.addEventListener("load", runPreloader);


// modal window

//select all elements
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector(".modal__overlay");

// functions

function openModal(modal) {
   if (modal === null) return;
   modal.classList.add("active");
   overlay.classList.add("active");
   document.querySelector("body").classList.add("lock");
}

function closeModal(modal) {
   if (modal === null) return;
   modal.classList.remove("active");
   overlay.classList.remove("active");
   document.querySelector("body").classList.remove("lock");
}

//iterating through each btn to open and close a modal window
openModalButtons.forEach(btn => {
   btn.addEventListener("click", () => {
      const modal = document.querySelector(btn.dataset.modalTarget);
      openModal(modal);
   });
});

closeModalButtons.forEach(btn => {
   btn.addEventListener("click", () => {
      const modal = btn.closest(".modal__body");
      closeModal(modal);
   });

});

//event listeners
overlay.addEventListener("click", () => {
   const modals = document.querySelectorAll(".modal__body.active");
   modals.forEach(modal => {
      closeModal(modal);
   });
});

// Scroll to top Btn

function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
}

window.addEventListener("scroll", () => {
   const scroll = document.querySelector(".scrollToTop");
   scroll.classList.toggle("active", window.scrollY > 400);

});


//call functions
runPreloader();
fixedHader();