//alert("Bievenidos");

//var nombreest
//nombreest = prompt("Escribir su nombre: ");
//var apeest
//apeest = prompt("Escribir su apellido: ");
//alert("El nombre del usuario que visita esta página es: " + nombreest + " " + apeest);

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
 // 1º funcion para calcular todo //
const calculartodo = () =>{
    var valor1 = parseInt(document.getElementById("n11").value);
    var operacion = document.getElementById("operacion").value;
    var valor2 = parseInt(document.getElementById("n12").value);

    var resultado = 0;

    if (operacion == "+"){
      resultado = valor1 + valor2
    }
    if (operacion == "-"){
      resultado = valor1 - valor2
    }
    if (operacion == "*"){
      resultado = valor1 * valor2
    }
    if (operacion == "/"){
      resultado = valor1 / valor2
    }
    if (operacion == "%"){
      resultado = valor1 % valor2
    }
  document.getElementById("calculartodo").value = resultado
}
 // 2º funcion para calcular todo //
 const calculartodo2 = () =>{
   var valor3 = parseFloat(document.getElementById("n13").value);
   var operacion2 = document.getElementById("operacion2").value;
   var valor4 = parseFloat(document.getElementById("n14").value);

   var resultado2;

   if (Number.isNaN(valor3) || Number.isNaN(valor4)){
      document.getElementById("calculartodo2").value = "Error, ingrese un número";
   } else {
     if (operacion2 == "+"){
      resultado2 = valor3 + valor4
   }
   if (operacion2 == "-"){
      resultado2 = valor3 - valor4
   }
   if (operacion2 == "*"){
      resultado2 = valor3 * valor4
   }
   if (operacion2 == "/"){
     resultado2 = valor3 / valor4
   }
   if (operacion2 == "%"){
      resultado2 = valor3 % valor4
   }
 document.getElementById("calculartodo2").value = resultado2
   }
}

// 3º funcion para calcular todo //
const calculartodo4 = () =>{
  var valor5 = parseFloat(document.getElementById("n15").value);
  var operacion3 = document.getElementById("operacion3").value;
  var valor6 = parseFloat(document.getElementById("n16").value);

  var resultado3;

  if (Number.isNaN(valor5) || Number.isNaN(valor6)){
     document.getElementById("calculartodo3").value = "Error, ingrese un número";
  } else {
    switch (operacion3) {
      case "+":
            resultado3 = valor5 + valor6;
            break;
         case "-":
            resultado3 = valor5 - valor6;
            break;
         case "*":
            resultado3 = valor5 * valor6;
            break;
         case "/":
            resultado3 = valor5 / valor6;
            break;
         case "%":
            resultado3 = valor5 % valor6;
            break;
    }
   document.getElementById("calculartodo3").value = resultado3
  }
}