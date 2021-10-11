import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";
import myIcon from "./okami.png"

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const myicon = document.createElement ("img")
    myicon.classList.add("icon")
    
    
    const resturantName = document.createElement("h1");
    resturantName.textContent = "Okami Ramen Shop";
    resturantName.classList.add("resturant-name");
    
    resturantName.appendChild(myicon);
    header.appendChild(resturantName);
    header.appendChild(createNav())

    return header
}

function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("nav")

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click",loadHome)
    
    

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click",loadMenu);
    

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact Us";
    contactButton.addEventListener("click",loadContact);

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton)

    return nav
}



function createMain () {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id","main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer")
    footer.classList.add = "footer"
    footer.textContent = "Matthew Danialzadeh"
    
    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
  
    loadHome();
  }
  
  export default initializeWebsite;