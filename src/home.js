export default function createHome() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-div");
  
    // Create main title
    const mainTitle = document.createElement("h1");
    mainTitle.classList.add("main-title");
    mainTitle.innerHTML = "the <span>Birds</span> & the <span>Bees</span>";
    homeDiv.appendChild(mainTitle);
  
    // Create tagline
    const tagline = document.createElement("p");
    tagline.classList.add("tagline");
    tagline.textContent = "Nature's Flavors on Your Plate";
    homeDiv.appendChild(tagline);
  
    // Create featured section
    const featuredSection = document.createElement("div");
    featuredSection.classList.add("featured-section");
  
    const featuredTitle = document.createElement("h2");
    featuredTitle.textContent = "Featured Dishes";
    featuredSection.appendChild(featuredTitle);
  
    const dishes = [
      { name: "Honey Glazed Chicken", description: "Tender chicken with a sweet honey glaze" },
      { name: "Garden Fresh Salad", description: "Crisp vegetables from our own garden" },
      { name: "Bee Pollen Smoothie", description: "Energizing smoothie with natural bee pollen" }
    ];
  
    dishes.forEach(dish => {
      const dishElement = document.createElement("div");
      dishElement.classList.add("featured-dish");
      dishElement.innerHTML = `
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
      `;
      featuredSection.appendChild(dishElement);
    });
  
    homeDiv.appendChild(featuredSection);
  
    // Create CTA button
    const ctaButton = document.createElement("button");
    ctaButton.classList.add("cta-button");
    ctaButton.textContent = "Reserve a Table";
    homeDiv.appendChild(ctaButton);
  
    return homeDiv;
  }