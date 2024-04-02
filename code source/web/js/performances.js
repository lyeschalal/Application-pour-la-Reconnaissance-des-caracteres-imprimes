const circle2 = document.querySelector(".circle-2")
const circumference = circle2.getTotalLength();
console.log(circumference)
const fiabilite = document.querySelector(".taux-derreur")
let i = 0;
document.getElementById("corr").disabled = true;
setTimeout(function(){document.getElementById("corr").disabled = false;},1000); 


function tauxderreurfunction(fiabiliteconst) {
    circle2.style.strokeDasharray = circumference
    circle2.style.strokeDashoffset = circumference - (fiabiliteconst / 100) * circumference
    fiabilite.innerHTML = fiabiliteconst + "%"
}
tauxderreurfunction(3.81)
  

const circle3 = document.querySelector(".circle-3")
const fauxnegatifs = document.querySelector(".faux-negatifs")
function fauxnegatifsfunction(fauxnegatifsconst) {
    circle3.style.strokeDasharray = circumference
    circle3.style.strokeDashoffset = circumference - (fauxnegatifsconst / 100) * circumference
    fauxnegatifs.innerHTML = fauxnegatifsconst + "%"
}
fauxnegatifsfunction(0.75)

const circle4 = document.querySelector(".circle-4")
const fauxpositifs = document.querySelector(".fauxpositifs")
function fauxpositifsfunction(fauxpositifsconst) {
    circle4.style.strokeDasharray = circumference
    circle4.style.strokeDashoffset = circumference - (fauxpositifsconst / 100) * circumference
    fauxpositifs.innerHTML = fauxpositifsconst + "%"
}
fauxpositifsfunction(6.57)



//Aide
const aideCorr = document.querySelector(".aide1")
const aidePerf = document.querySelector(".aide2")
const imgaide = document.querySelector(".section-2")
const aidePerf1 = document.querySelector(".aidePerf1")
const aidePerf2 = document.querySelector(".aidePerf2")
const aidePerf3 = document.querySelector(".aidePerf3")
let corr = document.getElementById('corr');
let perf = document.getElementById('perf');
let TE = document.getElementById('TE');
let FN = document.getElementById('FN');
let FP = document.getElementById('FP');
corr.addEventListener('contextmenu', e => {
    e.preventDefault();
    imgaide.style.zIndex = "-1";
    aideCorr.style.display = "flex";

})
corr.addEventListener('mouseleave', e => {
    aideCorr.style.display = "none";
    imgaide.style.zIndex = "0";
})
perf.addEventListener('contextmenu', e => {
    e.preventDefault();
    imgaide.style.zIndex = "-1";
    aidePerf.style.display = "flex";
})
perf.addEventListener('mouseleave', e => {
    aidePerf.style.display = "none";
    imgaide.style.zIndex = "0";
})
TE.addEventListener('contextmenu', e => {
    e.preventDefault();
    aidePerf1.style.display = "flex";

})
TE.addEventListener('mouseleave', e => {
    aidePerf1.style.display = "none";
})
FN.addEventListener('contextmenu', e => {
    e.preventDefault();
    aidePerf2.style.display = "flex";

})
FN.addEventListener('mouseleave', e => {
    aidePerf2.style.display = "none";
})
FP.addEventListener('contextmenu', e => {
    e.preventDefault();
    aidePerf3.style.display = "flex";

})
FP.addEventListener('mouseleave', e => {
    aidePerf3.style.display = "none";
})

