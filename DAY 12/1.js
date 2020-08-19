let callAjax = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.onload = () => {
        const refJson = JSON.parse(xhr.responseText);
        domLogic(refJson);
    }

    xhr.send();
};
let domLogic = function(refJson) {
    console.log(refJson.data);
    let a = document.querySelector("#parent");
    for (let i = 0; i < refJson.data.length; i++) {
        const item = refJson.data[i];
        let newElement = a.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.innerHTML = item.email;
        a.insertBefore(newElement, a.firstChild);

    }
};