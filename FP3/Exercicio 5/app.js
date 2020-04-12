function searchStations() {
    const lat = document.getElementById('paw-form-lat').value || 0;
    const lon = document.getElementById('paw-form-lon').value || 0;
    const max = document.getElementById('paw-form-max').value || 0;
    response(lat, lon, max);
}

function response(lat, lon, max) {
    lat = lat || 0;
    lon = lon || 0;
    max = max || 0;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.response);
            process(response, lat, lon);
        }
    }

    xhttp.open("GET", `https://api.openchargemap.io/v3/poi/?output=json&latitude=${lat}&longitude=${lon}&maxresults=${max}`, true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();

}

function process(response, lat, lon) {
    console.log(response);
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < response.length; i++) {
        let row = tbody.insertRow(-1);

        row.insertCell(0).innerHTML = `${i + 1}`;
        row.insertCell(1).innerHTML = response[i]["AddressInfo"]["Country"]["Title"];
        row.insertCell(2).innerHTML = response[i]["AddressInfo"]["AddressLine1"];
        row.insertCell(3).innerHTML = response[i]["AddressInfo"]["Town"];
        row.insertCell(4).innerHTML = response[i]["AddressInfo"]["Postcode"];
    }

    rendermap(lat, lon, response);

}

function rendermap(lat, lon, resp) {
    var mymap = L.map('myMap').setView([lat, lon], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWFzdGVyYmVhbiIsImEiOiJjazhqMmVuNmwwMjJ0M2pyN2xiMDI2bGJtIn0.Lw6zFTb7SI6bPgvMcIZwEA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidGhlbWFzdGVyYmVhbiIsImEiOiJjazhqMmVuNmwwMjJ0M2pyN2xiMDI2bGJtIn0.Lw6zFTb7SI6bPgvMcIZwEA'
    }).addTo(mymap);

    for (let i = 0; i < resp.length; i++) {
        const Slat = resp[i]["AddressInfo"]["Latitude"];
        const Slon = resp[i]["AddressInfo"]["Longitude"];

        var marker = L.marker([Slat, Slon]).addTo(mymap);
        marker.bindPopup(`<b>Resultado ${ i + 1 }</b>`).openPopup();
    }

}