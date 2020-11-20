// NavBar JS

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Contact Us Email Form Validation

function validate(e) {
    //e.preventDefault();
    var input = document.createElement('input');
    input.type='email';
    input.value=document.getElementById('email').value;
      
    if (input.checkValidity()) {
        alert('Thank you for sending a message! Banjo will recite his response to our staff and we will respond to this message as soon as possible.');
    } else {
        alert('Please provide a valid email address - it looks like your email is not formatted properly (emailaddress@host.com)');
    }
      
    return false;
  }


// alert("Welcome to OnlyBanj; where we like 'em big & chonky!");

