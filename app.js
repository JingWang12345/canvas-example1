const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

const point = {
    x: Math.random() * 600,
    y: Math.random() * 600
}


// let red = '130'
// let green = '0';
// let blue = '130';
// let alpha = '1';

for (let i = 0; i < 100; i++) {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();

    
   point.color = `rgba(${red},${green},${blue},${alpha})`
    
}

setInterval(() => {

   const randomX = (Math.random()*4)-2;
   const randomY = (Math.random()*4)-2;

    ctx.strokeStyle = point.color;
    ctx.strokeRect(point.x, point.y, 2, 2);
    point.x += randomX;
    point.y += randomY;
}, 1);

// function darken() {
//     setInterval(() => {
//         ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
//     ctx.fillRect(0, 0, 600, 600);
//     }, 10);
// }

// darken()