function myFunction() {
    // var ts = new Date();
    // console.log(ts.toDateString());
    document.getElementById("currentdate").innerHTML = new Date().toDateString();
    // document.getElementById("lastupdatetime").innerHTML = new Date(document.lastModified).toLocaleString();
}
  
myFunction()

function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
  }

var d = new Date ();
var n = d.getDay ();

if(n !=5) {
    document.getElementById("announcement").style.display = "none";
}