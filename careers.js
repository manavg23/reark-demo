const dropdown13 = "#side-menu";
const dropdown14= document.querySelector(dropdown13);
const menu8 = document.querySelectorAll("#Menu-icon");

menu8.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown14.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown14.classList.add("show");
      document.getElementById("main-careers").style.marginLeft="260px"
    }
  }, 250);
});
})
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(dropdown13);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && dropdown14.classList.contains("show")) {
     dropdown14.classList.remove("show");
     document.getElementById("main-careers").style.marginLeft="0px"
    }
  });