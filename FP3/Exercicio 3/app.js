const openweathermaps_key = "903f3a1fe8470dd7084cce8550648aba";

async function searchWeather() {
    const lat = document.getElementById('paw-form-lat').value;
    const lon = document.getElementById('paw-form-lon').value;
    response(lat, lon);
}

function response(lat, lon) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var weatherObject = JSON.parse(xhttp.response);
            console.log(weatherObject);
            var currentWeather = weatherObject["weather"][0]["description"];
            document.getElementById("paw-results-row").style.display = "block";
            document.getElementById("Results").innerHTML = "<i class=\"fas fa-cloud\"></i> " + currentWeather;
        }
    }

    xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweathermaps_key}`, true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates, showError);
    } else {
        let errorline = document.getElementById("Results");
        document.getElementById("paw-results-row").style.display = "block";
        errorline.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getCoordinates(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    response(lat, lon);
}