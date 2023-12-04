document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const menuItems = document.querySelectorAll('.navbar .menu li a');
  
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("sticky", window.scrollY > 20);
      scrollUpBtn.classList.toggle("show", window.scrollY > 500);
    });
  
    scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.style.scrollBehavior = "auto";
    });
  
    const typingOptions = {
      strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };
    new Typed(".typing", typingOptions);
    new Typed(".typing-2", typingOptions);
  
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        document.documentElement.style.scrollBehavior = "smooth";
      });
    });
  
    menuBtn.addEventListener("click", () => {
      document.querySelector('.navbar .menu').classList.toggle("active");
      menuBtn.querySelector('i').classList.toggle("active");
    });
  });
  