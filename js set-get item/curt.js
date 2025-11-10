// সব প্রোডাক্টের ডেটা লিস্ট আকারে রাখা হয়েছে (product list)

const product = [
  {
    id: "1",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "2",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "3",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "4",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "5",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "6",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "7",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "8",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "9",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "10",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
  {
    id: "11",
    title: "book title",
    img: "image/istockphoto-173015527-612x612.jpg",
  },
];
// localStorage.removeItem("product");
// DOM থেকে প্রয়োজনীয় এলিমেন্টগুলো নেওয়া হচ্ছে
const mainSection = document.getElementById("mainSection");
const cart_container = document.getElementById("cart-container");
const cart_section = document.getElementById("cart-section"); // cart_container এর ভিতরে cart-section আছে

// যখন কার্টে কোনো product add করা হবে তখন এই array-তে products জমা হবে
let cartProducts = [];

// localStorage থেকে cart এ রাখা product নিয়ে আসা হচ্ছে
let currentCartProduct = JSON.parse(localStorage.getItem("product")) || [];

// যদি localStorage এ product থাকে তাহলে cartProducts এ যোগ করা হবে
if (currentCartProduct) {
  cartProducts = currentCartProduct;
}

// cart এ থাকা product UI তে দেখানোর জন্য function
function addCart() {
  cartProducts.forEach((product) => {
    let div = document.createElement("div");
    cart_section.appendChild(div);
    div.className = "product_item";
    div.setAttribute("data-id", product.id); // product id সেট করা হচ্ছে

    let a = div.getAttribute("data-id");

    let image = document.createElement("img");
    div.appendChild(image);
    image.setAttribute("src", product.img); // product image দেখানোর জন্য

    let p = document.createElement("p");
    p.textContent = product.id; // product id দেখানো হচ্ছে
    div.appendChild(p);

    let removebtn = document.createElement("button");
    removebtn.innerText = "remove"; // remove button তৈরি
    div.appendChild(removebtn);
    removebtn.className = "iamremove";
  });
}

// ✅ addCart() ও removeCartProduct() আলাদা করে কল করা হয়েছে
addCart();
removeCartProduct();

// cart থেকে product remove করার function
function removeCartProduct() {
  cart_section.addEventListener("click", (event) => {
    // যদি ক্লিক করা হয় remove button এ
    if (event.target.tagName === "BUTTON") {
      let parent = event.target.parentElement;

      // ক্লিক করা product এর data-id পাওয়া
      let parentindex = parent.getAttribute("data-id");

      // localStorage থেকে সব cart product নেওয়া
      let cartProducts = JSON.parse(localStorage.getItem("product")) || [];

      // filter দিয়ে সেই product বাদ দেওয়া যেটা remove করা হচ্ছে
      let updatedcart = cartProducts.filter((item) => item.id != parentindex);

      // UI থেকে div remove করা
      parent.remove();

      // নতুন cart data আবার localStorage এ save করা
      localStorage.setItem("product", JSON.stringify(updatedcart));
    }
  });
}

// সব product UI তে দেখানোর function
let allProducts = [];
function productshow() {
  product.forEach((product) => {
    let div = document.createElement("div");
    mainSection.appendChild(div);
    div.className = "product_item";
    div.setAttribute("data-id", product.id);

    let image = document.createElement("img");
    div.appendChild(image);
    image.setAttribute("src", product.img);

    let button = document.createElement("button");
    button.innerText = "add to cart";
    button.className = "cart-btn";

    let icon = document.createElement("i");
    icon.className = "fa-solid fa-cart-plus"; // font awesome icon
    button.appendChild(icon);
    div.appendChild(button);
  });
}
productshow();

// main section এ event listener — চেক করবে add to cart বাটন ক্লিক হয়েছে কিনা
mainSection.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    // যেই product এ ক্লিক করা হয়েছে তার parent div পাওয়া
    let parent = event.target.parentElement;
    let parentID = parent.getAttribute("data-id");

    // product array থেকে clicked product খোঁজা হচ্ছে
    let found = product.find((productId) => productId.id === parentID);

    // newFoundId এর মাধ্যমে unique id তৈরি করা হচ্ছে (auto increment id)
    let newFoundId = 1;
    let getfoundId = JSON.parse(localStorage.getItem("newID")) || [];
    if (getfoundId) {
      newFoundId = getfoundId;
    }

    // product এর id আপডেট করা হচ্ছে
    found.id = newFoundId;
    newFoundId++;

    // updated id লোকালস্টোরেজে সংরক্ষণ
    localStorage.setItem("newID", JSON.stringify(newFoundId));

    // নির্বাচিত product cart array তে push করা হচ্ছে
    cartProducts.push(found);

    // updated cart লোকালস্টোরেজে সংরক্ষণ
    localStorage.setItem("product", JSON.stringify(cartProducts));

    // cart section পরিষ্কার করে নতুন করে cart UI দেখানো হচ্ছে
    cart_section.innerHTML = null;
    addCart();
  }
});
