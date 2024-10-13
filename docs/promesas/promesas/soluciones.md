# Solución de los Ejercicios

En este apartado se muestran las soluciones de cada uno de los ejercicios propuestos

---

## Ejercicio 1: Promesa Simple

**Descripción:** Crear una promesa que se resuelva después de 1 segundo.

### Creación de la Promesa

```javascript
const simplePromise = new Promise((resolve) => {
  // cuerpo de la promesa
});
```

- Se crea una nueva instancia de una promesa.

- El constructor de la promesa recibe una función que tiene dos parámetros:
  `resolve` y `reject`. En este caso, solo se usa `resolve` porque no se manejará un rechazo.

### Uso de setTimeout

```javascript
const simplePromise = new Promise((resolve) => {
  // cuerpo de la promesa
  setTimeout(() => {
    resolve("Promesa completada");
  }, 1000);
});
```

- Se usa `setTimeout` para simular una operación asíncrona que toma tiempo. En este caso, la promesa se debe resolver después de 1 segundo (1000 milisegundos).
- Dentro de `setTimeout`, se llama a `resolve('Promesa completada')`, que indica que la promesa se ha cumplido y devuelve el valor **_'Promesa completada'_**.

### Manejo de la Promesa Resuelta

```javascript
simplePromise.then((result) => {
  console.log(result); // "Promesa completada"
});
```

- Se llama al método `.then()` en **simplePromise**.
  `.then()` que toma como argumento una función que se ejecutará cuando la promesa se resuelva.
- El parámetro _`result`_ dentro de la función será el valor que se paso al `resolve` anteriormente, es decir, _'Promesa completada'_.
- Finalmente, dentro de esta función, se usa `console.log(result)` para imprimir el resultado en la consola.

### Resultado Esperado

Al ejecutar el código en un navegador, después de 1 segundo, se deberia mostrar lo siguiente en consola:

<!-- imagen -->

![Promesa](/img/promesas_result_ej1.png)

---

## Ejercicio 2: Manejo de Errores

**Descripción:** Crear una promesa que se rechace después de 1 segundo y maneja el error.

### Creación de la Promesa:

```javascript
const errorPromise = new Promise((resolve, reject) => {
  // cuerpo de la promesa
});
```

- Se crea una nueva instancia de una promesa.
- La función que se pasa al constructor de la promesa tiene dos parámetros: `resolve` y `reject`.
- Se usara _`reject`_ para indicar que la promesa ha fallado.

### Uso de setTimeout:

```javascript
const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error en la promesa");
  }, 1000);
});
```

- Se utiliza **setTimeout** para simular una operación que toma tiempo.
- En lugar de llamar a resolve, se llama a _`reject`_ después de 1 segundo, indicando que ha ocurrido un error.
- El mensaje de error que devuelve es `'Error en la promesa'`.

### Manejo de la Promesa Rechazada:

```javascript
errorPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // "Error en la promesa"
  });
```

- Se llama al método `.then()` en **`errorPromise`**. Este método se usa para manejar la resolución de la promesa.
- Dado que la promesa se rechaza, la función dentro de `.then()` no se ejecutará.
- En su lugar, se ejecutará el método **_`.catch()`_**, que maneja cualquier error que ocurra en la promesa.
- el parámetro **error** contendrá el mensaje que se paso a _`reject`_.
- Finalmente, con `console.error(error)` se imprime el error en la consola.

### Resultado Esperado

Al ejecutar el código, después de 1 segundo,se deberia de mostrar lo siguiente en la consola del navegador:

![Promesa](/img/promesas_result_ej2.png)

---

## Ejercicio 3: Promesa con Parámetro

**Descripción**: Crea una función que retorne una promesa que resuelve con el parámetro recibido.

### Definición de la Función

```javascript
function returnInput(input) {
  // cuerpo de la función
}
```

- se crea una función llamada `returnInput` que toma un parámetro `input`.

### **Creación de la Promesa**

```javascript
function returnInput(input) {
  // devulve una promesa
  return new Promise((resolve) => {
    // cuerpo de la promesa
    setTimeout(() => {
      resolve(input);
    }, 1000);
  });
}
```

- Dentro de la función, se crea y retorna una nueva promesa.

### **Uso de `setTimeout`**

```javascript
function returnInput(input) {
  // devulve una promesa
  return new Promise((resolve) => {
    // cuerpo de la promesa
    setTimeout(() => {
      resolve(input);
    }, 3000);
  });
}
```

- Se usa `setTimeout` para simular un retraso de 3 segundo.
- Llamar a `resolve(input)`, que devuelve el parámetro recibido.

### Llamada a la Función

```javascript
returnInput("Hola").then((result) => {
  console.log(result); // "Hola"
});
```

- se llama a la función `returnInput` con el argumento `'Hola'`.
- En el `.then()`,se imprime el resultado.

### Resultado Esperado

Después de 3 segundos, se deberia mostrar en la consola del navegador:

![Promesa](/img/promesas_result_ej3.png)

## Ejercicio 4: Temporizador

**Descripción**: Crea una función que devuelve una promesa que se resuelve después de un número específico de segundos.

### Definición de la Función

```javascript
function esperar(seconds) {
  // cuerpo de la función
}
```

- se crea la función `esperar`, que toma un parámetro `seconds`.

### Creación de la Promesa

```javascript
function esperar(seconds) {
  // retorna una promesa
  return new Promise((resolve) => {
    // cuerpo de la promesa
  });
}
```

- se crea y retorna una nueva promesa.

### Uso de `setTimeout`

```javascript
function esperar(seconds) {
  // retorna una promesa
  return new Promise((resolve) => {
    // devuelve una resolucion despues del tiempo especificado
    setTimeout(() => {
      resolve(`Esperado ${seconds} segundos`);
    }, seconds * 1000);
  });
}
```

- `setTimeout` se configura para que se resuelva después de los segundos especificados en el parámetro `seconds`.
- se llama a `resolve` con un mensaje que incluye los segundos.

### Llamada a la Función

```javascript
esperar(5).then((result) => {
  console.log(result); // "Esperado 2 segundos"
});
```

- Se llama a la función `eperar(5)` y, tras 5 segundos, se imprime el resultado.

### Resultado Esperado

Después de 5 segundos, se espera ver en la consola:

![resultado ](ej4.png)

---

## Ejercicio 5: Cargar Datos Simulados

**Descripción**: Simula una carga de datos que se resuelve después de 2 segundos.

### Definición de la Función

```javascript
function fetchData() {
  // cuerpo de la funcion
}
```

- Se define la función `fetchData` para simular la carga de datos.

### Creación de la Promesa

```javascript
function fetchData() {
  // cuerpo de la funcion
  return new Promise((resolve) => {
    // cuerpo de la promesa
  });
}
```

- Crear y retornar una nueva promesa.

### Uso de `setTimeout`

```javascript
function fetchData() {
  // cuerpo de la funcion
  return new Promise((resolve) => {
    // cuerpo de la promesa
    setTimeout(() => {
      const data = { nombre: "Israel", age: 25 };
      resolve(data);
    }, 2000);
  });
}
```

- Simular una carga de datos que se resuelve después de 2 segundos, pasando un objeto como resultado.

### Llamada a la Función

```javascript
fetchData().then((data) => {
  console.log("Datos cargados:", data); // muestra los datos cargados
});
```

- Llamar a `fetchData()` y, tras 2 segundos, se imprimen los datos cargados.

### Resultado Esperado

Después de 2 segundos, se espera mostrar en la consola:

![alt text](ej5.png)

---

## Ejercicio 6: Transformar Datos

**Descripción**: Crear una promesa que toma un número y lo duplica después de 1 segundo.

### Definición de la Función

```javascript
function doubleNumber(num) {
  // cuerpo de la funcion
}
```

- Definir la función `doubleNumber`, que toma un número `num`.

### Creación de la Promesa

```javascript
function doubleNumber(num) {
  // cuerpo de la funcion
  return new Promise((resolve) => {
    // cuerpo de la promesa
  });
}
```

- Crear y retornar una nueva promesa.

### Uso de `setTimeout`

```javascript
function doubleNumber(num) {
  // cuerpo de la funcion
  return new Promise((resolve) => {
    // devuelve el doble del numero especificado
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}
```

- Después de 1 segundo, se llama a `resolve` con el número duplicado (`num * 2`).

### Llamada a la Función

```javascript
doubleNumber(5).then((result) => {
  console.log(result); // 10
});
```

- Llamar a `doubleNumber(5)` y, tras 1 segundo, se imprime el resultado.

### Resultado Esperado

Después de 1 segundo, se espera ver en la consola del navegador:

![alt text](ej6.png)

---

## Ejercicio 7: Validación de Datos

**Descripción**: Crea una función que valida si un número es par o impar usando promesas.

### Definición de la Función

```javascript
function isPar(num) {
  // cuerpo de la funcion
}
```

- Definir la función `isPar`, que toma un parámetro número `num`.

### Creación de la Promesa

```javascript
function isPar(num) {
  // cuerpo de la funcion
  return new Promise((resolve, reject) => {
    // cuerpo de la promesa
  });
}
```

- Crear y retornar una nueva promesa con parámetros `resolve` y `reject`.

### Uso de `setTimeout`

```javascript
function isPar(num) {
  // cuerpo de la funcion
  return new Promise((resolve, reject) => {
    // cuerpo de la promesa
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`${num} es par`);
      } else {
        reject(`${num} es impar`);
      }
    }, 1000);
  });
}
```

- Después de 1 segundo, se comprueba si `num` es par o impar.
- Si es par, resulve con un mensaje; si es impar se rechaza con un mensaje.

### Llamadas a la Función

```javascript
isPar(4)
  .then((result) => {
    console.log(result); // "4 es par"
  })
  .catch((error) => {
    console.error(error);
  });

isPar(3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // "3 es impar"
  });
```

- Llamar a `isPar(4)` y `isPar(3)` para ver los resultados.

### Resultado Esperado

Después de 1 segundo para cada llamada, se espera ver:

![alt text](image.png)

---

### Ejercicio 8: Simulación de Carga de Archivos

**Descripción**: Simula la carga de un archivo que se resuelve después de 3 segundos.

### Definición de la Función

```javascript
function uploadFile() {
  // cuerpo de la funcion
}
```

- Definir la función `uploadFile` para simular la carga de un archivo.

### Creación de la Promesa

```javascript
function uploadFile() {
  // cuerpo de la funcion
  return new Promise((resolve) => {
    // cuerpo de la promesa
  });
}
```

- Crear y retornar una nueva promesa.

### Uso de `setTimeout`

   ```javascript
   function uploadFile() {
     // cuerpo de la funcion
     return new Promise((resolve) => {
       // mensaje de respuesta
       setTimeout(() => {
     resolve("Archivo cargado exitosamente");
   }, 3000);
     });
   }

   ```

   - Se configura `setTimeout` para que resuelva después de 3 segundos, enviando un mensaje de éxito.

### Llamada a la Función
   ```javascript
   uploadFile().then((result) => {
     console.log(result); // "Archivo cargado exitosamente"
   });
   ```
   - Se llama a la funcion  `uploadFile()` y, tras 3 segundos, se imprime el resultado.

### Resultado Esperado

Después de 3 segundos, se espera ver:

![alt text](image-1.png)


