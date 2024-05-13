
    const popupQuerySelector = "#gallery-popup";
    const popupEl = document.querySelector(popupQuerySelector);
    const popupBttn = document.querySelectorAll(".gallery-container");
  if(window.innerWidth>500){
    popupBttn.forEach(el=>{el.addEventListener("click", () => {
      setTimeout(() => {
        if (!popupEl.classList.contains("show")) {
          // Add class `show` to filterList element
          popupEl.classList.add("show");
        }
      }, 250);
    });
  })
    document.addEventListener("click", (e) => {
        // Check if the filter list parent element exist
        const isClosest = e.target.closest(popupQuerySelector);
      
        // If `isClosest` equals falsy & popup has the class `show`
        // then hide the popup
        if (!isClosest && popupEl.classList.contains("show")) {
          popupEl.classList.remove("show");
        }
      });
      document.getElementById("close-button").addEventListener("click",(e)=>{
        popupEl.classList.remove("show");
      }
      )}

      const dropdown9 = "#side-menu";
const dropdown10= document.querySelector(dropdown9);
const menu6 = document.querySelectorAll("#Menu-icon");

menu6.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown10.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown10.classList.add("show");
      document.getElementById("main-gallery").style.marginLeft="260px"
    }
  }, 250);
});
})
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(dropdown9);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && dropdown10.classList.contains("show")) {
     dropdown10.classList.remove("show");
     document.getElementById("main-gallery").style.marginLeft="0px"
    }
  });
var fullscreengallery=document.getElementById("gallery-fullscreen-div")
var closeicon=document.getElementById("close-fullsecreen-icon")

function galleryfullscreen(){
  
    fullscreengallery.style.display="block"
    // closeicon.scroll.display="block"
    
    // document.getElementById("full-screen").style.display="block";
  if (fullscreengallery.requestFullscreen) {
    fullscreengallery.requestFullscreen();
  } else if (fullscreengallery.webkitRequestFullscreen) { /* Safari */
    fullscreengallery.webkitRequestFullscreen();
  } else if (fullscreengallery.msRequestFullscreen) { /* IE11 */
    fullscreengallery.msRequestFullscreen();
  }


}
function closegalleryfullscreen(){
 
  fullscreengallery.style.display="none"
  // closeicon.scroll.display="none"
          if (document.exitFullscreen) {
              document.exitFullscreen();
          }
          else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
      }

if(window.innerWidth<500){
  popupBttn.forEach(el=>{el.addEventListener("click",galleryfullscreen)})

}