console.log('ecco');

const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

for (let i = 0; i < 100; i++) {
   const originx = Math.random() * 600;
   const originy = Math.random() * 600;
   const width = Math.random() * 100;
   const height = Math.random() * 100;

   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
   const alpha = Math.random();

   ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`
   console.log(ctx.fillStyle);
   ctx.fillRect(originx, originy, width, height);
   // ctx.strokeStyle = 'white'
   // ctx.strokeRect(originx, originy, width, height);
}