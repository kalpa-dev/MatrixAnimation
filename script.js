let settings = {
    waveColor: "#00ff00",
    matrixSpeed: 60,
    fontSize: 12,
    chars: "1234567890abcdEFGHijklmnopQRSTUVWxyz&$#@%*",
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let matrix = settings.chars.split('');
let cols = canvas.width / settings.fontSize;
let str = [];

for (let a = 0; a < cols; a++) {
    str[a] = 1;
}
function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = settings.waveColor;
    ctx.font = `${settings.fontSize}px arial`;

    for (let i = 0; i < str.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * settings.fontSize, str[i] * settings.fontSize);

        if (str[i] * settings.fontSize > canvas.height && Math.random() > 0.975) {
            str[i] = 0;
        }
        str[i]++;
    }
}

setInterval(draw, settings.matrixSpeed);
window.addEventListener('resize', () => location.reload());