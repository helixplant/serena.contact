const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  
  //let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;

    const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 50;
    sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

var nav = document.getElementById('nav');
window.addEventListener('scroll', function() {
    if (this.window.pageYOffset >= 100) {
        nav.style.display = 'block';
    }
});


function myFunction(secID) {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var btnText = document.querySelector('.')
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "read less";
      moreText.style.display = "inline";
    }
  } 