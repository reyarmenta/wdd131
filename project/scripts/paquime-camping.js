const currentyear = document.querySelector('#currentyear');
const today = new Date();

currentyear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

//Array of camping spots
const campSpots = [
    {
        campName: "Cueva de la Olla",
        water: "yes",
        keys: "no",
        fee: "yes",
        transport: "car, truck, 4x4, motorcycle",
        imageSrc: "images/cueva-olla.webp"
    },
    {
        campName: "El Norte",
        water: "no",
        keys: "yes",
        fee: "no",
        transport: "truck, 4x4, motorcycle",
        imageSrc: "images/el-norte.webp"
    },
    {
        campName: "Ojos de Pratt",
        water: "yes",
        keys: "yes",
        fee: "no",
        transport: "truck, 4x4, motorcycle",
        imageSrc: "images/ojos-de-pratt.webp"
    },
    {
        campName: "Salto de la Liebre",
        water: "yes",
        keys: "yes",
        fee: "no",
        transport: "car, truck, 4x4, motorcycle",
        imageSrc: "images/salto-de-la-liebre.webp"
    },
    {
        campName: "Temple Hill",
        water: "yes",
        keys: "no",
        fee: "no",
        transport: "car, truck, 4x4, motorcycle",
        imageSrc: "images/temple-hill.webp"
    },
];

createCampCard(campSpots);

const allCamps = document.querySelector("#all");

allCamps.addEventListener("click", () => {
    createCampCard(camps);
});

function createCampCard(filteredCamps) {
    document.querySelector(".container").innerHTML = "";
    filteredCamps.forEach(camp => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let water = document.createElement("p");
        let keys = document.createElement("p");
        let fee = document.createElement("p");
        let transport = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = camp.campName;
        water.innerHTML = `<span class="label">Water:</span> ${camp.water}`;
        keys.innerHTML = `<span class="label">Keys:</span> ${camp.keys}`;
        fee.innerHTML = `<span class="label">Fee:</span> ${camp.fee}`;
        transport.innerHTML = `<span class="label">Transport:</span> ${camp.transport}`;
        img.setAttribute("src", camp.imageSrc);
        img.setAttribute("alt", `${camp.campName} Camp`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(water);
        card.appendChild(keys);
        card.appendChild(fee);
        card.appendChild(transport);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}