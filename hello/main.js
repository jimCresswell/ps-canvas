window.addEventListener('load', function() {
    var canvasEl = document.getElementById('myCanvas');
    var ctx = canvasEl.getContext('2d');

    ctx.fillStyle='green';
    // Top left origin, X, Y , width, height.
    ctx.fillRect(300, 200, 200, 100);

    ctx.fillStyle='navy';

    // x, y, radius, start angle, end angle, anticlockwise
    ctx.arc(100, 100, 50, 0, 2*Math.PI, false);
    ctx.fill();
});