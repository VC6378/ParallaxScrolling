var text = document.getElementById('text');
var bird1 = document.getElementById('bird1');
var bird2 = document.getElementById('bird2');
var forest = document.getElementById('forest');
var water = document.getElementById('water');
var rocks = document.getElementById('rocks');

window.addEventListener('scroll',function(){
    var co = this.window.scrollY;
    text.style.top = 50+co*-0.35 + '%';
    bird1.style.top = 10+co*-.12 + '%';
    bird1.style.right = 9+co*-.12 + '%';
    // bird1.style.top = co*-1.6+'px';
    // bird1.style.left = co*1.02 + 'px';
    bird2.style.top = 10+co*-.12 + '%';
    bird2.style.left = 9+co*-.12 + '%';
    forest.style.top = co*.10 + 'px';
    // forest.style.opacity = 2-co*0.0051;
    // rocks.style.bottom = co*0.3 + 'px';
    rocks.style.opacity = 2-co*0.0051;
    // water.style.opacity = 2-co*0.0051;
});