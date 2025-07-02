/* Arreglos en JavaScript

1. Creación y acceso a arreglos
Creación de arreglos
En JavaScript, los arreglos son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Los arreglos son objetos especiales que indexan sus elementos con números enteros no negativos (0, 1, 2, ...).

Hay varias formas de crear un arreglo:
 1.Usando la notación literal ([]):


let frutas = ['manzana', 'banana', 'naranja'];

 2. Usando el constructor Array (menos común):


let numeros = new Array(1, 2, 3, 4, 5);

3. reando un arreglo vacío:


let vacio = [];

4. Con un tamaño predefinido (opcional):


let arregloTamaño = new Array(5); 


Notas importantes: */

/* let frutas = ['manzana', 'banana', 'naranja'];
for (let fruta of frutas) {
  console.log(fruta);
} */

 /*  let frutas = ['manzana', 'banana', 'naranja'];
frutas
  .map(fruta => fruta.toUpperCase())
  .forEach(fruta => console.log(fruta));

 */

/*   let empleadosDisponibles = [
  { nombre: "Ana López", rol: "Analista" },
  { nombre: "Carlos Pérez", rol: "Desarrollador" },
  { nombre: "María Gómez", rol: "Diseñadora" }
];

// 1. Uso de push: Añadir un nuevo empleado al final
empleadosDisponibles.push({ nombre: "Juan Martínez", rol: "Consultor" });
console.log("Empleados tras push:", empleadosDisponibles);

// 2. Uso de pop: Eliminar el último empleado
let empleadoEliminado = empleadosDisponibles.pop();
console.log("Empleado eliminado (pop):", empleadoEliminado);
console.log("Empleados tras pop:", empleadosDisponibles);

// 3. Uso de unshift: Añadir un empleado al inicio
empleadosDisponibles.unshift({ nombre: "Laura Sánchez", rol: "Gerente" });
console.log("Empleados tras unshift:", empleadosDisponibles);

// 4. Uso de shift: Eliminar el primer empleado
let primerEmpleado = empleadosDisponibles.shift();
console.log("Primer empleado eliminado (shift):", primerEmpleado);
console.log("Empleados tras shift:", empleadosDisponibles);

// 5. Uso de slice: Extraer una sublista de empleados (índices 0 a 2)
let equipoParcial = empleadosDisponibles.slice(0, 2);
console.log("Equipo parcial (slice):", equipoParcial);

// 6. Arreglo multidimensional: Estructura de proyectos con empleados asignados
let proyectos = [
  [
    { nombre: "Ana López", rol: "Analista" },
    { nombre: "Carlos Pérez", rol: "Desarrollador" }
  ],
  [
    { nombre: "María Gómez", rol: "Diseñadora" },
    { nombre: "Pedro Ruiz", rol: "Consultor" }
  ]
];

// 7. Iteración con forEach: Mostrar los empleados de cada proyecto
console.log("Reporte de proyectos:");
proyectos.forEach((equipo, indice) => {
  console.log(`Proyecto ${indice + 1}:`);
  equipo.forEach(empleado => {
    console.log(`- ${empleado.nombre} (${empleado.rol})`);
  });
});

// 8. Iteración con bucle for...of: Contar empleados por proyecto
for (let equipo of proyectos) {
  console.log(`Equipo con ${equipo.length} empleados:`);
  for (let empleado of equipo) {
    console.log(`  ${empleado.nombre}`);
  }
}

// 9. Uso de map: Crear un nuevo arreglo con nombres en mayúsculas
let nombresMayusculas = empleadosDisponibles.map(empleado => ({
  nombre: empleado.nombre.toUpperCase(),
  rol: empleado.rol
}));
console.log("Nombres en mayúsculas:", nombresMayusculas);

// 10. Ejemplo combinado: Generar un reporte completo
function generarReporteCompleto(proyectos) {
  console.log("Reporte Completo de Proyectos:");
  for (let i = 0; i < proyectos.length; i++) {
    console.log(`Proyecto ${i + 1} (${proyectos[i].length} empleados):`);
    proyectos[i].forEach((empleado, j) => {
      console.log(`  ${j + 1}. ${empleado.nombre} - ${empleado.rol}`);
    });
  }
}

generarReporteCompleto(proyectos); */



// Creación de arreglos: Lista de especialistas disponibles
let especialistas = [
  { nombre: "Sofía Ramírez", rol: "Estratega" },
  { nombre: "Diego Vargas", rol: "Redactor" },
  { nombre: "Clara Morales", rol: "Diseñadora Gráfica" }

];



// TODO 1: Usar push para añadir un nuevo especialista al final del arreglo
// Añade un especialista con nombre "Lucía Fernández" y rol "Analista de Datos"
// Imprime el arreglo actualizado
// TODO: Escribe tu código aquí
let nuevaEspecialista = especialistas.push({nombre: 'Lucía Fernández', rol: 'Analista de Datos'});

console.log(especialistas);



// TODO 2: Usar pop para eliminar el último especialista y almacenarlo en una variable
// Imprime el especialista eliminado y el arreglo actualizado
// TODO: Escribe tu código aquí
let especialistaEliminado1 = especialistas.pop();

console.log("Especialista eliminado con POP:", especialistaEliminado1);
console.log("Arreglo actualizado:", especialistas);

// TODO 3: Usar unshift para añadir un especialista al inicio del arreglo
// Añade un especialista con nombre "Mateo González" y rol "Community Manager"
// Imprime el arreglo actualizado
// TODO: Escribe tu código aquí

let especilistaNuevo = especialistas.unshift ({nombre: 'Mateo Gonzales', rol: 'Commuty Manager'});

console.log("Empelado añadido al inicio: ", especialistas);

// TODO 4: Usar shift para eliminar el primer especialista y almacenarlo en una variable
// Imprime el especialista eliminado y el arreglo actualizado
// TODO: Escribe tu código aquí

let especialistaEliminado2 = especialistas.shift();
console.log(`Especialista eliminado: ${especialistaEliminado2.nombre}, Rol :${especialistaEliminado2.rol}`);
console.log(especialistas);

// TODO 5: Usar slice para extraer una sublista con los primeros dos especialistas
// Almacena la sublista en una variable e imprímela
// TODO: Escribe tu código aquí


// Arreglo multidimensional: Estructura de campañas con especialistas asignados
let campanas = [
  [
    { nombre: "Sofía Ramírez", rol: "Estratega" },
    { nombre: "Diego Vargas", rol: "Redactor" }
  ],
  [
    { nombre: "Clara Morales", rol: "Diseñadora Gráfica" },
    { nombre: "Lucía Fernández", rol: "Analista de Datos" }
  ]
];

// TODO 6: Usar forEach para iterar sobre las campañas y mostrar un reporte
// Para cada campaña, imprime su número (por ejemplo, "Campaña 1") y la lista de especialistas con su rol
// Ejemplo de salida:
// Campaña 1:
// - Sofía Ramírez (Estratega)
// - Diego Vargas (Redactor)
// TODO: Escribe tu código aquí

console.log("Reporte de campañas");
campanas.forEach((campana, indice ) => {
  console.log(`Campaña ${indice + 1}: `);

  campana.forEach(especialista => {
    console.log(`- ${especialista.nombre} (${especialista.rol})`);
  });
});

// TODO 7: Usar un bucle for...of para contar el total de especialistas por campaña
// Imprime el número de especialistas en cada campaña
// Ejemplo de salida:
// Campaña 1 tiene 2 especialistas
// Campaña 2 tiene 2 especialistas
// TODO: Escribe tu código aquí

let numeroCampana = 1;

for (let campana of campanas) {
  console.log(`Campaña ${numeroCampana} tiene ${campana.length} especialistas`);
  numeroCampana+=1;
}

// TODO 8: Usar map para crear un nuevo arreglo con los nombres de los especialistas en mayúsculas
// Mantén el rol sin cambios y almacena el resultado en una variable
// Imprime el nuevo arreglo
// TODO: Escribe tu código aquí


let especialistasEnMayuscula = especialistas.map(especialista =>({
    nombre: especialista.nombre.toUpperCase(),
    rol : especialista.rol
}))

console.log("Nombres en mayusculas; ", especialistasEnMayuscula);

// TODO 9: Crear una función que genere un reporte completo de las campañas
// La función debe usar un bucle for clásico para iterar sobre las campañas
// Para cada campaña, imprime su número, el total de especialistas y la lista de nombres con sus roles
// Ejemplo de salida:
// Reporte Completo:
// Campaña 1 (2 especialistas):
//   1. Sofía Ramírez - Estratega
//   2. Diego Vargas - Redactor
// TODO: Escribe tu código aquí

function generarReporteCampana(campanas) {
    console.log("Reporte completo de campañas: ");
    for (let i = 0; i < campanas.length; i++) {
        console.log(`Campaña ${i + 1} (${campanas[i].length}) especialistas`);
        campanas[i].forEach((especialistas, j) => {
            console.log(` ${j + 1}. ${especialistas.nombre} - ${especialistas.rol}`);
        });
    }
}

generarReporteCampana(campanas);