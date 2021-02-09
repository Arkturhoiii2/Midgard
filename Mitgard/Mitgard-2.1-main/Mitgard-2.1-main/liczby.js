var numer = Math.floor(Math.random()*5)+1;
    var timer1 =0;
    var timer2 =0;
    function ustawslajd(nrslajdu){
        clearTimeout(timer1);
        clearTimeout(timer2);
        numer = nrslajdu - 1;
        schowaj();
        setTimeout("zmienslajd()", 500);
    }
    function schowaj(){
        $("#slider").fadeOut(500);
    }
    function zmienslajd(){
        numer++; if (numer>4) numer=1;
        var plik = "<img src=\"slajdy/slajd" + numer + ".png\"/>";
        document.getElementById("slider").innerHTML = plik;
        $("#slider").fadeIn(500);
        timer1 = setTimeout("zmienslajd()", 5000);
        timer2 = setTimeout("schowaj()", 4500);
    }
    function sprawdz(){
        var liczba = document.getElementById("pole").value;
        if(liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
        else if(liczba<0) document.getElementById("wynik").innerHTML="ujemna";
        else if(liczba==0) document.getElementById("wynik").innerHTML="zero";
        else document.getElementById("wynik").innerHTML="Liczba cwaniaku";
    }
    function wypisz(){
        var liczba1 = document.getElementById("pole1").value;
        var liczba2 = document.getElementById("pole2").value;
        var napis ="";
            for(i=liczba1; i<=liczba2; i++){
                document.getElementById("wynik1").innerHTML = napis;
                napis = napis + i +" ";
            }
    }