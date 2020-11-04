const cellsArray = Array.from(document.getElementsByClassName("cell")); // массив ячеек с цветом
const fieldsArray = Array.from(document.getElementsByClassName("field")); // массив полей, доступных с раскрашиванию

let cellBackgroundProperty; // значение свойства background ячейки, по которой кликнули
let fieldToSetBackground; // DOM-елемент - поле, которое мы будем закрашивать

for (i = 0; i < cellsArray.length; i++) {
    cellsArray[i].addEventListener("click", cellClick);
} // пока нажимаем на ячейки с цветом, запускаем функцию на клик

function cellClick(clickedCell) {
    cellToGetBackground = clickedCell.target;
    getColorProperty(cellToGetBackground);
} // когда кликаем на ячейку с цветом, вызываем ф-ю получения значения css свойства (цвет фона)

function getColorProperty(cellToGetBackground) {
    cellBackgroundProperty = getComputedStyle(cellToGetBackground,null).getPropertyValue('background');
} // coздаем переменную, в которую записываем значение css свойства (цвет фона) текущей ячейки

for (i = 0; i < fieldsArray.length; i++) {
    fieldsArray[i].addEventListener("click", fieldClick);
} // пока нажимаем на поля, вызываем функцию клика

function fieldClick(clickedField) {
    if ( cellBackgroundProperty != undefined ) {
        fieldToSetBackground = clickedField.target.id;
        setColorProperty(fieldToSetBackground, cellBackgroundProperty);
    } else {
        console.log("cellBackgroundProperty = undefined");
        alert("***Please choose color first***");
        return;
    }
} //если мы уже выбрали цвет кликом на ячейку, то на клик на поле достаем id поля, 
// на которое кликнули и вызываем функцию применения нового фона;
// иначе - выход из функции

function setColorProperty(coloredField, addedColor) {
    console.log("cellBackgroundProperty != undefined");
    fieldToSetBackground = document.getElementById(coloredField);
    fieldToSetBackground.style.background = addedColor;
} // выполняем перезапись css свойства поля-цели на выбранный ранее по клику на ячейку с цветом фон 




