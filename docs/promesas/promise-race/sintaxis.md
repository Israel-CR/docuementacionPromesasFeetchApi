---
sidebar_position: 1
---



# Sintaxis de Promise.race()

La sintaxis de `Promise.race()` es la siguiente:

```javascript
Promise.race(iterable);
```

- **iterable:** Es una colección (como un array) de promesas. `Promise.race()` acepta cualquier iterable, como un array, pero es comúnmente usado con arrays de promesas.

## Ejemplo Práctico

Se necesita realizar una solicitud a una API y, al mismo tiempo, establecer un límite de tiempo para esa solicitud. Si la solicitud no se completa en un tiempo determinado, se rechazará.



### Definición de la Función fetchData()

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 3000) + 1000; // entre 1 y 3 segundos
        setTimeout(() => {
            resolve("Datos recibidos de la API");
        }, delay);
    });
}
```

- La **Función** `fetchData()` simula una solicitud a una API.
-  Se crea una nueva promesa.
- Se usa un **Delay Aleatorio** para calcular un tiempo de retraso aleatorio entre 1 y 3 segundos usando `Math.random()`.
- **setTimeout:** Después del retraso, se resuelve la promesa con el mensaje "Datos recibidos de la API".

### Definición de la Función createTimeoutPromise()

```javascript
function createTimeoutPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Tiempo de espera agotado");
        }, 2000); // 2 segundos
    });
}
```

- La **Función** `createTimeoutPromise()` establece un límite de tiempo.
- Se crea otra nueva promesa.
-  Esta promesa se rechaza después de 2 segundos con el mensaje "Tiempo de espera agotado" usando `setTimeout`.

### Uso de Promise.race()

```javascript
Promise.race([fetchData(), createTimeoutPromise()])
    .then(result => {
        console.log("Éxito:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```

- A **Promise.race()** se le pasa un array con ambas promesas (`fetchData()` y `createTimeoutPromise()`). `Promise.race()` devuelve una nueva promesa.

- Si `fetchData()` se completa primero (dentro de 2 segundos), la promesa devuelta se resolverá con el resultado de `fetchData()`.
- Si `createTimeoutPromise()` se completa primero (después de 2 segundos), la promesa se rechazará con su mensaje de error.

### Manejo de Resultados

```javascript
.then(result => {
    console.log("Éxito:", result);
})
.catch(error => {
    console.log("Error:", error);
});
```

- **then():** Si la promesa se resuelve, se ejecuta esta función y se imprime el resultado.
- **catch():** Si la promesa se rechaza, se ejecuta esta función y se imprime el error.

### Ejecución

Al ejecutar el código:

1. **fetchData()** comienza a ejecutarse y tarda entre 1 y 3 segundos.
2. **createTimeoutPromise()** se inicia y se programará para rechazar en 2 segundos.
3. Dependiendo de cuál finalice primero, se obtiene el mensaje correspondiente.

### Posibles Resultados

- **Si `fetchData()` se completa en menos de 2 segundos:**  
   Resultado en consola  
   `Éxito: Datos recibidos de la API`.
  
- **Si `fetchData()` tarda más de 2 segundos**  
   Resultado en consola:  
   `Error: Tiempo de espera agotado`.
