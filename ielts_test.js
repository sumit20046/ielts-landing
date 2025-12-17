

document.addEventListener("DOMContentLoaded",(event) =>{
 gsap.registerPlugin(SplitText)

 let ss = SplitText.create(".ielts-text",{
    type: "chars,words"
 })
  
gsap.from(ss.chars,{
    duration: 0.5,
    opacity: 0,
    y: -50,
    stagger: 0.1,
    ease: "ease2"
})



 gsap.registerPlugin(ScrollTrigger);
  gsap.to(".text-fill", {
    clipPath: "inset(0 0% 0 0)",
    ease: "none",
    scrollTrigger: {
      trigger: ".section",
      start: "top 70%",
      end: "bottom 40%",
      scrub: true
    }
  });






 gsap.from(".slide-left li", {
  x: -120,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".band-section",
    start: "top 80%",
    end: "bottom top",
    scrub: true
  }
});

// RIGHT
gsap.from(".slide-right li", {
  x: 120,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".band-section",
    start: "top 80%",
    end: "bottom top",
    scrub: true
  }
});





 const split = SplitText.create('.why-split', { types: 'words' });

  gsap.from(split.words, {
    scrollTrigger: {
      trigger: '#ielts-impact',
      start: 'top 70%',
    },
    y: 32,
    opacity: 0,
    stagger: 0.045,
    duration: 0.8,
    ease: 'power3.out',
  });

  gsap.to('.why-arc.why-fill', {
    scrollTrigger: {
      trigger: '#ielts-impact',
      start: 'top 20%',
    },
    rotate: -15,
    duration: 1.6,
    ease: 'power3',
  });

  gsap.fromTo(
    '.why-band-number',
    { innerText: 5 },
    {
      innerText: 8.5,
      scrollTrigger: {
        trigger: '#ielts-impact',
        start: 'top 70%',
      },
      duration: 1.6,
      ease: 'power1.out',
      snap: { innerText: 0.1 },
    }
  );





  const section = document.getElementById('steps-section');
const steps = document.querySelectorAll('.steps-card');
const lines = document.querySelectorAll('.steps-line-fill');
let index = 0;
let intervalStarted = false;

/* SCROLL TRIGGER */
const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting && !intervalStarted){
        section.classList.add('steps-visible');
        startAnimation();
        intervalStarted = true;
    }
},{ threshold:0.4 });
observer.observe(section);

/* STEP ANIMATION */
function startAnimation(){
    setInterval(() => {
        steps.forEach(s => s.classList.remove('steps-active'));
        lines.forEach(l => l.style.width = '0%');
        steps[index].classList.add('steps-active');
        if(index > 0){
            lines[index - 1].style.width = '100%';
        }
        index = (index + 1) % steps.length;
    }, 1600);
}





// Get feature elements
const carouselFeatureTitle = document.querySelector(".carousel-feature-title");
const carouselFeatureDescription = document.querySelector(".carousel-feature-description");

// Set initial content (the default text)
carouselFeatureTitle.textContent = "Score improvement after mock tests";
carouselFeatureDescription.textContent = "Real band progression based on learner performance after practising on our IELTS mock test platform.";

// Initialize Swiper with Time Magazine effects
var carouselSwiper = new Swiper(".carousel-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".carousel-button-next",
    prevEl: ".carousel-button-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  on: {
    init: function () {
      // Set initial text from active slide
      let activeSlide = document.querySelector(".swiper-slide-active");
      if (activeSlide) {
        const title = activeSlide.getAttribute("data-title");
        const description = activeSlide.getAttribute("data-description");
        
        if (title) carouselFeatureTitle.textContent = title;
        if (description) carouselFeatureDescription.textContent = description;
        
        carouselFeatureTitle.classList.add("carousel-animate-title");
        carouselFeatureDescription.classList.add("carousel-animate-description");
      }
    },
    slideChangeTransitionStart: function () {
      // Animate text out
      carouselFeatureTitle.classList.remove("carousel-animate-title");
      carouselFeatureDescription.classList.remove("carousel-animate-description");
      
      carouselFeatureTitle.classList.add("carousel-animate-away");
      carouselFeatureDescription.classList.add("carousel-animate-away");
      
      setTimeout(() => {
        carouselFeatureTitle.classList.remove("carousel-animate-away");
        carouselFeatureDescription.classList.remove("carousel-animate-away");
      }, 300);
    },
    slideChangeTransitionEnd: function () {
      // Update text from new active slide
      let activeSlide = document.querySelector(".swiper-slide-active");
      if (activeSlide) {
        const title = activeSlide.getAttribute("data-title");
        const description = activeSlide.getAttribute("data-description");
        
        if (title) carouselFeatureTitle.textContent = title;
        if (description) carouselFeatureDescription.textContent = description;
        
        // Animate new text in
        carouselFeatureTitle.classList.add("carousel-animate-title");
        carouselFeatureDescription.classList.add("carousel-animate-description");
      }
    }
  }
});

gsap.from(".last-part-reveal",{
  scrollTrigger:{
    trigger:".last-part-section",
    start:"top 75%"
  },
  y:24,
  opacity:0,
  duration:0.9,
  stagger:0.18,
  ease:"power3.out"
});


const firstWord = document.querySelector('.hero-first-word');
            
            if (firstWord) {
                // Create background element
                const highlightBg = document.createElement('div');
                highlightBg.classList.add('highlight-bg');
                firstWord.insertBefore(highlightBg, firstWord.firstChild);
                
                // Animate the background
                gsap.to(highlightBg, {
                    scaleX: 1,
                    duration: 0.8,
                    ease: "power1.out",
                    delay: 0.3
                });
                
                // Optional: Fade in the text
                gsap.from('.highlight-text', {
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.5,
                    ease: "power2.out"
                });
            }
});

window.addEventListener("load", () => {
  const lottie = document.getElementById("bgLottie");
  const container = lottie.parentElement;

  // Observe size changes of panel
  const resizeObserver = new ResizeObserver(() => {
    lottie.style.width = "100%";
    lottie.style.height = "100%";

    // Force SVG recalculation
    lottie.dispatchEvent(new Event("resize"));
  });

  resizeObserver.observe(container);
});