
function openUserDialog() {
    var userName = prompt("Введіть ваше ім'я:");
    if (userName !== null && userName !== "") {
        alert("Привіт, " + userName + "! Ласкаво просимо до нашого сайту!");
        var choice;
        do {
            choice = prompt("Виберіть опцію:\n1. Переглянути каталог книг\n2. Прочитати рецензії\n3. На головну сторінку\n0. Вийти");
            switch (choice) {
                case "1":
                    alert("Ви обрали перегляд каталогу книг.");
                    break;
                case "2":
                    alert("Ви обрали читати рецензії.");
                    break;
                case "3":
                    alert("Ви обрали головну сторінку.");
                    break;
                case "0":
                    alert("До побачення, " + userName + "! Дякуємо за відвідування нашого сайту.");
                    break;
                default:
                    alert("Невірний вибір. Будь ласка, виберіть опцію знову.");
            }
        } while (choice !== "0");
    } else {
        alert("Будь ласка, введіть ваше ім'я.");
    }
}

// JavaScript.js

function showDeveloperInfo(lastName, firstName, position = "Студентка КПІ") {
    alert(`Прізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}


function compareAndAlert() {
    var firstString = prompt("Введіть перший рядок:");
    if (firstString === null || firstString.trim() === "") {
        alert("Перший рядок не введено або введено порожній рядок.");
        return;
    }

    var secondString = prompt("Введіть другий рядок:");
    if (secondString === null || secondString.trim() === "") {
        alert("Другий рядок не введено або введено порожній рядок.");
        return; 
    }

    if (firstString > secondString) {
        alert("Більший рядок: " + firstString);
    } else if (firstString < secondString) {
        alert("Більший рядок: " + secondString);
    } else {
        alert("Рядки рівні між собою.");
    }
}

function changeBackground() {
    document.body.style.backgroundColor = "#caf0f8";
    setTimeout(function () {
        document.body.style.backgroundColor = ""; 
    }, 30000);
}

function redirectToPage() {
    var newPageUrl = "catalog.html";
    location.href = newPageUrl;
}


function changeById() {
    var element = document.getElementById("myParagraph");
    element.textContent = "Змінений параграф за допомогою getElementById";
}

function changeByQuery() {
    var elements = document.querySelectorAll(".myClass");
    elements.forEach(function (element) {
        element.textContent = "Змінений елемент за допомогою querySelectorAll";
    });
}

function showProperties() {
    var divNode = document.getElementById("myDiv");

    var innerHTML = "innerHTML: " + divNode.innerHTML;
    var outerHTML = "outerHTML: " + divNode.outerHTML;
    var nodeValue = "nodeValue / data: " + divNode.firstChild.textContent; 
    var textContent = "textContent: " + divNode.textContent;

    var message = innerHTML + "\n" + outerHTML + "\n" + nodeValue + "\n" + textContent;
    alert(message);
}

function manipulateDocument() {
    // Створення нового елемента <p>
    var newParagraph = document.createElement("p");

    // Створення текстового вузла
    var textNode = document.createTextNode("Це новий параграф");

    // Додавання текстового вузла в елемент <p>
    newParagraph.appendChild(textNode);

    // Отримання контейнера
    var container = document.getElementById("container");

    // Додавання нового елемента в кінець контейнера
    container.append(newParagraph);

    // Вставка нового елемента перед першим елементом контейнера
    container.prepend(document.createElement("hr"));

    // Вставка нового елемента після контейнера
    container.after(document.createElement("hr"));

    // Заміна першого параграфа новим текстовим вузлом
    var newText = document.createTextNode("Новий перший параграф");
    var firstParagraph = document.querySelector("#container p");
    firstParagraph.replaceWith(newText);

    // Видалення другого параграфа
    var secondParagraph = document.querySelector("#container p:nth-child(2)");
    secondParagraph.remove();
  }