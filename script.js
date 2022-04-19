//================================================ Animation Navbar =====================================

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

//================================================ Animation Lettre =====================================

const target = document.getElementById("target");
let array = ["Bruwaert", "Innovant", "Simplicité", "Originalité"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => { 
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.classList.add("letter");
  letter.style.opacity = '0';
  letter.style.animation = "anim 7s ease forwards";
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 3000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
      
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
      
    } else {
      letterIndex = 0;
      wordIndex++;
      setTimeout(() => {
        loop();
      }, 3000);
    }
  }, 80);
}
loop();

//================================================ Carrousel Swiper =====================================

    var swiper = new Swiper(".mySwiper", {
      effect: "flip",
    grabCursor: false,
    pagination: {
      el: ".swiper-pagination",
        },
    navigation: {
      nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
        },
      });