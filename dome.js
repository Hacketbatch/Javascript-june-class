console.log(document.querySelector("h1").textContent);
document.querySelector("h1").textContent = "THE DOM API/INTERFACE";
document.querySelector("h1").setAttribute("id", "ugalinyama");
console.log(typeof document);
//   the whole html is converted to a js object called document
// this object has methods and properties that can be used to manipulate the html document
document.body.append("albert kipchirchir");
// every html element in the page is also an object with propterties and methods to manipulate the elements
document.querySelector("a").style.backgroundColor = "orange";
document.querySelector("a").style.display = "block";

const spanEl = document.createElement("span");
spanEl.textContent = "hello world";
document.querySelector("h1").append(spanEl);

const products = [
  {
    image: "https://example.com/images/laptop.jpg",
    title: "15-inch Gaming Laptop",
    price: 999.99,
  },
  {
    image: "https://example.com/images/smartphone.jpg",
    title: "Smartphone Pro 12",
    price: 699.0,
  },
  {
    image: "https://example.com/images/headphones.jpg",
    title: "Wireless Noise-Cancelling Headphones",
    price: 149.99,
  },
  {
    image: "https://example.com/images/smartwatch.jpg",
    title: "Fitness Smartwatch",
    price: 199.95,
  },
  {
    image: "https://example.com/images/tablet.jpg",
    title: "10-inch Tablet",
    price: 299.5,
  },
  {
    image: "https://example.com/images/camera.jpg",
    title: "DSLR Camera 24MP",
    price: 499.99,
  },
  {
    image: "https://example.com/images/speaker.jpg",
    title: "Bluetooth Speaker",
    price: 79.99,
  },
  {
    image: "https://example.com/images/tv.jpg",
    title: "55-inch 4K Smart TV",
    price: 599.0,
  },
  {
    image: "https://example.com/images/keyboard.jpg",
    title: "Mechanical Gaming Keyboard",
    price: 89.9,
  },
  {
    image: "https://example.com/images/mouse.jpg",
    title: "Wireless Gaming Mouse",
    price: 49.99,
  },
  {
    image: "https://example.com/images/monitor.jpg",
    title: "27-inch LED Monitor",
    price: 249.99,
  },
  {
    image: "https://example.com/images/backpack.jpg",
    title: "Laptop Backpack",
    price: 39.95,
  },
  {
    image: "https://example.com/images/earbuds.jpg",
    title: "True Wireless Earbuds",
    price: 59.99,
  },
  {
    image: "https://example.com/images/charger.jpg",
    title: "Fast Charging USB-C Cable",
    price: 19.99,
  },
  {
    image: "https://example.com/images/router.jpg",
    title: "Wi-Fi 6 Router",
    price: 129.99,
  },
  {
    image: "https://example.com/images/drone.jpg",
    title: "4K Camera Drone",
    price: 399.0,
  },
  {
    image: "https://example.com/images/gamingchair.jpg",
    title: "Ergonomic Gaming Chair",
    price: 179.99,
  },
  {
    image: "https://example.com/images/powerbank.jpg",
    title: "10000mAh Power Bank",
    price: 29.99,
  },
  {
    image: "https://example.com/images/webcam.jpg",
    title: "1080p Webcam",
    price: 69.95,
  },
  {
    image: "https://example.com/images/smartbulb.jpg",
    title: "Smart LED Bulb",
    price: 14.99,
  },
];

products.forEach((item, index) => {
  const liElement = document.createElement("li");
  liElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" >
            <h2>${item.title}</h2>
            <p>Price: $${item.price}</p>
            <button>Buy Now</button>        
        `;
  if (index % 3 == 0) {
    liElement.style.backgroundColor = "orange";
  }
  if (index % 2 == 0) {
    liElement.setAttribute("class", "jfd fdbfdf fjdnfd fdjfn");
  }
  document.getElementById("items-list").append(liElement);
});
