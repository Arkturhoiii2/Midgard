let age = prompt("Podaj swoj wiek");

if (age > 65) {
    console.log("Jestes juz na emeryturze od "+ (age - 65) +" lat, gratuluje.");
}
if (age < 65 && age > 0) {
console.log("Pozostalo ci " + (65 - age) + " lat do emerytury, oraz okolo " + (23725 - (age * 365)) + " dni do emerytury.");
}
else {
    console.log("Nie wpisales poprawnie wieku, odswierz strone, by ponownie wprowadzic swoj wiek.");
}

