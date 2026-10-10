document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("completedReviews");

    if (reviewCount === null) {
        reviewCount = 0;
    }
    else {
        reviewCount = parseInt(reviewCount, 10);
    }

    reviewCount += 1;

    localStorage.setItem("copmleteReviews", reviewCount);

    const displayElement = document.getElementById("counter");
    if (displayElement) {
        displayElement.textContent = `Total reviews submitted: ${reviewCount}`;
    }
});

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

const currentyear = document.querySelector('#currentyear');
const today = new Date();

currentyear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;