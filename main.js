let months = ["", "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
var month = (new Date).getMonth();


function dateEnLettre() {
    let dateInput = prompt("Veuillez entrer un nombre entier entre 1 et 12");
    dateInput = Number(dateInput);
    if (Number.isInteger(+dateInput) && dateInput <= 12) {
        console.log("Le nombre entré est: " + dateInput);
        alert("Le mois correspondant a votre nombre est: " + months[dateInput]);
    }
    else {
        alert("Saisie incorrecte.");
    }
}
