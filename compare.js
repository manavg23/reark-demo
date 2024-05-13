const dropdown13 = "#side-menu";
const dropdown14= document.querySelector(dropdown13);
const menu8 = document.querySelectorAll("#Menu-icon");

menu8.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown14.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown14.classList.add("show");
      document.getElementById("main-compare").style.marginLeft="260px"
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
     document.getElementById("main-compare").style.marginLeft="0px"
    }
  });
var pro=document.getElementById("compare-heading-pro")
var premium=document.getElementById("compare-heading-premium")
var enterprise=document.getElementById("compare-heading-enterprise")
var rightmobile= document.createElement("img")
rightmobile.src="./images/right-mobile/right.png"
var pro_table=document.getElementById("mobile-table-pro")
var premium_table=document.getElementById("mobile-table-premium")
var enterprise_table=document.getElementById("mobile-table-enterprise")

pro.addEventListener("click",()=>{
    if(pro_table.classList.contains("hide")){
        pro_table.classList.remove("hide")
    }
    if(!premium_table.classList.contains("hide")){
        premium_table.classList.add("hide")
    }
    if(!enterprise_table.classList.contains("hide")){
        enterprise_table.classList.add("hide")
    }
    pro.classList.add("clicked")
premium.classList.remove("clicked")
enterprise.classList.remove("clicked")
})
premium.addEventListener("click",()=>{
    if(!pro_table.classList.contains("hide")){
        pro_table.classList.add("hide")
    }
    if(premium_table.classList.contains("hide")){
        premium_table.classList.remove("hide")
    }
    if(!enterprise_table.classList.contains("hide")){
        enterprise_table.classList.add("hide")
    }
    pro.classList.remove("clicked")
premium.classList.add("clicked")
enterprise.classList.remove("clicked")
})
enterprise.addEventListener("click",()=>{
    if(!pro_table.classList.contains("hide")){
        pro_table.classList.add("hide")
    }
    if(!premium_table.classList.contains("hide")){
        premium_table.classList.add("hide")
    }
    if(enterprise_table.classList.contains("hide")){
        enterprise_table.classList.remove("hide")
    }   
    pro.classList.remove("clicked")
premium.classList.remove("clicked")
enterprise.classList.add("clicked")
})

window.addEventListener("load",()=>{
    if(pro_table.classList.contains("hide")){
        pro_table.classList.remove("hide")
    }
    if(!premium_table.classList.contains("hide")){
        premium_table.classList.add("hide")
    }
    if(!enterprise_table.classList.contains("hide")){
        enterprise_table.classList.add("hide")
    }
    pro.classList.add("clicked")
premium.classList.remove("clicked")
enterprise.classList.remove("clicked")
})
// pro.addEventListener("click",()=>{

// pro.classList.add("clicked")
// premium.classList.remove("clicked")
// enterprise.classList.remove("clicked")
// document.getElementById("model-uploads").innerHTML="Upto 300"
// document.getElementById("max-size").innerHTML="Upto 50MB"
// document.getElementById("website-count").innerHTML="1 Website"
//     if(document.getElementById("3D Features").firstChild){
// document.getElementById("3D Features").removeChild(rightmobile)}
// document.getElementById("annotations").appendChild(rightmobile)
// document.getElementById("camera-limits").appendChild(rightmobile)
// document.getElementById("hd-screenshots").removeChild(rightmobile)
// document.getElementById("fullscreen-mode").removeChild(rightmobile)
// document.getElementById("embedding").removeChild(rightmobile)
// document.getElementById("remove-watermark").removeChild(rightmobile)
// document.getElementById("custom-branding").removeChild(rightmobile)
// document.getElementById("3d-config").removeChild(rightmobile)
// document.getElementById("3d-configs").removeChild(rightmobile)
// document.getElementById("aug-reality").removeChild(rightmobile)
// document.getElementById("app-ar").appendChild(rightmobile)
// document.getElementById("others").removeChild(rightmobile)
// document.getElementById("support").appendChild(rightmobile)
// document.getElementById("analytics").removeChild(rightmobile)
// document.getElementById("3d-content").removeChild(rightmobile)
// })

// premium.addEventListener("click",()=>{
// pro.classList.remove("clicked")
// premium.classList.add("clicked")
// enterprise.classList.remove("clicked")
// document.getElementById("model-uploads").innerHTML="Upto 500"
// document.getElementById("max-size").innerHTML="Upto 100MB"
// document.getElementById("website-count").innerHTML="2 Websites"
// document.getElementById("3D Features").removeChild(rightmobile)
// document.getElementById("annotations").appendChild(rightmobile)
// document.getElementById("camera-limits").appendChild(rightmobile)
// document.getElementById("hd-screenshots").appendChild(rightmobile)
// document.getElementById("fullscreen-mode").appendChild(rightmobile)
// document.getElementById("embedding").removeChild(rightmobile)
// document.getElementById("remove-watermark").appendChild(rightmobile)
// document.getElementById("custom-branding").appendChild(rightmobile)
// document.getElementById("3d-config").removeChild(rightmobile)
// document.getElementById("3d-configs").appendChild(rightmobile)
// document.getElementById("aug-reality").removeChild(rightmobile)
// document.getElementById("app-ar").appendChild(rightmobile)
// document.getElementById("others").removeChild(rightmobile)
// document.getElementById("support").appendChild(rightmobile)
// document.getElementById("analytics").appendChild(rightmobile)
// document.getElementById("3d-content").appendChild(rightmobile)



// })
// enterprise.addEventListener("click",()=>{
//     pro.classList.remove("clicked")
//     premium.classList.remove("clicked")
//     enterprise.classList.add("clicked")
//     document.getElementById("model-uploads").innerHTML="Custom"
//     document.getElementById("max-size").innerHTML="Upto 500MB"
//     document.getElementById("website-count").innerHTML="Multiple    "
//     document.getElementById("3D Features").removeChild(rightmobile)
//     document.getElementById("annotations").appendChild(rightmobile)
//     document.getElementById("camera-limits").appendChild(rightmobile)
//     document.getElementById("hd-screenshots").appendChild(rightmobile)
//     document.getElementById("fullscreen-mode").appendChild(rightmobile)
//     document.getElementById("embedding").removeChild(rightmobile)
//     document.getElementById("remove-watermark").appendChild(rightmobile)
//     document.getElementById("custom-branding").appendChild(rightmobile)
//     document.getElementById("3d-config").removeChild(rightmobile)
//     document.getElementById("3d-configs").appendChild(rightmobile)
//     document.getElementById("aug-reality").removeChild(rightmobile)
//     document.getElementById("app-ar").appendChild(rightmobile)
//     document.getElementById("others").removeChild(rightmobile)
//     document.getElementById("support").removeChild(rightmobile)
//     document.getElementById("support").innerHTML="Dedicated Support"
//     document.getElementById("analytics").appendChild(rightmobile)
//     document.getElementById("3d-content").appendChild(rightmobile)
    
    
    
//     })
    
