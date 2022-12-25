const gridcont = document.querySelector('.grid-container');
const inputContainer = document.querySelector('.input-container');
const para = inputContainer?.querySelector('p');
const inputslide = document.getElementById('grid-input');
const apply = document.getElementById('applybtn');
const clear = document.getElementById('clearbtn');
let root = document.documentElement;

// Cast result of getElementById to HTMLInputElement to get value 
let gridsize = (<HTMLInputElement>document.getElementById('grid-input')).value;

createGrid(parseInt(gridsize), parseInt(gridsize));
let items = Array.from(document.getElementsByClassName('grid-item') as HTMLCollectionOf<HTMLElement>);

clear?.addEventListener('click', () => {
    items.forEach((item) => {
        item.style.backgroundColor = "white";
    });
});

if (para !== null && para !== undefined) {
    para.textContent = `${gridsize}x${gridsize}`;
}

inputslide?.addEventListener('input', () => {
    if (para !== null && para !== undefined) {
        gridsize = (<HTMLInputElement>document.getElementById('grid-input')).value;
        para.textContent = `${gridsize}x${gridsize}`;
    }
});

apply?.addEventListener('click', () => {
    items.forEach((item) => {
        item.remove();
    });
    createGrid(parseInt(gridsize), parseInt(gridsize));
    items = Array.from(document.getElementsByClassName('grid-item') as HTMLCollectionOf<HTMLElement>);
});


function createGrid(sizeRow: number, sizeCol: number): void {
    gridcont?.setAttribute('style', `--grid-cols: ${sizeRow}; --grid-rows: ${sizeRow}`)
    for (let i: number = 0; i < (sizeRow * sizeCol); i++) {
        let item = document.createElement('div');
        item.className = 'grid-item';
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black"
        });
        gridcont?.appendChild(item);
    }
}