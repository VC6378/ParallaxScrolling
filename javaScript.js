var text = document.getElementById('text');
var bird1 = document.getElementById('bird1');
var bird2 = document.getElementById('bird2');
var forest = document.getElementById('forest');
var water = document.getElementById('water');
var rocks = document.getElementById('rocks');

window.addEventListener('scroll',function(){
    var co = this.window.scrollY;
    text.style.top = 55+co*-0.35 + '%';
    console.log(text.style.top);
    bird1.style.top = 0+co*-.12 + '%';
    bird1.style.left = -4+co*.05 + '%';
    bird2.style.top = 10+co*-.12 + '%';
    bird2.style.right = 0+co*.05 + '%';
    rocks.style.opacity = 2-co*0.0051;
});