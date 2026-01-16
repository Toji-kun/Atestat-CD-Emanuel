let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
}

const API_KEY = "AIzaSyB-f1F9z4flxy92_qM-EJI2XsPbAyLuzSw"; // Nu lăsa cheia API publică!
const model = "gemini-3-flash-preview"; // Poți schimba modelul dacă vrei

async function sendMessage(event) {
  if (event.key === "Enter") {
    let input = document.getElementById("chatInput");
    let message = input.value;
    if (message.trim() === "") return;

    let chatMessages = document.getElementById("chatMessages");

    // Afișează mesajul utilizatorului
    let newMessage = document.createElement("div");
    newMessage.textContent = "Tu: " + message;
    chatMessages.appendChild(newMessage);
    input.value = "";

    // Afișează mesaj "Gândesc..." în timp ce AI-ul răspunde
    let botMessage = document.createElement("div");
    botMessage.textContent = "AI: Gândesc...";
    chatMessages.appendChild(botMessage);

    try {
      // Trimite mesajul la AI și primește un răspuns
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/" +
          model +
          ":generateContent?key=" +
          API_KEY,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] }),
        }
      );

      const data = await response.json();
      let aiReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Eroare la răspunsul AI";

      // Schimbă mesajul "Gândesc..." cu răspunsul AI
      botMessage.textContent = "AI: " + aiReply;
    } catch (error) {
      botMessage.textContent = "AI: Eroare la conectare.";
      console.error("Eroare API:", error);
    }
  }
}
const products = [
  {
    id: 1,
    quantity: 0,
    image: "images/arm.jpeg",
    title: "Braț Bionic",
    description: "O proteză modernă și funcțională cu degete articulate.",
    shortDescription:
      "Braț protetic de înaltă tehnologie cu mișcare flexibilă.",
    price: 1299.99,
    oldPrice: 1599.99,
  },
  {
    id: 2,
    quantity: 0,
    image: "images/ECG-monitor.jpeg",
    title: "Monitor ECG",
    shortDescription: "Monitorizează activitatea cardiacă în timp real.",
    price: 399.99,
    oldPrice: 499.99,
  },
  {
    id: 3,
    quantity: 0,
    image: "images/Pill dispenser.jpeg",
    title: "Dozator de pastile",
    shortDescription: "Sistem automat pentru gestionarea medicației zilnice.",
    price: 99.99,
    oldPrice: 129.99,
  },
  {
    id: 4,
    quantity: 0,
    image: "images/aeorosol.jpeg",
    title: "Inhalator inteligent",
    shortDescription:
      "Dispozitiv portabil pentru tratamente respiratorii eficiente.",
    price: 59.99,
    oldPrice: 89.99,
  },
  {
    id: 5,
    quantity: 0,
    image: "images/auditiv.jpeg",
    title: "Aparat auditiv",
    shortDescription: "Amplificator de sunet discret cu tehnologie digitală.",
    price: 159.99,
    oldPrice: 189.99,
  },
  {
    id: 6,
    quantity: 0,
    image: "images/siringa.jpeg",
    title: "Instrument chirurgical laparoscopic",
    shortDescription:
      "Echipament de precizie pentru intervenții minim invazive.",
    price: 79.99,
    oldPrice: 129.99,
  },
  {
    id: 7,
    quantity: 0,
    image: "images/vape.jpeg",
    title: "Nebulizator portabil modern",
    shortDescription:
      "Design compact pentru administrarea rapidă a medicamentelor.",
    price: 39.99,
    oldPrice: 54.99,
  },
  {
    id: 8,
    quantity: 0,
    image: "images/pen.jpeg",
    title: "Pen de insulină reutilizabil",
    shortDescription:
      "Dispozitiv ergonomic pentru injecții cu insulină rapide.",
    price: 299.99,
    oldPrice: 349.99,
  },
  {
    id: 9,
    quantity: 0,
    image: "images/scop.jpeg",
    title: "Stetoscop manual",
    shortDescription: "Instrument clasic pentru auscultația cardio-pulmonară.",
    price: 20.99,
    oldPrice: 24.99,
  },
  {
    id: 10,
    quantity: 0,
    image: "images/ciocan.jpeg",
    title: "Ciocan de reflexe",
    shortDescription: "Instrument esențial pentru examinarea neurologică.",
    price: 15.99,
    oldPrice: 20.99,
  },
  {
    id: 11,
    quantity: 0,
    image: "images/pill.jpeg",
    title: "Pastilă inteligentă",
    shortDescription:
      "Senzor ingerabil pentru monitorizarea sănătății interne.",
    price: 69.99,
    oldPrice: 89.99,
  },

  {
    id: 12,
    quantity: 0,
    image: "images/heart.jpeg",
    title: "Stimulator cardiac wireless",
    shortDescription: "Tehnologie avansată pentru reglarea ritmului cardiac.",
    price: 199.99,
    oldPrice: 229.99,
  },
];

function renderProducts() {
  const container = document.querySelector(
    ".menu .box-container, .products .box-container"
  );
  if (!container) return;

  container.innerHTML = "";
  products.forEach((product, index) => {
    const productHTML = `
            <div class="box">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                ${
                  product.shortDescription
                    ? `<p class="description">${product.shortDescription}</p>`
                    : ""
                }
                <div class="price">$${product.price} <span>$${
      product.oldPrice
    }</span></div>
                <a href="#" class="btn" onclick="addToCart(${index})">Adaugă în coș</a>
            </div>
        `;
    container.innerHTML += productHTML;
  });
}

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Caută produsul după ID
  let existingProduct = cart.find((item) => item.id === products[index].id);

  if (existingProduct) {
    existingProduct.quantity++; // Crește cantitatea
  } else {
    cart.push({ ...products[index], quantity: 1 }); // Adaugă produsul cu quantity 1
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Găsește produsul în coș
  let index = cart.findIndex((item) => item.id === productId);

  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--; // Doar scade cantitatea
    } else {
      cart.splice(index, 1); // Dacă e ultimul, elimină-l din coș
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.querySelector(".cart-items-container");

  if (!cartContainer) return;

  cartContainer.innerHTML = "<h2>Coș</h2>";

  cart.forEach((item) => {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    let title = document.createElement("h4");
    title.textContent = `${item.title} (x${item.quantity})`;

    let price = document.createElement("p");
    price.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

    let removeButton = document.createElement("button");
    removeButton.textContent = "Elimină";
    Object.assign(removeButton.style, {
      backgroundColor: "red",
      color: "black",
      border: "none",
      borderRadius: "12px",
      padding: "8px 12px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    });

    removeButton.onmouseover = () => {
      removeButton.style.transform = "scale(1.1)";
      removeButton.style.backgroundColor = "darkred";
    };

    removeButton.onmouseleave = () => {
      removeButton.style.transform = "scale(1)";
      removeButton.style.backgroundColor = "red";
    };

    removeButton.onclick = () => removeFromCart(item.id);

    cartItem.appendChild(title);
    cartItem.appendChild(price);
    cartItem.appendChild(removeButton);

    cartContainer.appendChild(cartItem);
  });

  let checkoutButton = document.createElement("a");
  checkoutButton.textContent = "Comandă acum";
  checkoutButton.href = "cart.html";
  checkoutButton.classList.add("btn");
  checkoutButton.style.marginTop = "1rem";
  checkoutButton.style.display = "block";

  cartContainer.appendChild(checkoutButton);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();

  if (typeof advices !== "undefined") {
    Object.keys(advices).forEach((category) => {
      const button = document.getElementById(
        `${category.replace(/\s+/g, "-")}-button`
      );
      if (button) {
        getNewAdvice(category);
        button.addEventListener("click", () => getNewAdvice(category));
      }
    });
  }
});

const advices = {
  "Physical Health": [
    {
      text: "Bea cel puțin 2 litri de apă zilnic pentru a rămâne hidratat.",
      image: "imagies/water.jpeg",
    },
    {
      text: "Fă exerciții fizice cel puțin 30 de minute pe zi pentru a-ți întări sistemul cardiovascular.",
      image: "imagies/exercice.jpeg",
    },
    {
      text: "Fă stretching înainte și după antrenamente pentru a preveni accidentările și a îmbunătăți flexibilitatea.",
      image: "imagies/stretch.jpeg",
    },
    {
      text: "Ia pauze scurte în timpul perioadelor lungi de stat pe scaun pentru a reduce tensiunea coloanei vertebrale.",
      image: "imagies/breaks.jpeg",
    },
    {
      text: "Dormi cel puțin 7-8 ore pe noapte pentru a permite corpului să se recupereze.",
      image: "imagies/sleep.jpg",
    },
    {
      text: "Petrece cel puțin 15 minute la soare zilnic pentru a obține suficientă Vitamina D.",
      image: "imagies/sunlight.jpg",
    },
  ],
  "Mental Well-being": [
    {
      text: "Practică mindfulness sau meditație timp de cel puțin 10 minute pe zi pentru a reduce nivelul de stres.",
      image: "imagies/meditation.jpeg",
    },
    {
      text: "Limitează utilizarea rețelelor sociale pentru a evita oboseala mentală și a îmbunătăți concentrarea.",
      image: "imagies/social_media.jpeg",
    },
    {
      text: "Implică-te în hobby-uri care te fac fericit și reduc anxietatea.",
      image: "imagies/hobbies.jpeg",
    },
    {
      text: "Notează trei lucruri pentru care ești recunoscător în fiecare zi pentru a stimula pozitivitatea.",
      image: "imagies/gratitude.jpeg",
    },
    {
      text: "Petrece timp în natură pentru a îmbunătăți starea de spirit și claritatea mentală.",
      image: "imagies/nature.jpeg",
    },
    {
      text: "Conectează-te regulat cu familia sau prietenii pentru a menține bunăstarea emoțională.",
      image: "imagies/friends.jpeg",
    },
  ],
  "Nutrition and Diet": [
    {
      text: "Mănâncă o dietă echilibrată, bogată în fructe, legume și cereale integrale pentru o sănătate optimă.",
      image: "imagies/healthy_food.jpeg",
    },
    {
      text: "Redu consumul de zahăr procesat pentru a menține niveluri stabile ale glicemiei.",
      image: "imagies/sugar.jpeg",
    },
    {
      text: "Include proteine în fiecare masă pentru a susține creșterea și repararea musculară.",
      image: "imagies/protein.jpeg",
    },
    {
      text: "Evită să sari peste micul dejun pentru a menține nivelurile de energie pe parcursul zilei.",
      image: "imagies/breakfast.jpeg",
    },
    {
      text: "Incorporează grăsimi sănătoase precum nuci, semințe și ulei de măsline în dieta ta.",
      image: "imagies/healthy_fats.jpeg",
    },
    {
      text: "Bea ceai verde sau ceaiuri de plante pentru antioxidanții și beneficiile lor pentru sănătate.",
      image: "imagies/tea.jpeg",
    },
  ],
};

function getNewAdvice(category) {
  const adviceTextElement = document.getElementById(
    `${category.replace(/\s+/g, "-")}-adviceText`
  );
  const adviceImageElement = document.getElementById(
    `${category.replace(/\s+/g, "-")}-adviceImage`
  );

  let newAdvice;
  do {
    newAdvice =
      advices[category][Math.floor(Math.random() * advices[category].length)];
  } while (adviceTextElement.innerText === newAdvice.text);

  adviceTextElement.innerText = newAdvice.text;
  adviceImageElement.src = newAdvice.image;
  adviceImageElement.alt = newAdvice.text;
}
