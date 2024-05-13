

var elem=document.getElementById("div-image")
var normal=document.getElementById("demo-image-buttons")
var fullscreen=document.getElementById("demo-image-buttons-fullscreen")
// var toggle1= document.getElementById("switch")
// var toggle2=document.getElementById("switchlabel")

var reset=document.getElementById("reset")

function openFullscreen() {
    console.log("1")
    
    normal.classList.add("hide")
    fullscreen.classList.add("show")
    // toggle2.classList.add("hide")
    reset.classList.add("hide")
    
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
//  
    reset.classList.remove("hide")
   
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
    
    const popupQuerySelector = "#ar-scanner-demo";
    const popupEl = document.querySelector(popupQuerySelector);
    const popupBttn = document.querySelectorAll(".ar-button");
if(window.innerWidth>768){
    popupBttn.forEach(el=>{el.addEventListener("click", () => {
      setTimeout(() => {
        console.log("1")
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
     
     document.getElementById("close-button-demo").addEventListener("click",(e)=>{
      popupEl.classList.remove("show");
     })
    }
  
     var iframe=document.getElementById("ring-iframe")
     var toggleimage=document.getElementById("toggleimage")
     var background=document.getElementById("div-image")
//      toggle1.addEventListener("click",()=>{
//       if(toggle1.checked){
// iframe.classList.add("hide")
// toggleimage.classList.add("show")
// background.style.backgroundColor="white"

//       }else{
//         iframe.classList.remove("hide")
//         toggleimage.classList.remove("show")
//         background.style.backgroundColor="#f9f9f9"
//       }
//      })
   

document.getElementById("view-front").addEventListener("click",()=>
{
toggleimage.src="./images/520/ROSE_RGSOL0093_FRONT.jpg"
})
document.getElementById("view-side").addEventListener("click",()=>
{
toggleimage.src="./images/520/ROSE_RGSOL0093_SIDE.jpg"
})
document.getElementById("view-top").addEventListener("click",()=>
{
toggleimage.src="./images/520/ROSE_RGSOL0093_TOP.jpg"
})
document.getElementById("view-front-1").addEventListener("click",()=>
{
toggleimage.src="./images/520/ROSE_RGSOL0093_FRONT.jpg"
})
document.getElementById("view-top-1").addEventListener("click",()=>
{
toggleimage.src="./images/520/ROSE_RGSOL0093_TOP.jpg"
})


$("#ring-iframe").on("load",(function() {
  $('.loader-demo').hide();
}));
const dropdown3 = "#side-menu";
const dropdown4 = document.querySelector(dropdown3);
const menu1 = document.querySelectorAll("#Menu-icon");

menu1.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown4.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown4.classList.add("show");
      document.getElementById("main-demo").style.marginLeft="260px"
    }
  }, 250);
});
})
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(dropdown3);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && dropdown4.classList.contains("show")) {
     dropdown4.classList.remove("show");
     document.getElementById("main-demo").style.marginLeft="0px"
    }
  });

document.getElementById("white-gold-metal").addEventListener("click", ()=> {
    console.log(33);
    document.getElementById('ring-iframe').contentWindow.changeRingColor('Ringsolialliance', '#888888');
  })
  document.getElementById("yellow-gold-metal").addEventListener("click", ()=> {
    document.getElementById('ring-iframe').contentWindow.changeRingColor('Ringsolialliance', '#b37639')
  })
  document.getElementById("rose-gold-metal").addEventListener("click", ()=> {
    document.getElementById('ring-iframe').contentWindow.changeRingColor('Ringsolialliance', '#b86d54'); 
  })
  document.getElementById("platinum-metal").addEventListener("click", ()=> {
    document.getElementById('ring-iframe').contentWindow.changeRingColor('Ringsolialliance', '#83817c'); 
  })
  var windw = this;

  $.fn.followTo = function(pos) {
    var $this = this,
      $window = $(windw);
  
    $window.scroll(function(e) {
      if ($window.scrollTop() > pos) {
        $this.css({
          position: 'absolute',
          top: pos
        });
      } else {
        $this.css({
          position: 'fixed',
          top: 0
        });
      }
    });
  };
  
  if(window.outerWidth < 756){
    $('#demo-page-div-image').followTo(1020);
  // $('#demo-page-div-heading').followTo(1020);
}
  
  // $(window).on("load",function() {
  //   document.getElementById('ring-iframe').contentWindow.changeRingColor('Ringsolialliance', '#b86d54');

  // })
  window.addEventListener('load', ()=> {
    document.getElementById('ring-iframe').contentWindow.changeRingColor('Ringsolialliance', '#b86d54');
})

window.addEventListener("load",()=>{
  document.getElementById("engrave-textbox").classList.add("hide")
})

document.getElementById("engrave").addEventListener("click",()=>{
  document.getElementById("engrave-textbox").classList.remove("hide")
  document.getElementById("engrave").style.display="none"
})


