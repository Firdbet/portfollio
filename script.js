
//===========aos============//
  AOS.init(
    {
      offset: 400,
      duration: 400
    }
  );


// header toggler

let menuBtn = document.getElementById("menuBar");

menuBtn.addEventListener("click", function(e) {
 document.querySelector("body").classList.toggle("mobile-nav-active");
 this.classList.toggle("fa-xmark");
})

// typing effect

let typed = new Typed('.auto-input', {
    strings: ["Full-Stack Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})