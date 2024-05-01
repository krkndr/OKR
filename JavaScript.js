
function openUserDialog() {
    let userName = prompt("Введіть ваше ім'я:");
    if (userName === null) {
        alert("Діалог завершено");
    } else if (userName === "") {
        alert("Будь ласка, введіть ваше ім'я");
        openUserDialog();
    }
    else{
        alert("Привіт, " + userName + "! Ласкаво просимо до нашого сайту!");
        let choice;
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
    }
}
function showDeveloperInfo(lastName, firstName, position = "Студентка КПІ") {
    alert(`Прізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}


function compareAndAlert() {
    let firstString = prompt("Введіть перший рядок:");
    if (firstString === null || firstString.trim() === "") {
        alert("Перший рядок не введено або введено порожній рядок.");
        return;
    }

    let secondString = prompt("Введіть другий рядок:");
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
    let newPageUrl = "catalog.html";
    location.href = newPageUrl;
}

function changeById() {
    let element = document.getElementById("flag_read");
    element.textContent = "Прочитано";
    element.style.backgroundColor = '#a3b18a';
}

function changeByQuery() {
    let elements = document.querySelectorAll(".subscription");
    elements.forEach(function (element) {
        element.textContent = "Підписано";
        element.style.color = '#606c38';
    });
}

function showProperties() {
    let divNode = document.getElementById("myDiv");

    let innerHTML = "innerHTML: " + divNode.innerHTML;
    let outerHTML = "outerHTML: " + divNode.outerHTML;
    let nodeValue = "nodeValue / data: " + divNode.firstChild.data; 
    let textContent = "textContent: " + divNode.textContent;

    let message = innerHTML + "\n" + outerHTML + "\n" + nodeValue + "\n" + textContent;
    alert(message);
}

function manipulateDocument() {
    
    // Створення нового елемента <p>
    let newParagraph = document.createElement("p");

    // Створення текстового вузла
    let textNode = document.createTextNode("Це новий параграф");

    // Додавання текстового вузла в елемент <p>
    newParagraph.appendChild(textNode);

    // Отримання контейнера
    let container = document.getElementById("container");

    // Додавання нового елемента в кінець контейнера
    container.append(newParagraph);

    // Вставка нового елемента перед першим елементом контейнера
    container.prepend(document.createElement("hr"));

    // Вставка нового елемента після контейнера
    container.after(document.createElement("hr"));

    // Заміна першого параграфа новим текстовим вузлом
    let newText = document.createTextNode("Новий перший параграф");
    let firstParagraph = document.querySelector("#container p");
    firstParagraph.replaceWith(newText);

    // Видалення другого параграфа
    let secondParagraph = document.querySelector("#container p:nth-child(2)");
    secondParagraph.remove();
}

function showWrite() {
    document.write("<p>Це текст, доданий за допомогою document.write()</p>");
}

function changeColorSocialLink() {
    // Отримання елементу заголовка
    var header = document.getElementById('socialLink');
    // Зміна кольору заголовка
    header.style.color = '#432818'; // Новий колір
}

// Функція для зміни кольору заголовка
function changeColorNovelty() {
    // Отримання елементу заголовка
    var novelty = document.getElementById('novelty');
    // Зміна кольору заголовка
    novelty.style.color = '#432818'; // Новий колір
}

// Призначення функції-обробника події через властивість
//document.getElementById('novelty').onmouseover = changeColorNovelty;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('novelty').onmouseover = changeColorNovelty;
});

