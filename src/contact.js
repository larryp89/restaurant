export default function createContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-container");

  // Create title
  const title = document.createElement("h2");
  title.textContent = "Contact Us";
  title.classList.add("contact-title");
  contactDiv.appendChild(title);

  // Create contact info section
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  contactInfo.innerHTML = `
    <p><strong>Phone:</strong> 123-456-7890</p>
    <p><strong>Email:</strong> info@birdsandbees.com</p>
    <p><strong>Address:</strong> 123 Nature Lane, Garden City, GC 12345</p>
  `;
  contactDiv.appendChild(contactInfo);

  // Create contact form
  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.innerHTML = `
    <h3>Send us a message</h3>
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  `;
  contactDiv.appendChild(form);

  // Add event listener for form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
    form.reset();
  });

  // Create map section
  const mapSection = document.createElement("div");
  mapSection.classList.add("map-section");
  mapSection.innerHTML = `
    <h3>Our Location</h3>
    <div class="map-placeholder">
      <p>Map placeholder - Imagine a beautiful map here!</p>
      <p>123 Nature Lane, Garden City, GC 12345</p>
    </div>
  `;
  contactDiv.appendChild(mapSection);

  return contactDiv;
}
