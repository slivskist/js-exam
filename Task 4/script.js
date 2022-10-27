/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const output = document.getElementById("output");

const createCard = (brand) => {

    output.style.display = "grid";
    output.style.gridTemplateColumns = "repeat(3, 1fr)";
    output.style.gap = "1rem";
    output.style.justifyItems = "center";
    output.style.padding = "1rem"

    const brandCard = document.createElement("div");
    brandCard.style.width = "100%";
    brandCard.style.border = "1px solid black";
    brandCard.style.borderRadius = "10px";
    brandCard.style.padding = "2px";

    const carBrand = document.createElement("h3");
    carBrand.textContent = brand.brand;
    carBrand.style.textAlign = "center";
    carBrand.style.marginBottom = "1rem";

    const models = document.createElement("p");
    models.textContent = brand.models.join(", ");
    models.style.height = "100%";
    models.style.width = "100%";
    models.style.borderRadius = "5px";
    models.style.textAlign = "center";

    brandCard.append(carBrand, models);
    output.append(brandCard);
};

const showBrands = async () => {
    const response = await fetch(ENDPOINT);

    const data = await response.json();
    
    data.forEach(brand => createCard(brand));
};


showBrands();