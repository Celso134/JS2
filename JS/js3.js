function numbers(e){
    key=e.keyCode || e.which;

    teclado=String.fromCharCode(key)

    numero=".-0123456789";

    especiales="8-37-38-46";

    teclado_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
        }    
    }

    if(numero.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}

function yeah() {
    var num1, horasNom, horas, horasExt, horasExtt, sueldo;
    num1 = document.getElementById("num1").value;

    if(isNaN(num1)) {
        alert('El valor no es un número');
    } else if(!isFinite(num1)) {
        alert('El valor es infinito');
    } else if (!isInt(num1)) {
        alert('No se pueden decimales en las horas');
    } else if(num1>112) {
        alert('No se pueden trabajar una cantidad mayor a 112 horas, el máximo son 16 horas al día (se toman 8 de sueño de las 24 en total)')
    } else if(num1 < 0) {
        alert('No puedes trabajar horas negativas');
    } else if(num1 == 0) {
        if(num1 == "") {
            alert('Introduzca un valor por favor.');
        }else {
            alert('No trabajó');
        }
    } else {
        horas = num1;
        parseInt(horas);
        if(horas <=40) {
            sueldo = (horas*123.22);
            parseFloat(sueldo.toFixed(2));
            alert('Su sueldo es de: ' + sueldo.toFixed(2));
        } else {
            if(horas <= 48) {
                sueldo = (((40)*123.22)+((horas-40)*246.44));
                parseFloat(sueldo);
                alert('Su sueldo es de: ' + sueldo.toFixed(2));
            } else {
                if(horas > 48) {
                    sueldo = ((8*246.44)+((40*123.22)+((horas-48)*369.66)));
                    alert('Su sueldo es de: ' + sueldo.toFixed(2));
                }
            }
        }
    }
}

function isInt(n) {
   return n % 1 === 0;
}