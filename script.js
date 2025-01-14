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
    if (cookies >= 5) {
        cookie.style.backgroundImage = "url('https://www.bing.com/ck/a?!&&p=ce35f07ada2f4fdc6bb3923d8fae3ab0be32980663cc5be635f773ce0885396eJmltdHM9MTczNjgxMjgwMA&ptn=3&ver=2&hsh=4&fclid=29e9ad18-2baf-6629-2d08-b9c72abb6707&u=a1L2ltYWdlcy9zZWFyY2g_cT1nb2t1JTIwcGl4ZWxhcnQmRk9STT1JUUZSQkEmaWQ9QzVFNDkxRDNCNjYyQTlDODM3RTAzNTExRjhFQjE1NjcyMzZCQTMxNg&ntb=1')"; // Gohan
        alert("SSJ");
        changeImage1000.classList.remove("hidden"); // Mostra o botão de 1000 cliques
        changeImage500.remove(); // Remove o botão de 500 cliques
    } else {
        alert("Cookies insuficientes! Você precisa de pelo menos 500 cookies.");
    }
}


function changeImageAt1000() {
    if (cookies >= 10) {
        cookie.style.backgroundImage = "url('https://www.bing.com/ck/a?!&&p=ce35f07ada2f4fdc6bb3923d8fae3ab0be32980663cc5be635f773ce0885396eJmltdHM9MTczNjgxMjgwMA&ptn=3&ver=2&hsh=4&fclid=29e9ad18-2baf-6629-2d08-b9c72abb6707&u=a1L2ltYWdlcy9zZWFyY2g_cT1nb2t1JTIwcGl4ZWxhcnQmRk9STT1JUUZSQkEmaWQ9QzVFNDkxRDNCNjYyQTlDODM3RTAzNTExRjhFQjE1NjcyMzZCQTMxNg&ntb=1')"; // Vegeta
        alert("Imagem alterada para Vegeta!");
    } else {
        alert("Cookies insuficientes! Você precisa de pelo menos 1000 cookies.");
    }
}

setInterval(function () {
    cookies += autoClickers * 0.1;
    displayCookiesAmt();
}, 1000);
