
function createHomePage () {
    const home = document.createElement("div")
    home.classList.add("home")


home.appendChild(createParagraph("ramen shop"))
home.appendChild(createParagraph("naruto inspired"))
home.appendChild(createParagraph("made with love"))

return home

}

function createParagraph (text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph
}

function loadHome () {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomePage());
}

export default loadHome