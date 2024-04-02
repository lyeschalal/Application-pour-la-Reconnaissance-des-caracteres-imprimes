async function chargement() {

    if (await eel.chargement()() == 1){
        window.location.replace("../html/main.html");
    }
    else{
        document.getElementById('mainBody').style.visibility="hidden";
        document.getElementById('Body').textContent='erreur du chargment des donnees';
        document.getElementById('Body').style.color='white';

    }
}

chargement()