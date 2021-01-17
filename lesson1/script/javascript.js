function myFunction() {
    document.getElementById("lastupdatetime").innerHTML = new Date(document.lastModified).toLocaleString();
}
  
myFunction()