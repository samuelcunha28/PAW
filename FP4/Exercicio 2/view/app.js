const openweathermaps_key = "23c9148aa9da8bd297f27b1dbc2abc35"

function searchWeather() {
    const lat = document.getElementById('paw-form-lat').value || 0;
    const lon = document.getElementById('paw-form-lon').value || 0;
    response(lat, lon);
}

function response(lat, lon) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var weatherObject = JSON.parse(xhttp.response);
            console.log(weatherObject);
            var currentWeather = weatherObject["weather"][0]["description"];
            document.getElementById("paw-results-row").style.display = "block";
            document.getElementById("Results").innerHTML = "<i class=\"fas fa-cloud\"></i> " + currentWeather;
        }
    }

	// xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweathermaps_key}`, true);
	xhttp.open("GET", `/forecast?lat=${lat}&lon=${lon}`, true);
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

function showError(error) {
    let x = document.getElementById("Results");
    document.getElementById("paw-results-row").style.display = "block";

    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }

}


function getForecastLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getForecastCoordinates, showError);
    } else {
        let errorline = document.getElementById("Results");
        document.getElementById("paw-results-row").style.display = "block";
        errorline.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getForecastCoordinates(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    forecast(lat, lon);
}

function forecast(lat, lon) {
    lat = lat || 0;
    lon = lon || 0;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var weatherObject = JSON.parse(xhttp.response);
            console.log(xhttp.response);

            document.getElementById("paw-results-row").style.display = "block";

            for (let i = 0; i < 5; i++) {
                let dailyWeather = "Day " + (i+1) + ": " + "<i class=\"fas fa-cloud\"></i> " + weatherObject["list"][i]["weather"][0]["description"];
                document.getElementById("Results").innerHTML += dailyWeather + "<br>";
            }

        }
    }
    // xhttp.open("GET", `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openweathermaps_key}`, true);
    xhttp.open("GET", `localhost:3000/forecast?lat=${lat}&lon=${lon}&appid=${openweathermaps_key}`, true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
}