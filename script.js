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
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add("visible-header");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("visible-header");
  }
}; 
  