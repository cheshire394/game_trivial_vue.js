<script setup>
import { ref } from "vue";


// Array de preguntas y respuestas
let preguntas = [
  {
    pregunta: "¿Qué es un framework?",
    respuestas: [
      { respuesta: "Herramientas y librerias software que hacen las aplicaciones más escalables y sencillas de mantener", esCorrecta: true },
      { respuesta: "Es un lenguaje de programación que puede interactuar con otro leguaje de programación", esCorrecta: false },
      { respuesta: "Es un sinónimo de API", esCorrecta: false }
    ]
  },
  {
    pregunta: "¿Qué caracteristica no se corresponde con javaScript?",
    respuestas: [
  
      { respuesta: "Incompatibilidad entre navegadores", esCorrecta: false },
      { respuesta: "Es un lenguaje flexible y rápido a la hora de ejecutar", esCorrecta: false },
      { respuesta: "Facilidad en la depuración del código", esCorrecta: true }
    ]
  },

  {
    pregunta: "¿Selecciona quién no es un framework de JavaScript?",
    respuestas: [
      { respuesta: "Node.js", esCorrecta: true },
      { respuesta: "React", esCorrecta: false },
      { respuesta: "Angular.js", esCorrecta: false }
    ]
  },

 
  {
    pregunta: "¿A qué nos referimos cuando hablamos de bloque en términos de programación?",
    respuestas: [
      { respuesta: "Es un conjunto de sentencias", esCorrecta: false },
      { respuesta: "Es un conjunto de sentencias encapsuladas entre llaves", esCorrecta: true },
      { respuesta: "Sentencias de código, encapsuladas entre llaves y que no pueden contener anidaciones", esCorrecta: false }
    ]
  },

  {
    pregunta: "¿Qué es el prompt?",
    respuestas: [
      { respuesta: "El prompt, no existe, quizás quisiste decir promp", esCorrecta: false },
      { respuesta: "Es un símbolo o identificador que espera recibir una respuesta en la línea de comandos", esCorrecta: true },
      { respuesta: "Es el nombre que se le ha asignado a la consola de javaScript", esCorrecta: false }
    ]
  },
  {
    pregunta: "¿Cuál de estas variables esta bien definida en el lenguaje JavaScript?",
    respuestas: [
      { respuesta: "var 1nombre;", esCorrecta: false },
      { respuesta: "let nombre1", esCorrecta: true },
      { respuesta: "Ambas son correctas, javaScript es capaz de definir variables tanto con var como con let", esCorrecta: false }
    ]
  },

  {
    pregunta: "¿Qué es el hashbang?",
    respuestas: [
      { respuesta: "Es un comentario especial, que permite ejecutar un script y se define así #!", esCorrecta: true },
      { respuesta: "Es un comentario especial, que permite ejecutar un script y se define así !#", esCorrecta: false },
      { respuesta: "Es un comentario de múltiples líneas, y se define así /*  */", esCorrecta: false }
    ]
  },

  {
    pregunta: "¿Number es un dato númerico de tipo...?",
    respuestas: [
      { respuesta: "Double", esCorrecta: false },
      { respuesta: "Integer", esCorrecta: false },
      { respuesta: "Ambas son correctas", esCorrecta: true }
    ]
  },

  {
    pregunta: "¿Qué resultado arroja este código: console.log(5 +'5'); ",
    respuestas: [
      { respuesta: "10", esCorrecta: false },
      { respuesta: "55", esCorrecta: true },
      { respuesta: "'10'", esCorrecta: false }
    ]
  },

  {
    pregunta: "¿Cuál de las siguientes caracteristicas es propia de JavaScript?",
    respuestas: [
      { respuesta: "Lenguaje monohilo", esCorrecta: true },
      { respuesta: "No orientado a la programación POO", esCorrecta: false },
      { respuesta: "Lenguaje multihilo, estrechamente orientado a la programación POO", esCorrecta: false }
    ]
  },

  {
    pregunta: "¿Cómo se llama la API de JavaScript?",
    respuestas: [
      { respuesta: "Node.js", esCorrecta: true },
      { respuesta: "Angular.js", esCorrecta: false },
      { respuesta: "JQuery", esCorrecta: true }
    ]
  },
];


// declaramos variables dinámicas con ref: 
let segundos = ref(30); // contador descendente que por defecto se inicia en 30 segundos
let contador = ref(0); // contador para saber el numero de pregunta en la  qué estamos
let preguntaActual = ref(preguntas[contador.value]);
let noContestadas = ref(preguntas.length); // empieza con 12 preguntas no contestadas, y se irán restando si el usuario las contesta.
let contadorCorrectas= ref(0);
let contadorIncorrectas= ref(0); 



// Temporizador para cada pregunta,programado para que se ejecuta cada segundo
let contadorSegundos = setInterval(() => {

  segundos.value--; //cada segundo decrece el contador mientas sea mayor de 0

if (segundos.value == 0) {

  segundos.value= 30; //restauramos la cuenta atras antes de avanzar a la sigueinte pregunta
  siguientePregunta(); // Si se acaba el tiempo, avanza a la siguiente pregunta sin necesidad de que el usuario pulse en siguiente

} 

}, 1000); // este numero son milisegundos, es decir esta funcion se ejecuta cada segundo para decremetar el temporizador.





// Función para avanzar a la siguiente pregunta
function siguientePregunta() {

  if (contador.value < preguntas.length - 1) { 

    contador.value++; // el contador nos ayudará a avanzar a la siguiente pregunta
    preguntaActual.value = preguntas[contador.value]; // nos ubicamos en la posicion del array que tengamos calculada con el contador
    segundos.value=30; // Reinicia el temporizador, cuando hemos cambiado de pregunta. 

  } else {

    //recogemos un booleano, que será true si el usuario quiere conocer los resultados, y false si no...
    let aceptar = confirm("Si deseas conocer el número de aciertos pulsa aceptar ");

    // eliminamos esta funcion en el script cuando ya no hace falta establecer una cuenta atrás (eficiencia)
    clearInterval(contadorSegundos); 

    //enviamos al console log el total de respuestas incorrectas y el total de respuestas no contestadas. (información no visible para el usuario)
    console.log(`El número de respuestas incorrectas es: ${contadorIncorrectas.value}`); 
    console.log(`El número de respuestas no contestadas: ${noContestadas.value}`); 

    //llamamos al metodo que dependiendo de la respuesta del usuario mostrará los resultados o no
    mostrarResultados(aceptar); 

} 
}



function puntuarRespuesta(esCorrecta) {

noContestadas.value--;
esCorrecta ? contadorCorrectas.value++ : contadorIncorrectas.value++;

// Si se falla la pregunta, mostraremos un alert, indicando la respuesta correcta:
if (!esCorrecta) {
  let verdadera = "desconocida";
  preguntaActual.value.respuestas.forEach(element => {
    if (element.esCorrecta === true) verdadera = element.respuesta;
  });
  alert(`La respuesta seleccionada es incorrecta, la opción verdadera es: ${verdadera}`);
}
siguientePregunta();
}

function mostrarResultados(aceptar){
 
  //vaciamos visualmente del html los elementos que ya no son necesarios, como las preguntas, la cuenta Atrás y el boton de siguiente
  let main = document.querySelector('main'); 
    main.innerHTML=''; 

  if(aceptar){

      let aciertos = document.createElement('h3'); 
      aciertos.textContent=`El número total de aciertos: ${contadorCorrectas.value}`;
      let total_preguntas = document.createElement('h3'); 
      total_preguntas.textContent=`El número total de preguntas es:   ${preguntas.length}`;

      // Crear la imagen
      let imagen = document.createElement('img'); 
      imagen.src = '../public/munecoResultados.png'; 
      imagen.width=400; 
    
      main.appendChild(aciertos); 
      main.appendChild(total_preguntas); 
      main.appendChild(imagen);

}else{

      let despedida = document.createElement('h3'); 
      despedida.textContent=`Gracias por participar, puedes revisar console.log para conocer las respuestas incorrectas y no contestadas`;
      main.appendChild(despedida); 
}
}


</script>

<template>
<main>

  <prueba></prueba>
  <div id="preguntas">

  <h3>{{ preguntaActual.pregunta }}</h3>
  
    <!--Recorremos todas las respuestas de la pregunta actual con un for y guardamos en la posicion de la respuesta como clave, para llamar a al metodo puntuarRespuesta
    en el caso de que sea  marcada por el usuario-->
    
    <p v-for="(item, index) in preguntaActual.respuestas" :key="index" @click="puntuarRespuesta(item.esCorrecta)">
    {{ item.respuesta }} <!--Imprirme las tres respuestas-->
    </p>


  </div>

   <!-- Botón para avanzar a la siguiente pregunta -->
  <button @click="siguientePregunta">Siguiente</button>

  <img id="logo" src="../public/logo_js.png" width="35%">

   <!-- Temporizador -->
  <div id="cuentaAtras">
  <h3 id="temporizador">temporizador</h3>
  <h1 id="contador">{{ segundos }}</h1>
  </div>
  
</main>

</template>


