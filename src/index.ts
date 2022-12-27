const gridcont = document.querySelector('.grid-container');
const para = document.getElementsByClassName('para-size')[0];
const inputslide = document.getElementById('grid-input');
const apply = document.getElementById('applybtn');
const clear = document.getElementById('clearbtn');
const rainbow = document.getElementById('rb-mode');
const colorBtn = document.getElementById('color-mode');
const maincontainer = document.querySelector('.main-container');
let isColorMode: boolean = false;
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

rainbow?.addEventListener('click', () => {
    isColorMode = false;
     items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            let color = getRandomColor();
            item.style.backgroundColor = color;
            if (!isColorMode) {
                maincontainer?.setAttribute('style', `background-color: ${color}`);
            }
        });
     });
});

colorBtn?.addEventListener('click', () => {
    isColorMode = true;
    maincontainer?.setAttribute('style', 'background-color: white');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = (<HTMLInputElement>document.getElementById('colorpick')).value;
        });
    });
});

function createGrid(sizeRow: number, sizeCol: number): void {
    gridcont?.setAttribute('style', `--grid-cols: ${sizeRow}; --grid-rows: ${sizeRow}`)
    for (let i: number = 0; i < (sizeRow * sizeCol); i++) {
        let item = document.createElement('div');
        item.className = 'grid-item';
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = (<HTMLInputElement>document.getElementById('colorpick')).value;
        });
        gridcont?.appendChild(item);
    }
}

function getRandomColor(): string {
    const randomColor: string = Math.floor(Math.random()*16777215).toString(16);
    const colorStr: string = "#" + randomColor;
    return colorStr;    
}