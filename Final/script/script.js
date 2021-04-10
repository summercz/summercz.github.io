/*--------------JSON---------------*/

// const requestURL = 'https://summercz.github.io/Final/business.json';
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towndata = jsonObject['towns'];

    for (let i = 0; i < towndata.length; i++) {
        if (towndata[i].name == "Fish Haven" || towndata[i].name == "Preston" || towndata[i].name == "Soda Springs") {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('motto')
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');
        
        h2.textContent = towndata[i].name + ' ';
        motto.textContent = towndata[i].motto;
        year.textContent = 'Year Founded' + ': ' + towndata[i].yearFounded;
        population.textContent = 'Population' + ': ' + towndata[i].currentPopulation;
        rainfall.textContent = 'Annual Rain Fall' + ': ' + towndata[i].averageRainfall;
        image.setAttribute('src', 'images/'+ towndata[i].photo);
        image.setAttribute('alt', towndata[i].name);
        
        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(year);
        card.appendChild(population);
        card.appendChild(rainfall);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);
    }
}
});


/*-------------------Navigation----------------*/

function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

/*-------------------Date----------------------*/
function myFunction() {
    // var ts = new Date();
    // console.log(ts.toDateString());
    document.getElementById("currentdate").innerHTML = new Date().toDateString();
    // document.getElementById("lastupdatetime").innerHTML = new Date(document.lastModified).toLocaleString();
}
  
myFunction()