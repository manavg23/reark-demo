const firebaseConfig = {
    apiKey: "AIzaSyCQiB7h2AQ0lh5BpYZCT7u_I-nJFCQfvd0",
    authDomain: "jewelive.firebaseapp.com",
    databaseURL: "https://jewelive-default-rtdb.firebaseio.com",
    projectId: "jewelive",
    storageBucket: "jewelive.appspot.com",
    messagingSenderId: "416789636925",
    appId: "1:416789636925:web:dedc0409f6f1d94acf4754",
    measurementId: "G-W45YWPDKCV"
  };
firebase.initializeApp(firebaseConfig);
var subscribeformDB=firebase.database().ref("newsletter")
document.getElementById("subscribe-form").addEventListener("submit",newsletterform)
function newsletterform(e){
    e.preventDefault();
    var subemail=getelementval("subscribe-email")
    
    
    savesubemail(subemail)
   document.getElementById("subscribe-message").innerHTML="Thanks For Subscribing!"

}
const getelementval=(id)=>{
    return document.getElementById(id).value
}
const savesubemail=(subemail)=>{
    var subscribeform=subscribeformDB.push()
 subscribeform.set({
Email:subemail,

    });
}