import "./style.css";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function loadHome() {
  clearContent();
  document.getElementById("content").appendChild(createHome());
}

function loadMenu() {
  clearContent();
  document.getElementById("content").appendChild(createMenu());
}

function loadContact() {
  clearContent();
  document.getElementById("content").appendChild(createContact());
}

document.getElementById("home").addEventListener("click", loadHome);
document.getElementById("menu").addEventListener("click", loadMenu);
document.getElementById("contact").addEventListener("click", loadContact);

// Load the home tab by default
loadHome();
