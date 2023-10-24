// #### TIPO DE VARIABLES
// Const para constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var cant_days = 10;
var name     = "Andrés Rojas";  
// lef para variables de bloque o locales
let count = 5;
let i     = 0;

// ###### FORMAS DE IMPRESION O SALIDA EN PANTALLA
// alert
// alert(name);
// console
console.log(cant_days);
console.log("10");
// body - pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Andrés Rojas</h1>"
document.getElementById("text_two").innerText = "<h1>Andrés Rojas</h1>"

// librerias por ejem sweetalert
Swal.fire({
    icon: 'success',
    title: 'Andrés Rojas',
    Text: 'Estudiante de la UFPSO',
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    background: '#000'
});

// #### TIPOS DE DATOS
// Numéricos
let number_one = 10;
let number_two = 5.5;
// string
let text = "Soy un texto";
//boleanos
let boolean = true; //false
//array
let array_num = [1,2,3,4,5,6];
let array_tex = ["Lunes", "Martes","Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let array_mix = [1.5, "a", 10, "b"];
let array_mul = [
 {name: "Andrés", last_name: "Rojas", age:19},
 {name: "Juan", last_name: "Gonzalez", age:17},
 {name: "Nicolas", last_name: "Lazaro", age:19},
 {name: "Brithney", last_name: "Guerrero", age:19}
];

// ########## OPERADORES BASICOS
// SUMA +
var suma = number_one + number_two;
console.log("Suma=" + suma);

// RESTA -
var resta = number_one - number_two;
console.log("Resta=" + resta);

// MULTIPLICACION *
var multi = number_one * number_two;
console.log("Multi=" + multi);

// DIVISION /
var divi = number_one / number_two;
// divi = divi.toFixed(2);
console.log("División=" + divi.toFixed(2));

// MODULO %
var modulo = number_one % number_two;
console.log("Modulo=" + modulo);

console.log("Suma=" + suma + "\n" +
"Resta=" + resta + "\n" +
"Multi=" + multi + "\n" +
"División=" + divi.toFixed(2) + "\n" + 
"Modulo=" + modulo 

)
var respuesta =  ("Suma =" + suma + "<br>" + "Resta=" + resta + "<br>" + "Multi=" + multi + "<br>" + "División=" + divi.toFixed(2) + "<br>" +  "Modulo=" + modulo);

Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background: '#fff'

});