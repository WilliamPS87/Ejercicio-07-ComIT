//alert("Bievenidos");
var nombreest
nombreest = prompt("Escribir su nombre: ");
var apeest
apeest = prompt("Escribir su apellido: ");
alert("El nombre del usuario que visita esta página es: " + nombreest + " " + apeest);

function pluss(){
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
 var resultado1;
 resultado1=n1+n2;
 document.getElementById("resultado1").value=resultado1;
 //alert(resultado);
}
function resta(){
    var n3=parseInt(document.getElementById("n3").value);
    var n4=parseInt(document.getElementById("n4").value);
 var resultado2;
 resultado2=n3-n4;
 document.getElementById("resultado2").value=resultado2;
 }
 function multiplica(){
    var n5=parseInt(document.getElementById("n5").value);
    var n6=parseInt(document.getElementById("n6").value);
 var resultado3;
 resultado3=n5*n6;
 document.getElementById("resultado3").value=resultado3;
 }
 function divide(){
    var n7=parseInt(document.getElementById("n7").value);
    var n8=parseInt(document.getElementById("n8").value);
 var resultado4;
 resultado4=n7/n8;
 document.getElementById("resultado4").value=resultado4;
 }
 function porciento(){
    var n9=parseInt(document.getElementById("n9").value);
    var n10=parseInt(document.getElementById("n10").value);
 var resultado5;
 resultado5=n9/n10;
 document.getElementById("resultado5").value=resultado5;
 }
 // nueva funcion //
 function calculavarios(){
    var n11 = parseInt(document.getElementById("n11").value);
    var n12 = parseInt(document.getElementById("n12").value);
    var op = document.getElementById("op").value;
    let r;
    if(op == '+'){
        r=n11+n12;
    }
    else if(op == '-') {
        r=n11-n12;
    }
    else if(op == '*') {
        r=n11*n12;
    }
    else if(op == '/'){
        r=n11/n12;
    document.getElementById("r").value=r;
    }
}