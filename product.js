const dropdown11 = "#side-menu";
const dropdown12= document.querySelector(dropdown11);
const menu7 = document.querySelectorAll("#Menu-icon");

menu7.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown12.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown12.classList.add("show");
      document.getElementById("main-product").style.marginLeft="260px"
    }
  }, 250);
});
})
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(dropdown11);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && dropdown12.classList.contains("show")) {
     dropdown12.classList.remove("show");
     document.getElementById("main-product").style.marginLeft="0px"
    }
  });
  var counter = 1;
    setInterval(function(){ 
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 3){
        counter = 1;
      }
    }, 5000);