const centerItem = document.querySelector(".center-item");
const menu = document.querySelector(".menu");

//create hover effect
centerItem.addEventListener("mouseover", () => {
    menu.classList.add("change");
});

menu.addEventListener("mouseleave", () => {
    menu.classList.remove("change");
});