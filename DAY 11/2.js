window.addEventListener("load", () => {
    const parent = document.querySelector("#parentBlock");

    let list = [
        { id: 1, title: "javascript" },
        { id: 2, title: "html" },
        { id: 1, title: "bootstrap" },
        { id: 2, title: "css" },
        { id: 1, title: "ajax" },
        { id: 2, title: "json" },
        { id: 1, title: "nodejs" },
        { id: 2, title: "php" },
        { id: 1, title: "angular" },
        { id: 2, title: "backend" },
    ]

    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        const newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.children[0].innerHTML = item.title;
        parent.insertBefore(newElement, parent.firstChild);
    }
})