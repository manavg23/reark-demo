const dropdown17 = "#side-menu";
const dropdown18 = document.querySelector(dropdown17);
const menu12= document.querySelectorAll("#Menu-icon");

menu12.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown18.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown18.classList.add("show");
      document.getElementById("main-pricing").style.marginLeft="260px"
    }
  }, 250);
});
})
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(dropdown17);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && dropdown18.classList.contains("show")) {
     dropdown18.classList.remove("show");
     document.getElementById("main-pricing").style.marginLeft="0px"
    }
  });