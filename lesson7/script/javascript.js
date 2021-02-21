//get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
};

//first check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);

  //loops through each img and check sttus and load if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else { // just load all images if not supported

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
}