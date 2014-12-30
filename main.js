window.addEventListener('load', function() {
    var canvasEl = document.getElementById('myCanvas');
    var ctx = canvasEl.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(0,0,200,100);
});