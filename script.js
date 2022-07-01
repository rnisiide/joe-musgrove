function hideShow(val) {
    if (val == "Y") {
      document.getElementById("otherconfigarea").style.display = "block";
    } else {  
      document.getElementById("otherconfigarea").style.display = "none";
    }
  }


function showCabin(val) {
    if (val == "Y") {
        document.getElementById("othercabinarea").style.display = "block";
    } else {  
        document.getElementById("othercabinarea").style.display = "none";
    }
}


function aquisitionShow(val) {
    if (val == 7) {
        document.getElementById("aquisitionarea").style.display = "block";
    } else {  
        document.getElementById("aquisitionarea").style.display = "none";
    }
}
  
 
const scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add("visible-header");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("visible-header");
  }
}; 

const sponsor = document.getElementById('sponsor');
const sponsorButton = document.getElementById('sponsor-button')

sponsor.addEventListener('click', () => {
  let code = prompt('Please type code to enter Sponsor Area');
  if (code == 'neillsucks') {alert('Yes, Neill Sucks!! You will be redirected to the sponsor area')}
  else {alert('Wrong code!!!')}
})

sponsorButton.addEventListener('click', () => {
  let code = prompt('Please type code to enter Sponsor Area');
  if (code == 'neillsucks') {alert('Yes, Neill Sucks!! You will be redirected to the sponsor area')}
  else {alert('Wrong code!!!')}
})


