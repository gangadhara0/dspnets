
  // ======================== FAQ TOGGLE ========================
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const plusMinus = button.querySelector('.faq-toggle');

      if (answer.style.display === "block") {
        answer.style.display = "none";
        plusMinus.textContent = "+";
      } else {
        answer.style.display = "block";
        plusMinus.textContent = "-";
      }
    });
  });

  // ======================== TESTIMONIAL AUTO SCROLL ========================
  let testimonialIndex = 0;

  function scrollTestimonials() {
    const slider = document.querySelector('.testimonial-slider');
    const totalTestimonials = document.querySelectorAll('.testimonial').length;
    testimonialIndex++;

    if (testimonialIndex >= totalTestimonials) {
      testimonialIndex = 0;
    }

    slider.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  }

  // setInterval(scrollTestimonials, 4000);

  // ======================== GALLERY CLONE FOR INFINITE SCROLL ========================
  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".gallery-track");

    if (track) {
      // Clone images to ensure infinite scrolling
      track.innerHTML += track.innerHTML;
    }
  });

  // ======================== IMAGE + TEXT SLIDER WITH BUTTON ========================

  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slidesTrack");
    const nextBtn = document.getElementById("nextSlideBtn");
    const totalSlides = document.querySelectorAll(".slide").length;
    let index = 0;

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % totalSlides;
      slider.style.transform = `translateX(-${index * 25}%)`;
    });
  });


  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('fa-solid');
    hamburgerBtn.classList.toggle('fa-xmark');
    if(hamburgerBtn.innerHTML!='') hamburgerBtn.innerHTML = '';
    else hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });




