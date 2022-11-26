function iniciar(){
    let nombreCliente=document.getElementById("Nombre").value;
    let cantidadPersonas=document.getElementById("Cantidad").value;
    let numeroReserva=document.getElementById("Numero").value;
    let mesas=document.getElementById("none");
    let main=document.getElementById("main");
    let mensaje1=document.getElementById("mensaje1");
    let mensaje2=document.getElementById("mensaje2");
    let mensaje3=document.getElementById("mensaje3");
    if(nombreCliente!=="" && cantidadPersonas!="" && numeroReserva!=""){
        mensaje1.innerHTML="Bienvenido "+nombreCliente;
        if(cantidadPersonas<4){
            mensaje2.innerHTML="Buscando mesas disponibles para: " + cantidadPersonas
        }else{
            mensaje2.innerHTML="No hay mesas para de esa capacidad";
        };
        if(numeroReserva<12){
            mensaje3.innerHTML="Su mesa esta lista, oprima validar para saber la cantidad de mesas disponibles";
        }else{
            mensaje3.innerHTML="Reserva no existente";
        };
        mesas.style.display="block";
        main.style.display="none";
    }
};

function validar() {
    let checkbox1=document.getElementById ("1").checked;
    console.log(checkbox1);
    let checkbox2=document.getElementById ("2").checked;
    console.log(checkbox2);
    let checkbox3=document.getElementById ("3").checked;
    console.log(checkbox3);
    let checkbox4=document.getElementById ("4").checked;
    console.log(checkbox4);
    let checkbox5=document.getElementById ("5").checked;
    console.log(checkbox5);
    let checkbox6=document.getElementById ("6").checked;
    console.log(checkbox6);
    let checkbox7=document.getElementById ("7").checked;
    console.log(checkbox7);
    let checkbox8=document.getElementById ("8").checked;
    console.log(checkbox8);
    let checkbox9=document.getElementById ("9").checked;
    console.log(checkbox9);
    let checkbox10=document.getElementById ("10").checked;
    console.log(checkbox10);
    let checkbox11=document.getElementById ("11").checked;
    console.log(checkbox11);
    let checkbox12=document.getElementById ("12").checked;
    console.log(checkbox12);

        let resultado=" Mesa 1 disponible " + (!checkbox1) +"<br>";
        resultado=resultado+" Mesa 2 disponible " + (!checkbox2) + "<br>";
        resultado=resultado+" Mesa 3 disponible " + (!checkbox3) +"<br>";
        resultado=resultado+" Mesa 4 disponible " + (!checkbox4) + "<br>";
        resultado=resultado+" Mesa 5 disponible " + (!checkbox5) + "<br>"; 
        resultado=resultado+" Mesa 6 disponible " + (!checkbox6) + "<br>";
        resultado=resultado+" Mesa 7 disponible " + (!checkbox7) +"<br>";
        resultado=resultado+" Mesa 8 disponible " + (!checkbox8) + "<br>";
        resultado=resultado+" Mesa 9 disponible " + (!checkbox9) + "<br>";
        resultado=resultado+" Mesa 10 disponible " + (!checkbox10) + "<br>";
        resultado=resultado+" Mesa 11 disponible " + (!checkbox11) + "<br>";
        resultado=resultado+" Mesa 12 disponible " + (!checkbox12) +"<br>";
        document.getElementById("mensaje").innerHTML=resultado;
};
