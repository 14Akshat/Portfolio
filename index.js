const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// function viewResume() {
//   window.open('portfolio images\Akshat_Resume.pdf', '_blank');
// }

document.addEventListener("DOMContentLoaded", () => {
    const skillFills = document.querySelectorAll(".skill-fill");
    const skillSection = document.querySelector("#skills");
  
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.2, // Trigger when 20% of the section is visible
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillFills.forEach((fill) => {
            const percentage = fill.getAttribute("data-percentage");
            fill.style.width = `${percentage}%`;
            
          });
          observer.unobserve(skillSection); // Stop observing once the animation is triggered
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(skillSection);
  });
  
  