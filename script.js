let cookie = document.getElementById("cookie");
let displayCookies = document.getElementById("displayCookies");
let upgradeClicker = document.getElementById("upgClicker");
let displayUpgradeCost = document.getElementById("displayUpgradeCost");
let autoClicker = document.getElementById("autoClicker");
let displayAutoClickerCost = document.getElementById("displayAutoClickerCost");
let changeImage500 = document.getElementById("changeImage500");
let changeImage1000 = document.getElementById("changeImage1000");

cookie.addEventListener("click", cookieClicked);
upgradeClicker.addEventListener("click", upgradeClickerClicked);
autoClicker.addEventListener("click", autoClickerClicked);
changeImage500.addEventListener("click", changeImageAt500);
changeImage1000.addEventListener("click", changeImageAt1000);

let cookies = 0;
let multiplier = 1;
let multiplierCost = 25;
let autoClickers = 0;
let autoClickerCost = 50;



function cookieClicked() {
    cookies += multiplier;
    displayCookiesAmt();
}

function displayCookiesAmt() {
    displayCookies.innerHTML = `<p>Você tem ${Math.floor(cookies * 100) / 100} cookies!</p>`;
}

function upgradeClickerClicked() {
    if (cookies >= multiplierCost) {
        cookies -= multiplierCost;
        multiplier += 1;
        multiplierCost = Math.floor(multiplierCost * 1.3);
        displayUpgradeCost.innerHTML = `<p>Upgrade custa ${multiplierCost} cookies!</p>`;
        displayCookiesAmt();
    } else {
        alert("Cookies não suficientes");
    }
}

function autoClickerClicked() {
    if (cookies >= autoClickerCost) {
        cookies -= autoClickerCost;
        autoClickers += 1;
        autoClickerCost = Math.floor(autoClickerCost * 1.3);
        displayAutoClickerCost.innerHTML = `<p>Auto clicker custa ${autoClickerCost} cookies!</p>`;
        displayCookiesAmt();
    } else {
        alert("Cookies não suficientes");
    }
}

function changeImageAt500() {
    if (cookies >= 500) {
        cookie.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Gohan_Character.png/220px-Gohan_Character.png')"; // Gohan
        alert("Imagem alterada para Gohan!");
        changeImage1000.classList.remove("hidden"); // Mostra o botão de 1000 cliques
        changeImage500.remove(); // Remove o botão de 500 cliques
    } else {
        alert("Cookies insuficientes! Você precisa de pelo menos 500 cookies.");
    }
}


function changeImageAt1000() {
    if (cookies >= 1000) {
        cookie.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/1/1f/Vegeta_Character.png')"; // Vegeta
        alert("Imagem alterada para Vegeta!");
    } else {
        alert("Cookies insuficientes! Você precisa de pelo menos 1000 cookies.");
    }
}

setInterval(function () {
    cookies += autoClickers * 0.1;
    displayCookiesAmt();
}, 1000);
