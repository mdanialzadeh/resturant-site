import Beef from './1.jpeg';
import Charsu from './1.jpeg';
import Chicken from './1.jpeg';
import Seafood from './1.jpeg';
import Tonkotsu from './1.jpeg';

function createMenu () {
    const menu = document.createElement("div");
    menu.classList.add("menu")

    menu.appendChild(
        createMenuItem(
            Beef,
            "Beef Ramen",
            "Sliced beef, fish cake, kimchi and bamboo shoots all in a our house tonkotsu broth",
            "$ 16.99"
        )
    );


    menu.appendChild(
        createMenuItem(
            Charsu,
            "Charsu Ramen",
            "Roasted pork belly, fish cake, egg, in house tonkotsu broth",
            "$17.99"
        )
    );


    menu.appendChild(
        createMenuItem(
            Chicken,
            "Crispy Chicken Ramen",
            "Crispy chicken, sliced cabbbage, corn, in a chicken broth",
            "$ 15.99"
        ) 
    );


    menu.appendChild(
        createMenuItem(
            Seafood,
            "Seafood Ramen",
            "Shrimp, muscles, squid, crab meat, and corn in our house miso broth",
            "$18.99"
        )
    );

    menu.appendChild(
        createMenuItem(
            Tonkotsu,
            "Spicy Tonkotsu Ramen",
            "Roasted pork, fish cake, corn, onions, in a rich tonkotsu broth",
            "$15.99"
        )
    );
            return menu
}

function createMenuItem (photo,name,description,price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuitem")

    const foodName = document.createElement("h2")
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodPrice = document.createElement("p");
    foodPrice.textContent = price;

    const foodImage = document.createElement("img");
    foodImage.src = photo;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodPrice);

    return menuItem
}

function createMenuTitle () {
    const menuTitle = document.createElement("div");
    menuTitle.classList.add ("menutitle");
     
    const x = document.createElement("h1");
    x.textContent = "Menu"

    const scrolldir = document.createElement("h3")
    scrolldir.textContent = "Scroll down to view additional Selections";

    menuTitle.appendChild(x)
    menuTitle.appendChild(scrolldir);

    return menuTitle;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";

    main.appendChild(createMenuTitle());
    main.appendChild(createMenu())
}

export default loadMenu