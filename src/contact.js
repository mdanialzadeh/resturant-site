import map from "./map.jpeg"

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone: 1 (555) 555-555";

    const adress = document.createElement("p");
    adress.classList.add("adress_text");
    adress.textContent = "made up adress"

    const locationMap = document.createElement('img');
    locationMap.src = map
    locationMap.alt = "map image of location"
  
    contact.appendChild(phoneNumber);
    contact.appendChild(adress);
    contact.appendChild(locationMap);

return contact;

}

function loadContact () {
    const main = document.getElementById("main");
    main.textContent = " ";
    main.appendChild(createContact())
}

export default loadContact;