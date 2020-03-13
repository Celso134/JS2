function numbers(e) {
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
function yeeah() {
    var num1, num2, num3, num4;
    var fl1, fl2, fl3;
    fl1 = true;
    fl2 = true;
    fl3 = true;
    finish= false;

    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;

    if(isNaN(num1) || num1=="") {
        alert('El primer valor no es un número');
        fl1=false;
    } else {
        if(!isFinite(num1)) {
            alert('El primer valor es infinito');
            fl1=false;
        } else {
            if(fl1 && isNaN(num2) || num2=="") {
                alert('El segundo valor no es un número');
                fl2 = false;
            } else {
                if(fl1 && !isFinite(num2)) {
                    alert('El segundo valor es infinito');
                    fl2 = false;
                }else {
                    if(fl1 && fl2 && isNaN(num3) || num3==''){
                        alert('El tercer valor no es un número');
                        fl3=false;
                    }else {
                        if(fl1 && fl2 && !isFinite(num3)) {
                            alert('El tercer valor es infinito');
                            fl3=false;
                        }
                    }
                }
            }
        }
    }
    if(!fl1) {
        alert('Hay un error con el primer valor');
    }else {
        if(!fl2) {
            alert('Hay un error con el segundo valor');
        }else {
            if(!fl3){
                alert('Hay un error con el tercer valor');
            }
        }
    }
    if(fl1 && fl2 && fl3) {
        parseFloat(num1);
        parseFloat(num2);
        parseFloat(num3);

        if(num1 == num2 && num1 == num3){
            alert('Los 3 son iguales');
        }else {
            if(num1 == num2) {
                num4=num1;
                parseFloat(num4);
                if(num4 > num3) {
                    alert(num4);
                    finish = true;
                }else{
                    alert(num3);
                    finish = true;
                }
            }else {
                if(num1 == num3) {
                    num4 = num1;
                    parseFloat(num4);
                    if(num4 > num2){
                        alert(num4);
                        finish = true;
                    }else {
                        alert(num2);
                        finish = true;
                    }
                }
            }
        } if(num2 == num3) {
            num4 = num2;
            parseFloat(num4);
            if(num4 > num1) {
                alert(num4);
                finish = true;
            }else {
                alert(num1);
                finish = true;
            }
        } if(num1 > num2 && num1 > num3 && !finish) {
            alert(num1);
        }else {
            if(num2 > num1 && num2 > num3 && !finish) {
                alert(num2);
            }else {
                if(num3 > num1 && num3 > num2 && !finish) {
                    alert(num3);
                }
            }
        }
    }
}