var score = 0;
var cross = true;
document.onkeydown = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) {
        var ss = document.querySelector('.boy');
        ss.classList.remove('animboy');
        ss.classList.add('animboy');
        setTimeout(() => {
            ss.classList.remove('animboy');
        }, 600)
    }
    if (e.keyCode == 39) {
        var ss = document.querySelector('.boy');
        var bx = parseInt(window.getComputedStyle(ss, null).getPropertyValue('left'));
        bx = bx + 100;
        if (bx < 800) {
            ss.style.left = bx + "px";
            ss.style.transition = "ease all .5s";
        }

    }
    if (e.keyCode == 37) {
        var ss = document.querySelector('.boy');
        var bx = parseInt(window.getComputedStyle(ss, null).getPropertyValue('left'));
        bx = bx - 100;
        if (bx > 100)
            ss.style.left = bx + "px";
        ss.style.transition = "ease all .5s";

    }

}

document.onclick = function () {


    var ss = document.querySelector('.boy');
    ss.classList.remove('animboy');
    ss.classList.add('animboy');
    setTimeout(() => {
        ss.classList.remove('animboy');
    }, 600)


}

var myvar = setInterval(start, 10);

function start() {
    var boy = document.querySelector('.boy');
    var car = document.querySelector('.car');
    var gameover = document.querySelector('.gameover');
    var finalscore = document.querySelector('#final');
    var bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('right'));
    var by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('bottom'));
    var cx = parseInt(window.getComputedStyle(car, null).getPropertyValue('right'));
    var cy = parseInt(window.getComputedStyle(car, null).getPropertyValue('bottom'));
    var diffx = bx - cx;
    var diffy = by - cy;


    if (diffy < 80 && diffx < 50 && diffx > -70) {
        boy.classList.add('boyout');
        car.classList.remove('caranim');
        boy.classList.remove('boy');
        boy.classList.add('boy2');
        clearInterval(myvar);

        finalscore.innerHTML = score;
        gameover.style.visibility = "visible";

        setTimeout(() => {
            boy.classList.remove('boyout');
            car.classList.add('caranim');
            boy.classList.add('boy');
            boy.classList.remove('boy2');
            var myvar = setInterval(start, 10);
            score = 0;
            gameover.style.visibility = "hidden";
            doooo();
        }, 2000);

    }

    else if (diffx < -70 && cross) {
        score++;
        var dd = document.querySelector('.caranim');
        var du = parseFloat(window.getComputedStyle(dd, null).getPropertyValue('animation-duration'));
        du = du - .01;
        dd.style.animationDuration = du + "s";
        doooo();
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 500)
    }

    console.log(score);



}
function doit() {
    var s = document.querySelector('.car');
    s.classList.remove('caranim');

}
function doo() {
    document.location.reload(true);
}
setInterval(() => {
    console.clear();
}, 1000);
function doooo() {
    var ds = document.querySelector('.Score');
    ds.innerHTML = score;
}




// function dore() {

//     var boy = document.querySelector('.boy');
//     var car = document.querySelector('.car');
//     var gameover = document.querySelector('.gameover');
//   boy.classList.remove('boyout');
//     car.classList.add('caranim');
//      boy.classList.add('boy');
//      boy.classList.remove('boy2');
//     var myvar = setInterval(start, 10);
//     score = 0;
//     gameover.style.visibility = "hidden";
// }