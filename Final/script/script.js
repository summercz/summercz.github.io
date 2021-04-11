/*--------------JSON---------------*/

const requestURL = 'https://summercz.github.io/Final/JSON/business.json';
// const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businessdata = jsonObject['business'];

    for (let i = 0; i < businessdata.length; i++) {
        if (businessdata[i].name == "Hanhui Noodle Place" || businessdata[i].name == "Zhuzhu Tailor" || businessdata[i].name == "Dongsheng Dentistry") {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('address')
        let tel = document.createElement('p');
        let website = document.createElement('p');

        
        h2.textContent = businessdata[i].name + ' ';
        address.textContent = businessdata[i].address;
        tel.textContent = 'Tel:' + businessdata[i].tel;
        website.textContent = 'Website' + ': ' + businessdata[i].website;
        
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(tel);
        card.appendChild(website);
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