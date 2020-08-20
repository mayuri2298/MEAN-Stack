function getWeather() {
    let cityName = document.querySelector("#inputID").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=e3176b52358ba32621211ec40c5b9dab&units=metric&q=" + cityName;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        const refJson = JSON.parse(xhr.responseText);
        console.log(refJson);
        domLogic(refJson);
    };
    xhr.send();
};

let domLogic = (refJson) => {

    let parent = document.querySelector("#parent");
    let newElement = parent.children[0].cloneNode(true);
    newElement.style.display = 'flex';
    newElement.innerHTML = refJson.name + " " + refJson.main.temp_max;
    parent.insertBefore(newElement, parent.firstChild);
    document.querySelector("#inputID").value = "";
}