/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const button = document.getElementById("btn");
const output = document.getElementById("output");
const initialMessage = document.getElementById("message");

const ENDPOINT = 'https://api.github.com/users';

const createCard = (user) => {

    output.style.display = "grid";
    output.style.gridTemplateColumns = "repeat(5, 1fr)";
    output.style.gap = "5px";
    output.style.alignItems = "center";
    output.style.justifyItems = "center";

    const userCard = document.createElement("div");
    userCard.style.width = "100%";
    userCard.style.border = "1px solid black";
    userCard.style.borderRadius = "5px";
    userCard.style.padding = "2px";

    const login = document.createElement("h3");
    login.textContent = user.login;
    login.style.textAlign = "center";
    login.style.marginBottom = "3px";

    const avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    avatar.style.height = "100%";
    avatar.style.width = "100%";
    avatar.style.margin = "0 auto";
    avatar.style.borderRadius = "5px";

    userCard.append(login, avatar);
    output.append(userCard);
};

const showUsers = async () => {
    const response = await fetch(ENDPOINT);

    const data = await response.json();
    
    data.forEach(user => createCard(user));
};


button.addEventListener("click", e => {
    e.preventDefault();
    initialMessage.remove();
    showUsers();
});

