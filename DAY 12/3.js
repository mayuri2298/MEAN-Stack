let callAjax = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {
        const refJson = JSON.parse(xhr.responseText);
        console.log(refJson);
        handleDOMusingJSON(refJson);
    };
    xhr.send();
};

let handleDOMusingJSON = (refJson) => {
    let parent = document.querySelector("#parent");
    for (let i = 0; i < refJson.length; i++) {
        let item = refJson[i];
        const newBlock = parent.children[0].cloneNode(true);
        newBlock.innerHTML = item.FirstName;
        parent.insertBefore(newBlock, parent.firstChild);
    };
};

let callAjaxxXML = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        console.log(xhr.responseXML);
        handleDOMusingXML(xhr.responseXML);
    };
    xhr.send();
};

let handleDOMusingXML = (xmldoc) => {
    console.log(xmldoc);
    const authorList = xmldoc.querySelectorAll("Author");
    for (let i = 0; i < authorList.length; i++) {
        let item = authorList[i];
        const firstName = item.children[0].innerHTML;
        const lastName = item.children[3].innerHTML;

        const parent = document.querySelector("#parent");
        const newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML = firstName + " " + lastName;
        parent.insertBefore(newElement, parent.firstChild);
    };
};