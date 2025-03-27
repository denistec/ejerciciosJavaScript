
let array1 = ["pan", "leche", "huevos"]
console.log(array1[1]);
console.log(array1.length);
//push agrega elemento al final del array
array1.push("queso");
console.log(array1);
//pop eliminan el ultimo elemento (puede ser por string o posicion) 
array1.pop("pan");
array1.pop(array1[2]);
console.log(array1);
//unshift Agrega un elemento al inicio
array1.unshift("harina");
console.log(array1);

let objeto1 = {"nombre":"andres", "edad": 25, "correo": "ejemplo@ejemplo.com"}
//acceder a sus propiedades
console.log(objeto1.nombre);
console.log(objeto1["edad"]);
//modificar propiedades
objeto1.nombre = "fernando"
console.log(objeto1);

