export default function createMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-container");
  
    // Create menu title
    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Our Menu";
    menuTitle.classList.add("menu-title");
    menuDiv.appendChild(menuTitle);
  
    // Create grid container for menu items
    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");
  
    // Menu items data
    const menuItems = [
      { name: "Honey Glazed Salmon", description: "Fresh salmon fillet glazed with local honey", price: "$22" },
      { name: "Garden Butterfly Salad", description: "Mixed greens with edible flowers and light vinaigrette", price: "$15" },
      { name: "Beehive Pasta", description: "Honeycomb-shaped pasta with a creamy garlic sauce", price: "$18" },
      { name: "Pollinator's Pizza", description: "Thin crust pizza with wildflower honey and prosciutto", price: "$20" },
      { name: "Bumblebee Burger", description: "Angus beef patty with honey mustard and crispy onions", price: "$16" },
      { name: "Hummingbird Cake", description: "Classic southern cake with banana, pineapple, and cream cheese frosting", price: "$10" },
    ];
  
    // Create and append menu items to the grid
    menuItems.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
  
      menuItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span class="price">${item.price}</span>
      `;
  
      menuGrid.appendChild(menuItem);
    });
  
    menuDiv.appendChild(menuGrid);
  
    return menuDiv;
  }