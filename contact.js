
// firebase.initializeApp(firebaseConfig);
var contactformDB=firebase.database().ref("contact-form")
document.getElementById("contact-form").addEventListener("submit",submitcontactform)
function submitcontactform(e){
    e.preventDefault();
    var email=getelementvalue("contactemail")
    var fullname=getelementvalue("contactname")
    var phone=getelementvalue("contactphone")
    var company=getelementvalue("contactcompany")
    var message=getelementvalue("message")
    var option=getelementvalue("contacttacbox")
    
    savecontactdata(email,fullname,phone,company,message,option)
  document.getElementById("contact-message").innerHTML="Thanks For Submitting!"

}
const getelementvalue=(id)=>{
    return document.getElementById(id).value
}
const savecontactdata=(email,fullname,phone,company,message,option)=>{
    var newcontactform=contactformDB.push()
    newcontactform.set({
Email:email,
FullName:fullname,
Phone:phone,
Company:company,
Message:message,
checkbox:option,
    });
}
const dropdown15 = "#side-menu";
const dropdown16 = document.querySelector(dropdown15);
const menu10 = document.querySelectorAll("#Menu-icon");

menu10.forEach(el=>{el.addEventListener("click", () => {
  setTimeout(() => {
    console.log("1")
    if (!dropdown16.classList.contains("show")) {
      // Add class `show` to filterList element
      dropdown16.classList.add("show");
      document.getElementById("main-contact").style.marginLeft="260px"
    }
  }, 250);
});
})
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const isClosest = e.target.closest(dropdown15);
  
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && dropdown16.classList.contains("show")) {
     dropdown16.classList.remove("show");
     document.getElementById("main-contact").style.marginLeft="0px"
    }
  });