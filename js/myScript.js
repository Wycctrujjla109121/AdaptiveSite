"use strict"

let totalCoast;

alert("Доброго времени суток!");

if (confirm("Хотите подобрать сайт ?") == true)
{
let typeSite = prompt("Выберите тип сайта:\n1 - Визитка - 1200 руб ,\n2 - Портал - 1600 руб,\n3 - Магазин - 2500 руб");

let typeSiteMatrix =     // Матрица ТИП САЙТА!
    [
        ["Визитка", 1200],
        ["Портал", 1600],
        ["Магазин", 2500],
    ];

let designSiteMatrix =   //  Матрица ДИЗАЙН САЙТА
    [
        ["Жёсткий", 1000],
        ["Гибкий", 1500],
        ["Комбинированный", 2500],
    ];

let adaptiveSiteMatrix =    //Матрица Адаптивности сайта
    [
        ["Без адаптива", 0],
        ["Мобильная адаптивность", 2500],
        ["Под любые устройства", 4000],
    ];

let checkType = true;
let typeSiteRow;
while (checkType) {
    if (typeSite == 1) {
        typeSiteRow = typeSiteMatrix[typeSite - 1];
        checkType = false;
    }
    else if (typeSite == 2) {
        typeSiteRow = typeSiteMatrix[typeSite - 1];
        checkType = false;
    }
    else if (typeSite == 3) {
        typeSiteRow = typeSiteMatrix[typeSite - 1];
        checkType = false;
    }
    else {
        alert("К сожалению данного варианта нет в списке")
        typeSite = prompt("Выберите тип сайта:\n1 - Визитка - 1200 руб ,\n2 - Портал - 1600 руб,\n3 - Магазин - 2500 руб");
    }
}



let typeSiteNumber = typeSiteMatrix[typeSite - 1];   //Выбираем нужную нам строку


let design = prompt("Выберите дизайн сайта:\nЖёсткий - 1000 руб,\nГибкий - 1500 руб,\nКомбинированный - 2500 руб");
let checkDesign = true;
let designNumber;
let designRow; //Выбираем нужную нам строку
while (checkDesign) {
    if (design == "Жёсткий" || design == "Жесткий" || design == "жёсткий" || design == "жесткий") {
        designNumber = 0;
        designRow = designSiteMatrix[designNumber]; //Выбираем нужную нам строку
        checkDesign = false;
    }
    else if (design == "Гибкий" || design == "гибкий") {
        designNumber = 1;
        designRow = designSiteMatrix[designNumber]; //Выбираем нужную нам строку
        checkDesign = false;
    }
    else if (design == "Комбинированный" || design == "комбинированный") {
        designNumber = 2;
        designRow = designSiteMatrix[designNumber]; //Выбираем нужную нам строку
        checkDesign = false;
    }
    else {
        alert("К сожалению такого варианта нет")
        design = prompt("Выберите дизайн сайта:\nЖёсткий - 1000 руб,\nГибкий - 1500 руб,\nКомбинированный - 2500 руб");
    }
}




let adaptiveSiteNumber = prompt("Выберите адаптивность сайта: \n1 без адаптива - 0 руб,\n2 Мобильная - 2500 руб,\n3 под все устройства - 4000 руб");
let adaptiveSiteRow;
let checkAdaptive = true;
while (checkAdaptive) {
    if (adaptiveSiteNumber == 1) {
        adaptiveSiteRow = adaptiveSiteMatrix[adaptiveSiteNumber - 1];
        checkAdaptive = false;
    }
    else if (adaptiveSiteNumber == 2) {
        adaptiveSiteRow = adaptiveSiteMatrix[adaptiveSiteNumber - 1];
        checkAdaptive = false;
    }
    else if (adaptiveSiteNumber == 3) {
        adaptiveSiteRow = adaptiveSiteMatrix[adaptiveSiteNumber - 1];
        checkAdaptive = false;
    }
    else {
        alert("К сожалению такого варианта нет в списке");
        adaptiveSiteNumber = prompt("Выберите адаптивность сайта: \n1 без адаптива - 0 руб,\n2 Мобильная - 2500 руб,\n3 под все устройства - 4000 руб");
    }
}



let typeSitePrice = typeSiteRow[1]; // Вытаскиваем цену за услугу тип сайта
let designPrice = designRow[1];  //Вытаскивания цены за услугу дизайн
let adaptiveSitePrice = adaptiveSiteRow[1] // Вытаскиваем цену за услугу адаптива

totalCoast = typeSitePrice + designPrice + adaptiveSitePrice;

alert("Вы выбрали: тип сайта:\n " + typeSiteRow[0] + ", Цена - " + typeSitePrice)
alert("Дизайн сайта:\n " + designRow[0] + ", Цена - " + designPrice)
alert("Адаптивность сайта:\n " + adaptiveSiteRow[0] + ", Цена - " + adaptiveSitePrice)
alert("Итог по цене: " + totalCoast + " руб");
}
else{
    alert("Очень жаль!");
}