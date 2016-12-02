//changes hamster image when clicked

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ham.jpg') {
      myImage.setAttribute ('src','images/ham2.jpg');
    } else {
      myImage.setAttribute ('src','images/ham.jpg');
    }
}


//personal user welcome message

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'We must eliminate them before they eliminate us, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'We must eliminate them before they eliminate us, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
