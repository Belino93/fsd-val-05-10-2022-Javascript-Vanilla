// Creamos un array...
// let y1 = ["X", "X", "O"];
// let y2 = ["X", "O", "X"];
// let y3 = ["O", "X", "O"];

// let matriz = [ y1, y2, y3];

// for(let i = 0; i < matriz.length; i++){
//     console.log(matriz[i]);
//     if (matriz[2][1] == "X") {
//         console.log("Alex")
//     }
    
// }

// console.log(matriz[2][1])

// let frutas = ["manzana", 'platano', 'melocoton', 'melon', 'albaricoque'];

// let bebidas = ['agua', 'fanta', 'cerveza', 'vino', 'ron', 'cazalla'];

// let bebidasFrutas = frutas.concat(bebidas);
// console.log(bebidasFrutas);


// let juntos = frutas.join(" / ");
// console.log(juntos);

// let videojuegos = ['lost ark', 'warframe', 'lol', 'wow', 'metal slug'];

// let posibles = videojuegos.filter(juego => juego!= 'lol');

// console.log(posibles);

// let numero = parseInt(prompt('Introduce tu numero de dni'));
// let letra = prompt('Introduce tu letra');
// let array = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

// function Dni(numero, letra){
//     letra = letra.toUpperCase();
//     let modulo = numero % 23;
//     if(letra == array[modulo]){
//         return 'Tu dni es correcto'
//     }else{
//         return 'No coincide la letra'
//     }
// }

// // console.log(Dni(numero, letra))

// let number = 44531355;
// function DniLetra(numero){
//     let modulo = numero % 23;
//     return array[modulo];
// }

// console.log(DniLetra(number));

// let carlos = ['carlos', 27, 'Valencia', 'Videojuegos'];

// let alumnoCarlos = {
//     nombre: 'carlos',
//     edad: 27,
//     ciudad: 'valencia',
//     hobbie: 'Videojuegos',
//     amigos: {
//         amigo1 : 'Jose',
//         amigo2 : 'Javi',
//         amigo3 : 'Abel',
//     }
// };
// console.log(alumnoCarlos.amigos.amigo3)

let peliculas = {
    pelicula1:{
        titulo: 'El rey leon',
        edad : 3,
    },
    pelicula2:{
        titulo: 'Soy leyenda',
        edad : 18,
    },
    pelicula3:{
        titulo: 'La marca del diablo',
        edad : 18,
    },
    pelicula4:{
        titulo: 'A todo gas',
        edad : 18,
    }
}


let peli = prompt('Que pelicula quieres ver');
let edad = parseInt(prompt('Que edad tienes'));
switch (peli) {
    case 'El rey leon':
        if (edad >= peliculas.pelicula1.edad){
            console.log('Puedes ver la pelicula');
            
        }else{
            console.log('No puedes ver la peli');
        }
        break;
        
    case 'Soy leyenda':
        if (edad >= peliculas.pelicula2.edad){
            console.log('Puedes ver la pelicula');
            break;
        }else{
            console.log('No puedes ver la peli');
        }
        break;

    case 'La marca del diablo':
        if (edad >= peliculas.pelicula3.edad){
            console.log('Puedes ver la pelicula');
        }else{
            console.log('No puedes ver la peli');
        }
        break;

    case 'A todo gas':
        if (edad >= peliculas.pelicula4.edad){
            console.log('Puedes ver la pelicula');
        }else{
            console.log('No puedes ver la peli');
        }
        break;
    default:
        break;
}

