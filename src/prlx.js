document.addEventListener("mousemove", prlx);
function prlx(e){
this.querySelectorAll('.layer').forEach(layer => {
var sp= layer.getAttribute('data-speed');
const prlxx = (window.innerWidth - e.pageX*sp)/80;
const prlxy = (window.innerHeight - e.pageY*sp)/80;
layer.style.transform = `translateX(${prlxx}px) translateY(${prlxy}px)`;
layer.style.userSelect = "none";

    });
}
