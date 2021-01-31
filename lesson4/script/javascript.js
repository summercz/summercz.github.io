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