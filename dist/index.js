"use strict";
const gridcont = document.querySelector('.grid-container');
const para = document.getElementsByClassName('para-size')[0];
const inputslide = document.getElementById('grid-input');
const apply = document.getElementById('applybtn');
const clear = document.getElementById('clearbtn');
const rainbow = document.getElementById('rb-mode');
const colorBtn = document.getElementById('color-mode');
const maincontainer = document.querySelector('.main-container');
let isColorMode = false;
let root = document.documentElement;
let gridsize = document.getElementById('grid-input').value;
createGrid(parseInt(gridsize), parseInt(gridsize));
let items = Array.from(document.getElementsByClassName('grid-item'));
clear === null || clear === void 0 ? void 0 : clear.addEventListener('click', () => {
    items.forEach((item) => {
        item.style.backgroundColor = "white";
    });
});
if (para !== null && para !== undefined) {
    para.textContent = `${gridsize}x${gridsize}`;
}
inputslide === null || inputslide === void 0 ? void 0 : inputslide.addEventListener('input', () => {
    if (para !== null && para !== undefined) {
        gridsize = document.getElementById('grid-input').value;
        para.textContent = `${gridsize}x${gridsize}`;
    }
});
apply === null || apply === void 0 ? void 0 : apply.addEventListener('click', () => {
    items.forEach((item) => {
        item.remove();
    });
    createGrid(parseInt(gridsize), parseInt(gridsize));
    items = Array.from(document.getElementsByClassName('grid-item'));
});
rainbow === null || rainbow === void 0 ? void 0 : rainbow.addEventListener('click', () => {
    isColorMode = false;
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            let color = getRandomColor();
            item.style.backgroundColor = color;
            if (!isColorMode) {
                maincontainer === null || maincontainer === void 0 ? void 0 : maincontainer.setAttribute('style', `background-color: ${color}`);
            }
        });
    });
});
colorBtn === null || colorBtn === void 0 ? void 0 : colorBtn.addEventListener('click', () => {
    isColorMode = true;
    maincontainer === null || maincontainer === void 0 ? void 0 : maincontainer.setAttribute('style', 'background-color: white');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = document.getElementById('colorpick').value;
        });
    });
});
function createGrid(sizeRow, sizeCol) {
    gridcont === null || gridcont === void 0 ? void 0 : gridcont.setAttribute('style', `--grid-cols: ${sizeRow}; --grid-rows: ${sizeRow}`);
    for (let i = 0; i < (sizeRow * sizeCol); i++) {
        let item = document.createElement('div');
        item.className = 'grid-item';
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = document.getElementById('colorpick').value;
        });
        gridcont === null || gridcont === void 0 ? void 0 : gridcont.appendChild(item);
    }
}
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const colorStr = "#" + randomColor;
    return colorStr;
}
//# sourceMappingURL=index.js.map