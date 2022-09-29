const hamburger = document.getElementById("hamburger");

function myFunction() {
    var x = document.getElementById("myLinks");
    myLinks.classList.toggle("open")
    hamburger.classList.toggle("open");

    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById('hamburger').src = ('icon-hamburger.svg')

    } else {
      x.style.display = "block";
      document.getElementById('hamburger').src = ('icon-close.svg')
    }
  }
