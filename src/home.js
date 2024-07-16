export default function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-div");
  homeDiv.textContent = "Welcome to our restaurant!";
  return homeDiv;
}
