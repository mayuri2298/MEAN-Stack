let callAjax = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.onload = () => {
        const refJson = JSON.parse(xhr.responseText);
        console.log(refJson);
        domLogic(refJson);
    }
    xhr.send();
};

let domLogic = function(refJson) {
    let parentC = document.querySelector("#parent");

    for (let i = 0; i < refJson.data.length; i++) {
        const item = refJson.data[i];
        let newElement = parentC.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.innerHTML = item.last_name;
        parentC.insertBefore(newElement, parentC.firstChild);
    }
}

callAjaxXml = () => {
    let abc = new XMLHttpRequest();
    abc.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
    abc.setRequestHeader("accept", "application/xml");

    abc.onload = () => {
        let xmldoc = abc.responseXML;
        xmldocHandle(xmldoc);
    };
    abc.send();
};

let xmldocHandle = (xmldoc) => {
    const parentElement = xmldoc.querySelector("ArrayofAuthor");
    console.log(parentElement);
    for (let i = 0; i < parentElement.children.length; i++) {
        let author = parentElement.children[i];
        let fname = author.children[0].innerHTML;
        let authorP = document.querySelector("#parent");
        let newAuthor = authorP.children[0].cloneNode(true);
        newAuthor.innerHTML = fname;
        authorP.insertBefore(newAuthor, parentElement.firstChild);
    }

}