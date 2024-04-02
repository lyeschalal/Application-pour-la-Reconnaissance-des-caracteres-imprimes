const circle = document.querySelector(".circle-1")
const circumference = circle.getTotalLength();
console.log(circumference)
const fiabilite = document.querySelector(".fiabilite")
let i = 0;
let import_tf = false
let import_tf1
let tab_cr = false
let tableau = [];
let tab = new Array();
let seul_chiffre=true;
let mult_chiffre=false;
let seul_char=false;
let chiffre=true;
let char=false;

document.getElementById("perf").disabled = true;
setTimeout(function(){document.getElementById("perf").disabled = false;},1000); 

function fiabilitefunction(fiabiliteconst) {
    circle.style.strokeDasharray = circumference
    circle.style.strokeDashoffset = circumference - (fiabiliteconst / 100) * circumference
    fiabilite.innerHTML = fiabiliteconst + "%"
}

 
var modal=document.getElementById('mouvement');
var modal1=document.getElementById('chiffre');
var modal2=document.getElementById('lettre');
var modal3=document.getElementById('Unseul');
var modal4=document.getElementById('plusieurs');
var modal5=document.getElementById('div--btn1');
var modal6=document.getElementById('div--btn2');
var modal7=document.getElementById('bouton');
var modal8=document.getElementById('bouton2');
window.onclick = function(event) {
    if (event.target != modal && event.target != document.getElementById("parametre")&& event.target != modal1 && event.target != modal2&& event.target != modal3 && event.target != modal4 && event.target != modal5 && event.target != modal6 && event.target != modal7 && event.target != modal8 ) {
        modal.style.height="0px"; 

    }
  }
document.getElementById("parametre").addEventListener('click',()=>{
    console.log(document.getElementById("mouvement").style.height);
    if(document.getElementById("mouvement").style.height=="" ||document.getElementById("mouvement").style.height=="0px" ){
    if(chiffre==true) document.getElementById("mouvement").style.height="100px";
    if(chiffre==false) document.getElementById("mouvement").style.height="60px";
    document.getElementById("mouvement").style.zIndex="2";
    document.getElementById('mouvement').style.transition = " height 1s ";}
    else{
        document.getElementById("mouvement").style.height="0px";
     }
})
document.getElementById("chiffre").addEventListener('click',()=>{
    chiffre=true;
    char=false;
    document.getElementById("bouton").style.left="0%";
    document.getElementById('bouton').style.transition = " height 1s ";
    document.getElementById('trm').style.visibility = "visible";
    document.getElementById("mouvement").style.height="100px";
})
document.getElementById("lettre").addEventListener('click',()=>{
    chiffre=false;
    char=true;
    document.getElementById("bouton").style.left="65%";
    document.getElementById('bouton').style.transition = " height 2s ";
    document.getElementById('trm').style.visibility = "hidden";
    document.getElementById("mouvement").style.height="60px";
})
document.getElementById("Unseul").addEventListener('click',()=>{
    mult_chiffre=false;
    seul_chiffre=true;
    document.getElementById("bouton2").style.left="0%";
    document.getElementById('bouton2').style.transition = " height 2s ";
})
document.getElementById("plusieurs").addEventListener('click',()=>{
    mult_chiffre=true;
    seul_chiffre=false;
    document.getElementById("bouton2").style.left="65%";
    document.getElementById('bouton2').style.transition = " height 2s ";
})







document.getElementById("affiche_etape").addEventListener('click', () => {
    if (import_tf == true && import_tf1==true) {
        document.getElementById('section3').style.height = "69vh"
        document.getElementById('section3').style.visibility = "visible";
        document.getElementById('section3').style.transition = " height 2s,transform 2s ";
        i = 1;
        document.getElementById('sec_3_2_img1').style.visibility = "visible"
        document.getElementById('sec_3_2_img1').src = "../img/img_user_N&b.png"
        document.getElementById('sec_3_2_img1').style.height = "300px"
        document.getElementById('sec_3_2_txt1').textContent = "1"
        document.getElementById('sec_3_2_txt2').textContent = "Transformation en Noir&Blanc"
        document.getElementById('div_fleche_x').style.visibility = "visible"
        document.getElementById('div_fleche_y').style.visibility = "hidden"
        document.getElementById('div_img').style.visibility = "hidden"
        document.getElementById('div_img').style.width = "0"
    }

})
document.getElementById("sec3_img1").addEventListener('click', () => {
    document.getElementById('section3').style.height = "0";
    document.getElementById('section3').style.visibility = "hidden";
    document.getElementById('section3').style.transition = " height 2s ,visibility 2s";
})

document.getElementById('sec_3_2_next').addEventListener('click', () => {
    i += 1;
    if (i == 4) {
        document.getElementById('sec_3_2_txt1').textContent = "4"
        document.getElementById('sec_3_2_txt2').textContent = "Coefficient de Correlation"
        document.getElementById('sec_3_2_img1').style.visibility = "hidden"
        document.getElementById('div_fleche_y').style.visibility = "visible"
        document.getElementById('div_fleche_x').style.visibility = "hidden"
        document.getElementById('div_img').style.visibility = "visible"
        document.getElementById('div_img').style.width = "auto"
        document.getElementById('sec_3_2_img1').style.height = "0"

    }
    if (i == 2) {
        document.getElementById('sec_3_2_img1').style.visibility = "visible"
        document.getElementById('sec_3_2_img1').src = "../img/img_user_cut.png"
        document.getElementById('sec_3_2_img1').style.height = "300px"
        document.getElementById('sec_3_2_txt1').textContent = "2"
        document.getElementById('sec_3_2_txt2').textContent = "Découpage"
        document.getElementById('div_fleche_y').style.visibility = "visible"
    }
    if (i == 3) {
        document.getElementById('sec_3_2_img1').style.visibility = "visible"
        document.getElementById('sec_3_2_img1').src = "../img/img_user_normaliser.png"
        document.getElementById('sec_3_2_img1').style.height = "auto"
        document.getElementById('sec_3_2_txt1').textContent = "3"
        document.getElementById('sec_3_2_txt2').textContent = "Normalisation"

    }
})


document.getElementById('sec_3_2_previous').addEventListener('click', () => {
    i -= 1;
    if (i == 3) {

        document.getElementById('sec_3_2_img1').style.visibility = "visible"
        document.getElementById('sec_3_2_img1').src = "../img/img_user_normaliser.png"
        document.getElementById('sec_3_2_img1').style.height = "auto"
        document.getElementById('sec_3_2_txt1').textContent = "3"
        document.getElementById('sec_3_2_txt2').textContent = "Normalisation"
        document.getElementById('div_fleche_x').style.visibility = "visible"
        document.getElementById('div_img').style.visibility = "hidden"
        document.getElementById('div_img').style.width = "0"

    }
    if (i == 2) {
        document.getElementById('sec_3_2_img1').style.visibility = "visible"
        document.getElementById('sec_3_2_img1').src = "../img/img_user_cut.png"
        document.getElementById('sec_3_2_img1').style.height = "300px"
        document.getElementById('sec_3_2_txt1').textContent = "2"
        document.getElementById('sec_3_2_txt2').textContent = "Découpage"
        document.getElementById('div_fleche_x').style.visibility = "visible"
        document.getElementById('div_fleche_y').style.visibility = "visible"
    }
    if (i == 1) {
        document.getElementById('sec_3_2_img1').style.visibility = "visible"
        document.getElementById('sec_3_2_img1').src = "../img/img_user_N&b.png"
        document.getElementById('sec_3_2_img1').style.height = "300px"
        document.getElementById('sec_3_2_txt1').textContent = "1"
        document.getElementById('sec_3_2_txt2').textContent = "Transformation en Noir&Blanc"
        document.getElementById('div_fleche_x').style.visibility = "visible"
        document.getElementById('div_fleche_y').style.visibility = "hidden"

    }

})






const affiche_num = document.getElementById('affiche_num')
const path_img = document.getElementById('img_user')
async function get_user_img_python() {
    if(chiffre==true){
        if (seul_chiffre==true) {
        if (await eel.get_img_user()() == 1) {
            path_img.src = "../img/img_user_cadre.png";
            path_img.height = "60px";
            path_img.style.visibility = "visible";
            document.getElementById('img_user_div').style.visibility = "hidden"
            tab = await eel.get_num()();
            affiche_num.innerHTML = tab[0];
            affiche_num.style.color = "black";
            affiche_num.style.fontSize = "30px";
            let fiabilite = 100 * Number.parseFloat(tab[1]).toFixed(2)
            console.log(fiabilite.toFixed(0));
            fiabilitefunction(fiabilite.toFixed(0));
            document.getElementById("div_top2").setAttribute("id", "parametre")
            document.getElementById("perf").setAttribute("onclick", "window.location.replace('../html/performances.html');");
            document.getElementById("img_logo").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("nm_app").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("exit").setAttribute("onclick", "window.close();");
            for (var i = 0; i < 20; i++) { tableau[i] = tab[i + 2] }
            import_tf = true;
            import_tf1=true
            generate_table();
        }
        else{document.getElementById("div_top2").setAttribute("id", "parametre");
        document.getElementById("perf").setAttribute("onclick", "window.location.replace('../html/performances.html');");
        document.getElementById("img_logo").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("nm_app").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("exit").setAttribute("onclick", "window.close();");
            import_tf1=true
    }

    }
    else if(mult_chiffre==true){
            tab = await eel.get_num_mult_chiffre()();
            console.log(tab);
            if (tab!="un seul chiffre" && tab!="load fail" ){
            path_img.src = "../img/img_user.png";
            path_img.height = "60px";
            path_img.style.visibility = "visible";
            document.getElementById('img_user_div').style.visibility = "hidden"
            affiche_num.innerHTML = tab[0];
            affiche_num.style.color = "black";
            affiche_num.style.fontSize = "30px";
            let fiabilite = 100 * Number.parseFloat(tab[1]).toFixed(2)
            console.log(fiabilite.toFixed(0));
            fiabilitefunction(fiabilite.toFixed(0));
            document.getElementById("div_top2").setAttribute("id", "parametre")
            document.getElementById("perf").setAttribute("onclick", "window.location.replace('../html/performances.html');");
            document.getElementById("img_logo").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("nm_app").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("exit").setAttribute("onclick", "window.close();");
            for (var i = 0; i < 20; i++) { tableau[i] = tab[i + 2] }
            import_tf = true;
            import_tf1=true
            generate_table();
        }
        else{document.getElementById("div_top2").setAttribute("id", "parametre");
        document.getElementById("perf").setAttribute("onclick", "window.location.replace('../html/performances.html');");
        document.getElementById("img_logo").setAttribute("onclick", "window.location.replace('../html/main.html');");
        document.getElementById("nm_app").setAttribute("onclick", "window.location.replace('../html/main.html');");
        document.getElementById("exit").setAttribute("onclick", "window.close();");
        import_tf1=true
    }
        if (tab=="un seul chiffre"){
            affiche_num.innerHTML = 'un seul chiffre';
            path_img.src = "../img/img_user.png";
            path_img.height = "60px";
            path_img.style.visibility = "visible";
            document.getElementById('img_user_div').style.visibility = "hidden"
            affiche_num.style.color = "black";
            affiche_num.style.fontSize = "30px";
            fiabilitefunction('');
            fiabilite.innerHTML =""
            import_tf = false;
            import_tf1=true
            document.getElementById("div_top2").setAttribute("id", "parametre")
            document.getElementById("perf").setAttribute("onclick", "window.location.replace('../html/performances.html');");
            document.getElementById("img_logo").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("nm_app").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("exit").setAttribute("onclick", "window.close();");
        }
        if (tab==3){
            document.getElementById("div_top2").setAttribute("id", "parametre")
            document.getElementById("perf").setAttribute("onclick", "window.location.replace('../html/performances.html');");
            document.getElementById("img_logo").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("nm_app").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("exit").setAttribute("onclick", "window.close();");
            import_tf1=true
        }
            
    }
    }
    else if(char==true){
        if (await eel.get_img_user()() == 1) {
            path_img.src = "../img/img_user_cadre.png";
            path_img.height = "60px";
            path_img.style.visibility = "visible";
            document.getElementById('img_user_div').style.visibility = "hidden";
            console.log(222);
            tab=await eel.get_char()();
            console.log(224);
            affiche_num.innerHTML = tab[0];
            affiche_num.style.color = "black";
            affiche_num.style.fontSize = "30px";
            console.log(tab[0]);
            console.log(tab[1]);
            let fiabilite = 100 * Number.parseFloat(tab[1]).toFixed(2)
            console.log(fiabilite.toFixed(0));
            fiabilitefunction(fiabilite.toFixed(0));
            document.getElementById("div_top2").setAttribute("id", "parametre")
            document.getElementById("perf").setAttribute("onclick", "window.location.replace('../html/performances.html');");
            document.getElementById("img_logo").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("nm_app").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("exit").setAttribute("onclick", "window.close();");
            for (var i = 0; i < 104; i++) { tableau[i] = tab[i + 2] ;console.log(tableau[i]);}
            import_tf = true;
            import_tf1=true
            generate_table();
        }
        else{
            document.getElementById("div_top2").setAttribute("id", "parametre")
            document.getElementById("perf").setAttribute("onclick", "window.location.replace('../html/performances.html');");
            document.getElementById("img_logo").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("nm_app").setAttribute("onclick", "window.location.replace('../html/main.html');");
            document.getElementById("exit").setAttribute("onclick", "return false");
            import_tf1=true
        }
    }

    

}
document.getElementById('import_bt').addEventListener('click', () => {
    document.getElementById("parametre").setAttribute("id", "div_top2");
    document.getElementById("perf").setAttribute("onclick", "return false");
    document.getElementById("img_logo").setAttribute("onclick", "return false");
    document.getElementById("nm_app").setAttribute("onclick", "return false");
    document.getElementById("exit").setAttribute("onclick", "return false");
    import_tf1=false;
    get_user_img_python();
})







function generate_table() {

    var body = document.getElementById("div_img");
    let cpt1=0;
    let cpt2;
    let boucle;
    let ch_lt;
    let ch_lt1;
    if(chiffre==true){
        cpt2=10;
        boucle=11;
        ch_lt=["0","1","2","3","4","5","6","7","8","9"];
        ch_lt1="chiffre"
    }
    else{
        cpt2=52;
        boucle=53;
        ch_lt=["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];
        ch_lt1="lettre"
    }
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");


    for (var i = 0; i < boucle; i++) {

        var row = document.createElement("tr");
        if (i%2==0) { tbl.className = "active-row" }
        for (var j = 0; j < 3; j++) {
            var cell = document.createElement("td");
            if (i == 0) {
                if (j == 0) { var cellText = document.createTextNode(ch_lt1); }
                if (j == 1) { var cellText = document.createTextNode("coefficient de correlation"); }
                if (j == 2) { var cellText = document.createTextNode("moyenne coefficient de corrélation"); }
            }
            else {
                if (j == 0) { var cellText = document.createTextNode(ch_lt[i-1]); }
                if (j == 1) { var cellText = document.createTextNode(tableau.at(cpt1)); cpt1++; }
                if (j == 2) { var cellText = document.createTextNode(tableau.at(cpt2)); cpt2++; }
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    if (tab_cr == true) {
        var var1 = document.getElementById('styled-table')
        body.removeChild(var1);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tab_cr = true
    tbl.className = "styled-table"
    tbl.id = "styled-table"


}


// Aide
const aideCorr = document.querySelector(".aide1")
const aidePerf = document.querySelector(".aide2")
const aideImg = document.querySelector(".aidecorr1")
const aideRes = document.querySelector(".aidecorr2")
const aideFiab = document.querySelector(".aidecorr3")
let corr = document.getElementById('corr');
let perf = document.getElementById('perf');
let imgaide = document.getElementById('corr1');
let resaide = document.getElementById('affiche_num');
let fiabaide = document.getElementById('corr2');
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
imgaide.addEventListener('contextmenu', e => {
    e.preventDefault();
    aideImg.style.display = "flex";
})
imgaide.addEventListener('mouseleave', e => {
    aideImg.style.display = "none";
})
resaide.addEventListener('contextmenu', e => {
    e.preventDefault();
    aideRes.style.display = "flex";
})
resaide.addEventListener('mouseleave', e => {
    aideRes.style.display = "none";
})
fiabaide.addEventListener('contextmenu', e => {
    e.preventDefault();
    aideFiab.style.display = "flex";
})
fiabaide.addEventListener('mouseleave', e => {
    aideFiab.style.display = "none";
})
const aideImp = document.querySelector(".aidecorr4")
let impaide = document.getElementById('import_bt');
const aideAff = document.querySelector(".aidecorr5")
let affaide = document.getElementById('affiche_etape')
impaide.addEventListener('contextmenu', e => {
     e.preventDefault();
     aideImp.style.display = "flex";
 })
 impaide.addEventListener('mouseleave', e => {
    aideImp.style.display = "none";
})
affaide.addEventListener('contextmenu', e => {
    e.preventDefault();
    aideAff.style.display = "flex";
})
affaide.addEventListener('mouseleave', e => {
    aideAff.style.display = "none";
})

