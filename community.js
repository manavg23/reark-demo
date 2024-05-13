const dropdown13 = "#side-menu";
const dropdown14= document.querySelector(dropdown13);
const menu8 = document.querySelectorAll("#Menu-icon");

menu8.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown14.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown14.classList.add("show");
      document.getElementById("main-community").style.marginLeft="260px"
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
     document.getElementById("main-community").style.marginLeft="0px"
    }
  });


  if(window.innerWidth<768){
    document.getElementById("community-subheading").innerHTML="Get the latest news and industry insights"
  
  document.getElementById("more-button").addEventListener("click",()=>{
    document.getElementById("community-page-main").style.height="4050px"
    var community_grid_hidden=document.querySelectorAll(".mobile-community-hidden")
    community_grid_hidden.forEach(element=>{
        element.style.display="block"
    })
    document.getElementById("more-button").style.display="none"
    document.getElementById("scroll-to-top-div").style.display="block"
  })

  document.getElementById("scroll-to-top-button").addEventListener("click",()=>{

    window.scrollTo({top: 0, behavior: 'smooth'});
    
  })}

if(window.innerWidth>768){
  document.getElementById("scroll-to-top-button").addEventListener("click",()=>{

    window.scrollTo({top: 0, behavior: 'smooth'})});
document.querySelectorAll(".desktop-community-hidden").forEach(el=>{el.style.display="none"

})
document.getElementById("desktop-more-button").addEventListener("click",()=>{
  document.getElementById("community-page-main").style.height="1510px"
  document.getElementById("community-grid").style.height="1432px"

  document.getElementById("desktop-more-button").style.display="none"
  document.getElementById("scroll-to-top-div").style.display="block"
  document.querySelectorAll(".desktop-community-hidden").forEach(el=>{el.style.display="block"})
})
  

}
