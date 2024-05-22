const read = require('prompt-sync')()
const write = console.log
function Menu(){
write("Menú Ejercicios")
write("1.	Algoritmo que transforme de grados Celsius a Fahrenheit")
write("2.	Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.")  
write("3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.")
write("4.	Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos(nota: una libra equivale a 0.453593 kilogramos)")
write("5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))")
write("6.	Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal. El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.")
write("7.	Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar")
write(`8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion ", . ; :" y si no presentar solo el carácter.`)
write("9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, el costo por unidad es de $0,25 caso  contrario el precio será  10% menos.")
write("10.	El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.")
write("11.	Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.")
write("12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.")
write("13.	Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.")
write("14.	Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.")
write("15.	Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.")
write("16.	Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.")
write("17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
write("18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra")
write("19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal")
write("20.	Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,”")
write("21.	Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
write("22.	Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
write("23.	Dado una cadena indicar cuantos elementos tiene, sin usar ciclos ")
write("24.	Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos")
let literal = parseInt(read("Elija una opcion del 1-24: "))
switch (literal){
    case 1 :
        function decentígradosafarenheit(){

            let centi, fare;
            
                centi = parseFloat(read("Ingresa grados centígrados: "));
                fare = (9/5*centi)+32;
            
                write(centi+" centígrados equivalen a "+fare+" farenheit");
            }
            decentígradosafarenheit()
            break
    case 2 :
        function calcularDobleYTriple() {
    
            let numero = parseInt(read("Ingrese un numero"));
    
            let doble = numero * 2;
            let triple = numero * 3; 
    
            write(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);
    
        }
        calcularDobleYTriple()
        break
    case 3 : 
    function calcularResultados() {
  
        let num1 = parseFloat(read("ingrese el primer valor"));
        let num2 = parseFloat(read("Ingrese el segundo valor"));
        let num3 = parseFloat(read("Ingrese el tercer valor"));
        let num4 = parseFloat(read("Ingrese el cuarto valor"));
        
        let producto = num1 * num2 * num3 * num4;
        let suma = num1 + num2 + num3 + num4;
        let media = suma / 4;
    
       
        write("El producto es:" + producto ); 
        write ("El resultado de la suma es " + suma) ;
        write("La media es " + media);
    
           
    }
    calcularResultados() 
    break
    case 4 :
        function convertirPeso() {
   
            let pesoenLibras = parseFloat(read('peso en Libras'));
        
            const librasAKilogramos = 0.453593;
        
            let pesoKilogramos = pesoenLibras * librasAKilogramos;
            let pesoGramos = pesoKilogramos * 1000;
        
            write(" El peso en kilogramos es:" + pesoKilogramos );
            write("El peso en gramos es:" + pesoGramos);
        
        }
        convertirPeso()
        break
    case 5 :
        function resolverExpresion() {
   
            let a = parseFloat(read('a'));
            let b = parseFloat(read('b'));
            let c = parseFloat(read('c'));
        
            let sinA = Math.sin(a);
            let cosB = Math.cos(b);
            let truncA = Math.trunc(a);
            let modTruncA = truncA % 2;
            let raizA3 = Math.sqrt(Math.pow(a, 3));
            let denominador = a * b + c;
        
            if (denominador === 0) {
                console.log("'El denominador a * b + c no puede ser cero.");
                
            }
        
            let x = ((sinA + cosB) * modTruncA) + (raizA3 / denominador);
        
            
            write("El resultado de la expresión es:" + x) 
        
        }
        resolverExpresion()
        break
    case 6 :
        function calcularSueldo() {
    
            let horasTrabajadas = parseFloat(read('horasTrabajadas'));
        
            const tarifaNormal = 5;
            const horasNormales = 40;
            const tasaSeguroSocial = 0.10;
        
            let horasExtra = 0;
            if (horasTrabajadas > horasNormales) {
                horasExtra = horasTrabajadas - horasNormales;
                horasTrabajadas = horasNormales;
            }
        
            let sueldoBase = horasTrabajadas * tarifaNormal;
            let sobretiempo = horasExtra * (tarifaNormal * 2);
            let ingresoTotal = sueldoBase + sobretiempo;
        
            let seguroSocial = ingresoTotal * tasaSeguroSocial;
            let netoRecibir = ingresoTotal - seguroSocial;
        
            write("El sueldo base es: " + sueldoBase);
            write("El sobretiempo es: " + sobretiempo);
            write("El seguro social es:" + seguroSocial); 
            write("El total a recibir es: " + ingresoTotal);
            write("El sueldo neto es:" + netoRecibir );
            
        }
        calcularSueldo()
        break
    case 7 :
        function Mayorparimpar(){
            let numero1 = parseInt(read("Ingrese el primer numero: "))
            let numero2 = parseInt(read("Ingrese el segundo numero: "))
            if (numero1 % 2 == 0 && numero2 % 2 !== 0){
                if (numero1 > numero2) {
                    write(numero1, "es el mayor")
                }else {
                    write(numero2, "es el mayor")
                }
            } else {
                write("No cumple las condiciones")
            }
        }
        Mayorparimpar()
        break
    case 8 :
        function caractertipo(){
            let caracter = read("Ingrese el caracter: ")
            if ((caracter>= "a" && caracter<="z") || (caracter>= "A" && caracter<="Z")){
                write("El caracter esta comprendido entre las letas a y z")
            } else if(caracter === "," || caracter==="." || caracter=== ";" || caracter===":"){
                write("El caracter es un signo de puntuacion")
            } else {
                write("El caracter es ", caracter)
            }
        }
        caractertipo()
    break    
    case 9 :
        function colasprecio(){
            let total = 0.0
            let cantidad = parseInt(read("Ingrese la cantidad de colas: "))
            if (cantidad < 12){
                total = cantidad*0.25
            } else {
                total = cantidad*0.25*0.9
            }
            write("La total a pagar es ",total)
        }
        colasprecio()
    break 
    case 10 :
        function AlgoritmoX (){
            let descuento = 0.0 ,descuentoapli=0.0
            let precio = parseFloat(read("Ingrese precio del traje: "))
            if ( precio > 200){
                descuento=precio*0.1
                descuentoapli = precio-descuento
            } else {
                descuento=10
                descuentoapli = precio-descuento
            }
            let total = descuentoapli+(descuentoapli*0.15)
            write("El valor de su traje es",precio, "el descuento que se aplico fue",descuento,", el valor aplicando el descuento es", descuentoapli,"y el pago final considerando el iva del 15% es", total)
        }
        AlgoritmoX()
    break 
    case 11 :
        function obtenerNombreDia() {
            let dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
            let numerodia = parseInt(read("Ingrese un número de día (1-7): "))
            let nombredia = dias[numerodia - 1]
            write(`El día ${numerodia} es ${nombredia}.`)
        }
        obtenerNombreDia()
    break 
    case 12 :
        function obtenerNombreMes() {
            let mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio","agosto","septiembre","octubre","noviembre","diciembre"]
            let numeromes = parseInt(read("Ingrese un número de día (1-12): "))
            let nombremes = mes[numeromes - 1]
            write(`El día ${numeromes} es ${nombremes}.`)
        }
        obtenerNombreMes()
    break 
    case 13 : 
    let nombres = ["Ana", "Carlos", "Beatriz", "David", "Elena"]
    function imprimirNombresAlReves() {
        let nombresInverso = nombres.reverse()
        nombresInverso.forEach(nombre => write(nombre))
    }
    imprimirNombresAlReves();
    break 
    case 14 :
        let direccion = "123 Calle Falsa, Ciudad Ejemplo"
        function presentarDireccion() { 
            let primerCaracter = direccion[0]
            let ultimoCaracter = direccion[direccion.length - 1]
            let indiceMedio = Math.floor(direccion.length / 2)
            let caracterMedio = direccion[indiceMedio]
            write("Dirección completa: " + direccion)
            write("Primer carácter: " + primerCaracter)
            write("Carácter del medio: " + caracterMedio)
            write("Último carácter: " + ultimoCaracter)
        }
        presentarDireccion();
    break 
    case 15 : 
    const write = console.log;

function generarNumeroAleatorio() {
    let valores = [
        Math.floor(Math.random() * 201) - 100,
        Math.floor(Math.random() * 201) - 100,
        Math.floor(Math.random() * 201) - 100,
        Math.floor(Math.random() * 201) - 100,
        Math.floor(Math.random() * 201) - 100
    ];

    write(`Valores generados: ${valores}`);

    if (valores[0] > 0 && valores[0] % 2 === 0) {
        write(`El primer valor es par positivo: ${valores[0]}`);
    }
    if (valores[valores.length - 1] < 0 && valores[valores.length - 1] % 2 !== 0) {
        write(`El último valor es impar negativo: ${valores[valores.length - 1]}`);
    }
}
generarNumeroAleatorio();
    break 
    case 16 : 
    function procesarNombres() {
        let nombres = []
        let nombre1 = read("Ingrese el primer nombre: ")
        let nombre2 = read("Ingrese el segundo nombre: ")
        let nombre3 = read("Ingrese el tercer nombre: ")
        nombres.push(nombre1)
        nombres.push(nombre2)
        nombres.push(nombre3)
        let primerCaracter1 = nombre1[0]
        let ultimoCaracter1 = nombre1[nombre1.length - 1]
        let primerCaracter2 = nombre2[0]
        let ultimoCaracter2 = nombre2[nombre2.length - 1]
        let primerCaracter3 = nombre3[0]
        let ultimoCaracter3 = nombre3[nombre3.length - 1]
        console.log(`Primer y último carácter del primer nombre: ${primerCaracter1}, ${ultimoCaracter1}`)
        console.log(`Primer y último carácter del segundo nombre: ${primerCaracter2}, ${ultimoCaracter2}`)
        console.log(`Primer y último carácter del tercer nombre: ${primerCaracter3}, ${ultimoCaracter3}`)
    }
    procesarNombres()
    break 
    case 17 :
        function cadena(){
            let cadena = "7hello"
             let primerCaracter = cadena[0]
            if (primerCaracter >= '0' && primerCaracter <= '9') {
                console.log(`El primer carácter es un dígito: ${primerCaracter}`)
            } else {
                console.log("El primer carácter no es un dígito.")
            }
            }
            cadena()
    break 
    case 18 :
        function cadena(){
            let cadena = "7hello"
             let ultimoCaracter = cadena[cadena.length - 1]
            if (!(ultimoCaracter >= '0' && ultimoCaracter <= '9')) {
                console.log(`El ultimo carácter es una letra: ${ultimoCaracter}`)
            } else {
                console.log("El primer carácter no es un letra.")
            }
            }
            cadena()
    break 
    case 19 :
        function CaracterCadena(){
            let cadena = read("Ingrese una cadena de caracteres: ")
            if (cadena[0] == "a" || cadena[0] == "e" ||cadena[0] == "i" ||cadena[0] == "o" ||cadena[0] == "u" ||cadena[0] == "A" ||cadena[0] == "E" ||cadena[0] == "I" ||cadena[0] == "O" ||cadena[0] == "U"){
                write(`El primer carácter es una vocal: ${cadena[0]}`)
            } else {
                write(`El primer carácter no es una vocal.`)
            }
        }
        CaracterCadena()
    break 
    case 20 :
        function cadenaMedio(){
            let cadena = read("Ingrese una cadena de caracteres: ")
            let medio = Math.floor(cadena.length/2)
            if (cadena[medio] == ";" || cadena[medio] == ":" || cadena[medio] == "." ||cadena[medio] == ","){
                write(`El primer carácter es: ${cadena[medio]}`)
            } else {
                write(`El carácter de en medio no es un carácter de puntuación.`)
            }
        }
        cadenaMedio()
    break 
    case 21 :
        function caracterMayorMenor(){
            let caracter1 = read("Ingrese primer caracter: ")
            let caracter2 = read("Ingrese segundo caracter: ")
            if (caracter1 == caracter2){
                write("Los caracteres son iguales")
            } else if (caracter1 < caracter2){
                write("El primer caracter es menor que el segundo")
            } else {
                write("El segundo caracter es menor que el primero")
            }
        }
        caracterMayorMenor()
    break 
    case 22 :
        function nombresComparar(){
            let nombre1 = read("Ingrese primer caracter: ")
            let nombre2 = read("Ingrese segundo caracter: ")
            if (nombre1 == nombre2){
                write("Los nombres son iguales")
            } else if (nombre1 < nombre2){
                write("El primer nombre es menor que el segundo")
            } else {
                write("El segundo nombre es menor que el primero")
            }
        }
        nombresComparar()
    break 
    case 23 :
        function comandoContarCaracteres(){
            let cadena = read("Ingrese una cadena de caracteres: ")
            write(`La cadena tiene ${cadena.length} elementos`)
        }
        comandoContarCaracteres()
    break 
    case 24 : 
    function comandoContarCaracteres(){
        const arreglo = [1,2,3,4,5]
        write(`El arreglo tiene ${arreglo.length} elementos`)
    }
    comandoContarCaracteres()
    break        
}
}
Menu()