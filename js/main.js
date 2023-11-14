$(function () {
  $('.header-slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: 'header-dots',
    autoplay: 3000
  });
  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });
});

var element = document.getElementById('specialised');
var element = document.getElementById('gallery');
var element = document.getElementById('about');
var element = document.getElementById('message');
var element = document.getElementById('contact');

const form = document.getElementById("contact-form");
const button = document.querySelector("button[type='submit']");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get data form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const text = document.getElementById('text').value;

  // Send to Telegram Bot API
  const url = `https://api.telegram.org/bot${`6218905561:AAGoj82-1gcNx2WFLIY3Wp7C12fNOlwuOzk`}/sendMessage`;
  const data = new FormData();
  data.append('chat_id', '790742948');
  data.append('text', `Ім'я: ${name}\nЕлектронна пошта: ${email}\nПовідомлення: ${text}`);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.send(data);

  // Clear form
  form.reset();
  alert("Повідомлення надіслано!");
  console.log(name);
  console.log(email);
  console.log(text);
});

function initMap() {
  var location = { lat: 49.805990, lng: 24.062846 };
  var map = new google.maps.Map(document.getElementById('contact-map'), {
    zoom: 12,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

// Scroll
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', function () {
  var navMenu = document.querySelector('.header__top');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navMenu.classList.add('scrolled');
  } else {
    navMenu.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var scrollIndicator = document.querySelector(".scroll-indicator");

  function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      scrollIndicator.classList.add("active");
    } else {
      scrollIndicator.classList.remove("active");
    }
  }

  window.addEventListener("scroll", handleScroll);
});