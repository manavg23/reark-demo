


 function dropdowncommunity(){
  document.getElementById('community-dropdown').style.display='block';
}

    function dropdown(){
        document.getElementById('company-dropdown').style.display='block';
    }
   

    var elem = document.getElementById("hero-image");
    var normal=document.getElementById("ar-buttons")
    var fullscreen=document.getElementById("ar-button-fullscreen")

    /* Function to open fullscreen mode */
    function openFullscreen() {
    
        normal.classList.add("hide")
        fullscreen.classList.add("show")
        document.getElementById("ringiframeindex").style.transform="translateY(100px)"
        // document.getElementById("full-screen").style.display="block";
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
    function closefullscreen(){
normal.classList.remove("hide")
fullscreen.classList.remove("show")
document.getElementById("ringiframeindex").style.transform="translateY(0px)" 
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
    
        const popup1 = "#ar-scanner";
        const popup2 = document.querySelector(popup1);
        const trigger = document.querySelectorAll(".ar-trigger");
      
        trigger.forEach(el=>{el.addEventListener("click", () => {
          setTimeout(() => {
            console.log("1")
            if (!popup2.classList.contains("show")) {
              // Add class `show` to filterList element
              popup2.classList.add("show");
            }
          }, 250);
        });
      })
        document.addEventListener("click", (e) => {
            // Check if the filter list parent element exist
            const isClosest = e.target.closest(popup1);
          
            // If `isClosest` equals falsy & popup has the class `show`
            // then hide the popup
            if (!isClosest && popup2.classList.contains("show")) {
              popup2.classList.remove("show");
            }
          });
         
         document.getElementById("close-button-index").addEventListener("click",(e)=>{
          popup2.classList.remove("show");
         })
         function loadDeferredIframe() {
          var iframe = document.getElementById("ringiframeindex");
          iframe.src = "https://jewelive.io/rendering/"
      };/*from  ww w . j a v  a 2  s  .c  o m*/
      window.onload = loadDeferredIframe;
  
        
        
         document.getElementById("ringiframeindex").addEventListener("load",()=>
         {
          document.getElementById("loader").style.display="none"
         })
      



    // $("#ringiframeindex").on("load",(function() {
    //   $('.loader').hide();
    // }));
    var docWidth = document.documentElement.offsetWidth;
    [].forEach.call(
      document.querySelectorAll('*'),
      function(el) {
        if (el.offsetWidth > docWidth) {
          console.log(el);
        }
      }
    );
    var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

function sidemenu() {
  var x = document.getElementById("side-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function dropdownmobile() {
  var x = document.getElementById("dropdown-mobile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function mobilecommunitydropdown(){
  var x = document.getElementById("dropdown-mobile-community");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("company-dropdown-mobile").style.transform="translateY(100px)"
  } else {
    x.style.display = "none";
    document.getElementById("company-dropdown-mobile").style.transform="translateY(0px)"
  }
}

const dropdown2 = "#side-menu";
const dropdown1 = document.querySelector(dropdown2);
const menu = document.querySelectorAll("#Menu-icon");

menu.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown1.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown1.classList.add("show");
      document.getElementById("main").style.marginLeft="260px"
    }
  }, 250);
});
})
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(dropdown2);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && dropdown1.classList.contains("show")) {
     dropdown1.classList.remove("show");
     document.getElementById("main").style.marginLeft="0px"
    }
  });