/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const inputKg = Number(document.getElementById("search").value);


    const weightInLb = inputKg * 2.2046;
    const weightInG = inputKg / 0.001;
    const weightInOz = inputKg * 35.274;

    const output = document.getElementById("output");
    const conversionResult = document.createElement("p");
    conversionResult.innerHTML = `${inputKg}kg yra lygu:<br><br>${weightInLb} svarų<br>${weightInG} gramų<br>${weightInOz} uncijų`;
    conversionResult.style.margin = "0 auto";
    conversionResult.style.color = "green";
    conversionResult.style.textAlign = "center";
    conversionResult.style.fontSize = "2rem";
    output.append(conversionResult);

    setTimeout(() => {
        conversionResult.remove();
        }, 4000);
  });


