
window.addEventListener('wheel', (e)=>{
    if(e.ctrlKey) e.preventDefault();
},{passive : false});
const aideComm = document.querySelector(".aide1")
const aideTuto = document.querySelector(".aide2")

Comm = document.getElementById('comm');
Tuto = document.getElementById('tuto');

Comm.addEventListener('contextmenu', e => {
    e.preventDefault();
    aideComm.style.display = "flex";
})
Tuto.addEventListener('contextmenu', e => {
  e.preventDefault();
    aideTuto.style.display = "flex";
})
Comm.addEventListener('mouseleave', hideHelp1);
Tuto.addEventListener('mouseleave', hideHelp2);
function hideHelp1(ev) {
    aideComm.style.display = "none";
}
function hideHelp2(ev) {
    aideTuto.style.display = "none";
}

