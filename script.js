document.addEventListener("DOMContentLoaded", function () {
let chasing_ball = document.getElementById("chasingBall");
let running_ball = document.getElementById("runningBall");

let position_chasingBall = {x:Math.random() * (window.innerWidth-100), y:Math.random() * (window.innerHeight-100)};
let position_runningBall = {x:Math.random() * (window.innerWidth-100), y:Math.random() * (window.innerHeight-100)};
let direction_runningBall = {x:0,y:0}

function changeDirectionRunningBall(){
    let randomAngle = Math.random() * 2 * Math.PI;
    direction_runningBall.x = Math.cos(randomAngle);
    direction_runningBall.y = Math.sin(randomAngle);
}

function movingRunningBall(){
    let speed = 10;

    position_runningBall.x += direction_runningBall.x*speed;
    position_runningBall.y += direction_runningBall.y*speed;

    position_runningBall.x = Math.max(0,Math.min(window.innerWidth-100,position_runningBall.x));
    position_runningBall.y = Math.max(0,Math.min(window.innerHeight-100,position_runningBall.y));

    running_ball.style.left = position_runningBall.x+"px";
    running_ball.style.top = position_runningBall.y+"px";
}

function movingChaseBall(){
    const speedA = 2; 
    const dx = position_runningBall.x - position_chasingBall.x;
    const dy = position_runningBall.y - position_chasingBall.y;
    const distance = Math.sqrt(dx * dx + dy * dy); 
  
    if (distance > 1) {
        position_chasingBall.x += (dx / distance) * speedA;
        position_chasingBall.y += (dy / distance) * speedA;
    }
  
    chasing_ball.style.left = position_chasingBall.x + 'px';
    chasing_ball.style.top = position_chasingBall.y + 'px';
}

function animate(){
    movingChaseBall();
    movingRunningBall();
    requestAnimationFrame(animate);
}


changeDirectionRunningBall();
setInterval(changeDirectionRunningBall,2000);
animate();
});
