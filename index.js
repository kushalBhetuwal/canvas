const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');

const speed = 4;
let position = 50; // Initial position within canvas bounds
let moveSpeed = speed;
let radius = 40;

function moveBall() {
    if (position + radius >= canvas.width) {
        moveSpeed = -speed;
    } else if (position - radius <= 0) {
        moveSpeed = speed;
    }
    position += moveSpeed; // Use += to update position
}

function drawBall() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#62687f";
    context.beginPath();
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill();
}

function animate() {
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
