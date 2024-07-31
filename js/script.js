const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const dark_img = document.querySelector(".dark-img")
const light_img = document.querySelector(".light-img")
const body = document.body;

const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobile_navigation = document.querySelector(".mobile-navigation");
const bg_image_dark = document.querySelector(".bg-image-dark")
const bg_image_light = document.querySelector(".bg-image-light")

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        dark_img.style.display = 'block';
        light_img.style.display = 'none'; 
        bg_image_light.style.display = 'none'; 
        bg_image_dark.style.display = 'block'; 
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        light_img.style.display = 'block'; 
        dark_img.style.display = 'none';
        bg_image_light.style.display = 'block'; 
        bg_image_dark.style.display = 'none'; 
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('header');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


// Set the initial theme based on user preference or default to light theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
} else {
    body.classList.add('light-theme');
}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
} else {
    body.classList.add('light-theme');
}


    hamburgerButton.addEventListener('click', () => {
        mobile_navigation.classList.toggle('active');
    
        if (mobile_navigation.classList.contains('active')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-xmark');
        } else {
            hamburgerIcon.classList.remove('fa-xmark');
            hamburgerIcon.classList.add('fa-bars');
        }
    });


    const boxes = document.querySelectorAll(".box");
     const checkBoxes = () => {
     const triggerBottom = (window.innerHeight / 5) * 4;
     boxes.forEach((box) => {
         const boxTop = box.getBoundingClientRect().top;         
         if (boxTop < triggerBottom) {
             box.classList.add("show");
         } else {
             box.classList.remove("show");
         }
     });
 };
 window.addEventListener("scroll",checkBoxes);
 checkBoxes();