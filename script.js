//1

let animales = ["perro", "gato", "conejo", "loro"];
for (let indice = 0; indice < animales.length; indice++) {
    console.log(animales[indice])
    
}

//2

for (let indice = 0; indice < animales.length; indice++) {
    if (indice % 2=== 0)
        console.log(animales[indice])}

//3

let numeros = [4, 7, 2, 9, 5];
let suma= 0

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
    console.log(suma);
    
}

//4

let datos = [3, 6, 1, 8];
let resultado = [];

for (let i = 0; i < datos.length ; i++) {
    resultado.push(datos[i]*2)
    console.log(resultado)
    
}

//5

let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let introduceNombre = prompt('Introduce un nombre')
if (alumnos.includes(introduceNombre)) {
    console.log('Se ha encontrado el nombre correctamente')
} else {
    console.log('No se ha encontrado el')
}

//6

let valores = [5, 0, 8, 0, 2];
for (let i = 0; i < valores.length; i++) {
    if (valores[i] === 0) {
        valores[i] = 100;
    }
}
console.log(valores);

//10

let notas = [8, 7, 9, 10, 6];
let division= 1
let suma2= 0
for (let i = 0; i < notas.length; i++) {
   suma2 += notas[i]
   console.log(suma2/5)

    
}

