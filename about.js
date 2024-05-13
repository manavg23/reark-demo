const dropdown5 = "#side-menu";
const dropdown6 = document.querySelector(dropdown5);
const menu2= document.querySelectorAll("#Menu-icon");

menu2.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown6.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown6.classList.add("show");
      document.getElementById("main-about").style.marginLeft="260px"
    }
  }, 250);
});
})
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(dropdown5);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && dropdown6.classList.contains("show")) {
     dropdown6.classList.remove("show");
     document.getElementById("main-about").style.marginLeft="0px"
    }
  });

  if(window.innerWidth<768){
    document.getElementById("about-us-main-text").innerHTML="We’re Powering the Biggest 3D Transformation for Jewelry Retailers & Brands."
  }