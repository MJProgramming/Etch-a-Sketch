"use strict";
const gridcont = document.querySelector('.grid-container');
const inputContainer = document.querySelector('.input-container');
const para = inputContainer === null || inputContainer === void 0 ? void 0 : inputContainer.querySelector('p');
const inputslide = document.getElementById('grid-input');
const apply = document.getElementById('applybtn');
const clear = document.getElementById('clearbtn');
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
function createGrid(sizeRow, sizeCol) {
    gridcont === null || gridcont === void 0 ? void 0 : gridcont.setAttribute('style', `--grid-cols: ${sizeRow}; --grid-rows: ${sizeRow}`);
    for (let i = 0; i < (sizeRow * sizeCol); i++) {
        let item = document.createElement('div');
        item.className = 'grid-item';
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black";
        });
        gridcont === null || gridcont === void 0 ? void 0 : gridcont.appendChild(item);
    }
}
//# sourceMappingURL=index.js.map