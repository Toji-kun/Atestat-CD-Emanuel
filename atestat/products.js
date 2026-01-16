document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartCount = document.getElementById("cart-count");

  const products = [
    {
      name: "Cuțitul bucătarului",
      price: 14.99,
      img: "https://static.vecteezy.com/system/resources/thumbnails/045/712/982/small_2x/chef-s-knife-on-textured-dark-surface-photo.jpg",
      description:
        "Un cuțit versatil, ideal pentru tăiat, feliat și tocat legume sau carne.",
    },
    {
      name: "Cuțit de curățat",
      price: 7.99,
      img: "https://t4.ftcdn.net/jpg/11/42/61/85/360_F_1142618584_VDNXOnOSmRdddIk7fxXz1n0QKJ2g4uF0.jpg",
      description:
        "Perfect pentru curățarea fructelor și legumelor mici cu precizie.",
    },
    {
      name: "Cuțit de pâine",
      price: 9.49,
      img: "https://senkenknives.com/cdn/shop/files/ShogunBreadKnifeImage11500x1500Dark_grande.jpg?v=1723397923",
      description: "Lamă zimțată care taie ușor prin coaja crocantă a pâinii.",
    },
    {
      name: "Cuțit Santoku",
      price: 17.99,
      img: "https://takaiknives.com/cdn/shop/files/7_SantokuI_1001x.png?v=1693324460",
      description: "Stil japonez, excelent pentru tăieri fine și rapide.",
    },
    {
      name: "Tocător din lemn",
      price: 11.99,
      img: "https://media.istockphoto.com/id/898460224/photo/walnut-handmade-wooden-cutting-board-on-black-cotton.jpg?s=612x612&w=0&k=20&c=g3_LAUtlmQh1EvuA7MqvTlNlRhMRzQG1LJMFMOGbU2A=",
      description:
        "Suprafață durabilă de lemn care protejează tăișul cuțitelor.",
    },
    {
      name: "Furculiță pentru paste",
      price: 4.49,
      img: "https://i.ebayimg.com/images/g/eb8AAOSwQ7tjSbf~/s-l1200.jpg",
      description: "Design special pentru a servi pastele cu ușurință.",
    },
    {
      name: "Curățător (Piler)",
      price: 4.99,
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/peeler/7/7/b/1-plyss-09-kitchenfest-yes-original-imagr6r4dzjc4kpk.jpeg?q=90&crop=false",
      description: "Instrument eficient pentru îndepărtarea rapidă a cojii.",
    },
    {
      name: "Răzătoare tip cutie",
      price: 6.99,
      img: "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202450/0021/microplane-box-grater-o.jpg",
      description: "Patru fețe diferite pentru diverse tipuri de răzuire.",
    },
    {
      name: "Feliator Mandolină",
      price: 14.99,
      img: "https://www.iqliving.com/cdn/shop/products/4_55184_2000x.jpg?v=1602084848",
      description: "Feliați legumele cu grosime uniformă și rapiditate.",
    },
    {
      name: "Piuliță și pistil",
      price: 11.99,
      img: "https://media.istockphoto.com/id/465742558/photo/dark-gray-granite-mortar-and-pestle-set-on-textured-counter.jpg?s=612x612&w=0&k=20&c=8rxBuPP3wGKHKwIOiDKtjxa1OVDe-TToBksbPQNx1LM=",
      description:
        "Ideal pentru măcinarea condimentelor și prepararea sosurilor.",
    },
    {
      name: "Sucitor",
      price: 8.49,
      img: "https://zayanguide.com/wp-content/uploads/2024/10/What-Is-A-Rolling-Pin.jpg",
      description:
        "Indispensabil pentru întinderea aluatului de patiserie sau pizza.",
    },
    {
      name: "Set căni de măsurat",
      price: 5.99,
      img: "https://t4.ftcdn.net/jpg/01/18/30/87/360_F_118308702_60Yo4c1wnpYkkt7SAB9Kdy7hSqykFytC.jpg",
      description: "Măsurători precise pentru ingredientele solide și lichide.",
    },
    {
      name: "Set linguri de măsurat",
      price: 3.99,
      img: "https://thecooksedge.com/cdn/shop/products/BC9BD53E-E22E-4899-8655-B7D61257B607_1_105_c.jpg?v=1641932781&width=320",
      description: "Mici cantități măsurate perfect pentru rețete reușite.",
    },
    {
      name: "Boluri de amestecat (set de 3)",
      price: 9.99,
      img: "https://www.culinaris.de/media/5c/f5/6c/1717485690/40503_-_Set_Margrethe-2.jpg",
      description: "Set de boluri de diferite mărimi pentru orice preparat.",
    },
    {
      name: "Strecurătoare din inox",
      price: 7.99,
      img: "https://cdn.create.vista.com/api/media/small/447275883/stock-photo-empty-sieve-strainer-stainless-metal-handles-front-view",
      description:
        "Durabilă și ușor de curățat, perfectă pentru paste sau legume.",
    },
    {
      name: "Tel",
      price: 3.99,
      img: "https://images.firma-gamma.ru/images/3/8/g73241479974x.jpg",
      description: "Pentru amestecarea cremelor și baterea ouălor rapid.",
    },
    {
      name: "Clește din inox",
      price: 5.99,
      img: "https://products.radacutlery.com/cdn/shop/products/9-12-inch-tongs-both2_1618fee2-913f-49a3-a342-0091d71d10f2_1200x.jpg?v=1655991865",
      description: "Manevrare sigură și igienică a alimentelor fierbinți.",
    },
    {
      name: "Polonic",
      price: 3.99,
      img: "https://c1.wallpaperflare.com/preview/488/352/49/spoon-plastic-products.jpg",
      description: "Ideal pentru servirea supelor și ciorbelor.",
    },
    {
      name: "Paletă cu sloturi",
      price: 3.49,
      img: "https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202440/0038/img148m.jpg",
      description: "Permite scurgerea grăsimii sau a lichidului în exces.",
    },
    {
      name: "Set linguri de lemn (3 buc)",
      price: 5.99,
      img: "https://lancastercastiron.com/cdn/shop/products/Handmadewoodenspoons_grande.jpg?v=1611341846",
      description: "Naturale și blânde cu vasele antiaderente.",
    },
    {
      name: "Spatulă din silicon",
      price: 4.99,
      img: "https://m.media-amazon.com/images/I/810+sEadfAL._AC_UF350,350_QL80_.jpg",
      description:
        "Rezistentă la căldură, potrivită pentru orice tip de mixaj.",
    },
    {
      name: "Spatulă pentru pește",
      price: 5.99,
      img: "https://cb.scene7.com/is/image/Crate/OXOFishSpatulaSHF16?$web_pdp_main_carousel_med$",
      description:
        "Subțire și flexibilă pentru a întoarce peștele fără a-l rupe.",
    },
    {
      name: "Foarfece de bucătărie",
      price: 7.99,
      img: "https://m.media-amazon.com/images/I/71wbdrm5dCS._AC_UF894,1000_QL80_.jpg",
      description: "Multifuncțională, de la tăiat ierburi la ambalaje.",
    },
    {
      name: "Presă de usturoi",
      price: 6.99,
      img: "https://ae01.alicdn.com/kf/He538aa44cca84d8cb599841c9beb2d76Q.jpg_640x640q90.jpg",
      description: "Mărunțește usturoiul rapid, eliberând întreaga aromă.",
    },
    {
      name: "Deschizător de conserve manual",
      price: 6.49,
      img: "https://azure-merchants.zammit.shop/active-storage/lbkn7e4filcbxw0bhd4dmem31uso",
      description: "Sigur și ușor de utilizat pentru orice tip de conservă.",
    },
    {
      name: "Răzătoare fină / Zester",
      price: 7.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdoYVuhLA9jnQg7PPDSGJXMnFBz4mlVUJzcnVPXQTOhIeeyc93sNNPVVe_NjBOvLq3EE&usqp=CAU",
      description: "Excelentă pentru coaja de citrice sau parmezan.",
    },
    {
      name: "Pensulă de bucătărie (silicon)",
      price: 3.49,
      img: "https://m.media-amazon.com/images/I/518-m8G+G6L._AC_UF350,350_QL80_.jpg",
      description: "Pentru ungerea uniformă a preparatelor înainte de coacere.",
    },
    {
      name: "Termometru digital pentru carne",
      price: 9.99,
      img: "https://m.media-amazon.com/images/I/51MhT2XzJGL.jpg",
      description: "Asigură gătirea fripturii la temperatura optimă.",
    },
  ];

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
            <img src="${product.img}" width="200px" height="150px">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
            <button class="add-to-cart">Adaugă în Coș</button>
        `;

    div.querySelector(".add-to-cart").addEventListener("click", () => {
      addToCart(product);
      updateCartCount();
      window.dispatchEvent(new Event("storage"));
    });

    productList.appendChild(div);
  });

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  window.addEventListener("storage", updateCartCount);
  updateCartCount();
});
