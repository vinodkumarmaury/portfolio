// // Get all the navbar links
// const navLinks = document.querySelectorAll('.nav');

// // Add click event listener to each navbar link
// navLinks.forEach(function(link) {
//     link.addEventListener('click', smoothScroll);
//   });
  
// // Smooth scroll function
// function smoothScroll(event) {
//   event.preventDefault();

//   const targetId = this.getAttribute('href'); // Get the target section id
//   const targetSection = document.querySelector(targetId); // Get the target section element

//   // Scroll to the target section with smooth behavior
//   targetSection.scrollIntoView({
//     behavior: 'smooth'
//   });
// }

/****METHOD2 */
// Get all the navbar links
// const navLinks = document.querySelectorAll('.nav');

// // Add click event listener to each navbar link
// navLinks.forEach(function(link) {
//   link.addEventListener('click', smoothScroll);
// });

// function smoothScroll(event) {
//   event.preventDefault();

//   const targetId = this.getAttribute('href');
//   const targetSection = document.querySelector(targetId);
//   const targetOffset = targetSection.offsetTop;
   
//   let scrollInterval = setInterval(function() {
//     const currentPosition = window.pageYOffset;
//     const distance = targetOffset - currentPosition;
//     const scrollStep =  Math.sign(distance)*10;
         
//     window.scrollBy(0,scrollStep);

//     if (
//       (scrollStep > 0 && window.pageYOffset >= targetOffset) ||
//       (scrollStep < 0 && window.pageYOffset <= targetOffset)
//     ) {
//       clearInterval(scrollInterval);
//     }
//   }, 10);
// }

/******METHOD 3 */

// const navLinks = document.querySelectorAll('.nav');

// // Add click event listener to each navbar link
// navLinks.forEach(function(link) {
//   link.addEventListener('click', smoothScroll);
// });

// function smoothScroll(event) {
//   event.preventDefault();

//   const targetId = this.getAttribute('href');
//   const targetSection = document.querySelector(targetId);
//   const targetOffset = targetSection.getBoundingClientRect().top;

//   let scrollInterval = setInterval(function() {
//     const currentPosition = window.pageYOffset;
//     const distance = targetOffset - currentPosition;
//     const scrollStep = Math.sign(distance) * 50; // Set the scroll step distance (in pixels)

//     window.scrollBy(0, scrollStep);

//     if (
//       (scrollStep > 0 && window.pageYOffset >= targetOffset) ||
//       (scrollStep < 0 && window.pageYOffset <= targetOffset)
//     ) {
//       clearInterval(scrollInterval);
//     }
//   }, 10);
// }

/******Method 4 */


const navLinks = document.querySelectorAll('.nav');

// Add click event listener to each navbar link
navLinks.forEach(function(link) {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();

  var targetId = this.getAttribute('href');
  var targetSection = document.querySelector(targetId);
  var interval = setInterval(function(){
    var targetOffset = targetSection.getBoundingClientRect();
if(targetOffset.top<=0){
    clearInterval(interval);
}
window.scrollBy(0,50);
return; 
  },20);
}

// window.addEventListener('scroll', function(event) {
//     // Code to be executed when the window is scrolled
//       event.preventDefault();
//     var skillDisplay = document.getElementsById('skills-display');
//       console.log(skillDisplay.visibilityState);
//   });

var view = document.getElementById("percentage-scroll");
view.innerText = 'View'
window.addEventListener("scroll", function () {
  var scrollPercentage = Math.round(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );
  
  view.innerText = 'View'+' '+ scrollPercentage + "%";
});
