function validarnum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.Num.value;
    for(i=0; i<tecleado.length; i++){
        if(tecleado.charAt(i)!='.'){
            prov=prov+1;
        }
    }
    if(prov==tecleado.length-1){
        var otra=/[0-9\d]/;
        return otra.test(tec);
    }else{
        return patron.test(tec);
    }
}
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
    var num1, num2, num3;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById('num2').value;
    if(isNaN(num1)) {
        alert('Error, el primer valor no es un número')
    }else if (!isFinite(num1)) {
        alert('Error, el primer valor es infinito')
    }else {
        if (isNaN(num2)) {
            alert('Error, el segundo valor no es un número')
        }
        else{
            if (!isFinite(num2)) {
                alert('Error, el segundo valor es infinito')
            }else {
                if (num2==num1) {
                    num3 = (parseFloat(num1)*parseFloat(num2));
                    parseFloat(num3);
                } else {
                    if (num1 > num2) {
                        num3 = (parseFloat(num1)-parseFloat(num2));
                        parseFloat(num3);
                    }
                    else{
                        if (num1 < num2) {
                            num3 = (parseFloat(num1)+parseFloat(num2));
                            parseFloat(num3);
                        }
                    }
                }
                if (isNaN(num3)) {
                    alert('Hacen falta datos')
                } else {
                    alert(num3.toFixed(3))
                }
            }       
        }
    } 
}