
var demoformDB=firebase.database().ref("demo-form")
document.getElementById("demo-form").addEventListener("submit",submitform)
function submitform(e){
    e.preventDefault();
    var email=getelementvalue1("Email")
    var fullname=getelementvalue1("Name")
    var phone=getelementvalue1("Phone")
    var company=getelementvalue1("Company-Name")
    var option=getelementvalue1("tacbox")
    
    savedata(email,fullname,phone,company,option)
  document.getElementById("form-message").innerHTML="Thanks! Request Submitted"

}
const getelementvalue1=(id)=>{
    return document.getElementById(id).value
}
const savedata=(email,fullname,phone,company,option)=>{
    var newdemoform=demoformDB.push()
    newdemoform.set({
Email:email,
FullName:fullname,
Phone:phone,
Company:company,
checkbox:option,
    });
}

const dropdown7 = "#side-menu";
const dropdown8 = document.querySelector(dropdown7);
const menu5 = document.querySelectorAll("#Menu-icon");

menu5.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown8.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown8.classList.add("show");
      document.getElementById("main-form").style.marginLeft="260px"
    }
  }, 250);
});
})
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(dropdown7);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && dropdown8.classList.contains("show")) {
     dropdown8.classList.remove("show");
     document.getElementById("main-form").style.marginLeft="0px"
    }
  });
