window.addEventListener("load", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2");

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);

            let ssjson = JSON.parse(xhr.responseText);
            console.log(ssjson.data);
            dynamic_fun(ssjson.data);
        }
    };
    xhr.send();
});

let dynamic_fun = function(list) {
    const parent = document.querySelector("#parentBlock");

    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        const newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.children[0].innerHTML = item.first_name;
        parent.insertBefore(newElement, parent.firstChild);
    }
};