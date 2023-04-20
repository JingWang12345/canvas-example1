const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');



for (let i = 0; i < 100; i++) {
    const point = {
     x: Math.random() * 600,
     y: Math.random() * 600
    }
    const red = Math.floor(Math.random() * 556);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();
    
    point.color = `rgba(${red},${green},${blue},${alpha})`
   
    setInterval(() => {

        const randomX = (Math.random()* 4)-2;
        const randomY = (Math.random()* 4)-2;
     
        ctx.strokeStyle= point.color
         ctx.strokeRect(point.x, point.y, 1,1);
         point.x += randomX;
         point.y += randomY;
     }, 1);
}



