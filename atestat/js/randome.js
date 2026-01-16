const advices = {
  "Physical Health": [
    {
      text: "Bea cel puțin 2 litri de apă zilnic pentru a rămâne hidratat.",
      image: "images/water.jpeg",
    },
    {
      text: "Fă mișcare cel puțin 30 de minute pe zi pentru a-ți întări sistemul cardiovascular.",
      image: "images/exercice.jpeg",
    },
    {
      text: "Fă stretching înainte și după antrenamente pentru a preveni accidentările și a îmbunătăți flexibilitatea.",
      image: "images/stretch.jpeg",
    },
    {
      text: "Ia pauze scurte în timpul perioadelor lungi de stat pe scaun pentru a reduce tensiunea asupra coloanei vertebrale.",
      image: "images/breaks.jpeg",
    },
    {
      text: "Dormi cel puțin 7-8 ore de calitate pentru a-i permite corpului să se recupereze.",
      image: "images/sleep.jpg",
    },
    {
      text: "Petrece cel puțin 15 minute la soare zilnic pentru a obține suficientă vitamina D.",
      image: "images/sunlight.jpg",
    },
  ],
  "Mental Well-being": [
    {
      text: "Practică mindfulness sau meditație cel puțin 10 minute pe zi pentru a reduce nivelul de stres.",
      image: "images/meditation.jpeg",
    },
    {
      text: "Limitează utilizarea rețelelor sociale pentru a evita oboseala mentală și a îmbunătăți concentrarea.",
      image: "images/social_media.jpeg",
    },
    {
      text: "Implică-te în hobby-uri care te fac fericit și reduc anxietatea.",
      image: "images/hobbies.jpeg",
    },
    {
      text: "Notează trei lucruri pentru care ești recunoscător în fiecare zi pentru a crește pozitivitatea.",
      image: "images/gratitude.jpeg",
    },
    {
      text: "Petrece timp în natură pentru a îmbunătăți starea de spirit și claritatea mentală.",
      image: "images/nature.jpeg",
    },
    {
      text: "Conectează-te regulat cu familia sau prietenii pentru a menține bunăstarea emoțională.",
      image: "images/friends.jpeg",
    },
  ],
  "Nutrition and Diet": [
    {
      text: "Consumă o dietă echilibrată, bogată în fructe, legume și cereale integrale pentru o sănătate optimă.",
      image: "images/healthy_food.jpeg",
    },
    {
      text: "Redu consumul de zahăr procesat pentru a menține nivelurile stabile de zahăr din sânge.",
      image: "images/sugar.jpeg",
    },
    {
      text: "Include proteine în fiecare masă pentru a susține creșterea și repararea musculară.",
      image: "images/protein.jpeg",
    },
    {
      text: "Evită să sari peste micul dejun pentru a menține nivelurile de energie pe parcursul zilei.",
      image: "images/breakfast.jpeg",
    },
    {
      text: "Incorporează grăsimi sănătoase precum nucile, semințele și uleiul de măsline în dieta ta.",
      image: "images/healthy_fats.jpeg",
    },
    {
      text: "Bea ceai verde sau ceaiuri de plante pentru antioxidanții și beneficiile lor pentru sănătate.",
      image: "images/tea.jpeg",
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

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(advices).forEach((category) => {
    getNewAdvice(category);
    document
      .getElementById(`${category.replace(/\s+/g, "-")}-button`)
      .addEventListener("click", () => getNewAdvice(category));
  });
});
