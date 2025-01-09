let cookie = document.getElementById("cookie");
let displayCookies = document.getElementById("displayCookies");
let upgradeClicker = document.getElementById("upgClicker");
let displayUpgradeCost = document.getElementById("displayUpgradeCost");
let autoClicker = document.getElementById("autoClicker");
let displayAutoClickerCost = document.getElementById("displayAutoClickerCost");

cookie.addEventListener("click", cookieClicked);
upgradeClicker.addEventListener("click", upgradeClickerClicked);
autoClicker.addEventListener("click", autoClickerClicked);

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

setInterval(function () {
    cookies += autoClickers * 0.1;
    displayCookiesAmt();
}, 1000);
