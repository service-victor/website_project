let cart = []


let cart_dropdown = document.getElementById("cart_dropdown")

function cart_icon() {
    if (cart_dropdown.style.display === "none") {
      cart_dropdown.style.display = "block";
    } else {
      cart_dropdown.style.display = "none";
    }
    if (cart.length === 0) {
      document.getElementById("empty_msg").innerHTML = "Din varukorg är tom."
    }
  }



  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}