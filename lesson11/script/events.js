

function get_events(town_name) {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towndata = jsonObject['towns'];

        for (let i = 0; i < towndata.length; i++) {
            // if (towndata[i].name == "Fish Haven" || towndata[i].name == "Preston" || towndata[i].name == "Soda Springs") {
            if (towndata[i].name == town_name) {
                let card = document.createElement('section');

                for(let event of towndata[i].events) {
                    let c = document.createElement('p');
                    c.textContent = event;
                    card.append(c);
                }
                document.querySelector('div.events').appendChild(card);
            }
        }
    });
}