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
function yeah(){
    var num1, antig, aux, aux2;
    num1 = document.formulario.Num.value;
    antig = document.formulario.listado.value;
    aux=0;
    aux2=0;
    F=false;
    parseFloat(num1);

    if(antig=="nothing"){
        alert('Especifique la antigüedad del trabajador por favor.');
        F=true;
    }
    if(num1==""){
        alert('Especifique el salario por favor.');
        F=true;
    }
    if(isNaN(num1)){
        alert('El valor del salario no es correcto');
        F=true;
    }
    if(!isFinite(num1)){
        alert('El salario no puede ser infinito');
        F=true;
    }
    if(num1 < 1000){
        alert('Salario muy bajo.');
        F=true;
    }
    if(num1 > 2000000){
        alert('Salario muy alto.');
        F=true;
    }
    if(!F && antig==1){
        aux=num1*0.05;
        aux2=num1*12.6;
        alert('El trabajador recibe un bono de: ' + aux + ' pesos debido a su antigüedad, recibiendo un total de: ' + aux2 + ' pesos al año.');
    }
    if(!F && antig==2){
        aux=num1*0.07;
        aux2=num1*12.84;
        alert('El trabajador recibe un bono de: ' + aux + ' pesos debido a su antigüedad, recibiendo un total de: ' + aux2 + ' pesos al año.');  
    }
    if(!F && antig==3){
        aux=num1*0.1;
        aux2=num1*13.2;
        alert('El trabajador recibe un bono de: ' + aux + ' pesos debido a su antigüedad, recibiendo un total de: ' + aux2 + ' pesos al año.');
    }
    if(!F && antig==4){
        aux=num1*.15;
        aux2=num1*13.8;
        alert('El trabajador recibe un bono de: ' + aux + ' pesos debido a su antigüedad, recibiendo un total de: ' + aux2 + ' pesos al año.');
    }
    if(!F && antig==5){
        aux=num1*.2;
        aux2=num1*14.4;
        alert('El trabajador recibe un bono de: ' + aux + ' pesos debido a su antigüedad, recibiendo un total de: ' + aux2 + ' pesos al año.');
    }
}