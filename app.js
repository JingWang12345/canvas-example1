const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

const point = {
    x: 300,
    y: 300
}


let red = '130'
let green = '0';
let blue = '130';
let alpha = '1';

for (let i = 0; i < 100; i++) {
    const originx = Math.random() * 600;
    const originy = Math.random() * 600;
    const width = Math.random() * 100;
    const height = Math.random() * 100;

    
   point.color = `rgba(${red},${green},${blue},${alpha})`
    
}

setInterval(() => {

   const randomX = (Math.random()*4)-2;
   const randomY = (Math.random()*4)-2;

    ctx.fillStyle = point.color;
    ctx.fillRect(point.x, point.y, 2, 2);
    point.x += randomX;
    point.y += randomY;
}, 1);

function darken() {
    setInterval(() => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
    ctx.fillRect(0, 0, 600, 600);
    }, 10);
}

darken()