window.addEventListener('scroll', function() {
  var navbar = document.querySelector('#navbar');
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});


