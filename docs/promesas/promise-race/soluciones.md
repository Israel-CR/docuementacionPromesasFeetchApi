---
sidebar_position: 4
---

# Solución de los Ejercicios

## Ejercicio 1: Fetch más rápido entre dos APIs

**Descripción** Realizar dos peticiones fetch y usar el primero que responda.

### Crear dos peticiones a diferentes APIs

- Hacer dos peticiones con `fetch`. En este caso, una apunta a los posts y otra a los comentarios.
- Ambos `fetch` devuelven promesas.

```js
const api1 = fetch("https://jsonplaceholder.typicode.com/posts");
const api2 = fetch("https://jsonplaceholder.typicode.com/comments");
```

### Usar `Promise.race()` para obtener la respuesta más rápida

- `Promise.race()` toma un array de promesas y se resuelve con la primera que finaliza, ya sea exitosamente o con error.

```js
Promise.race([api1, api2]);
```

### Mostrar la respuesta ganadora en la consola

- Una vez que `Promise.race()` se resuelve, usamos `.then()` para manejar la respuesta, transformarla en JSON y mostrarla en la consola el primer elemento del arreglo que se devuelve.

```js
.then(response => response.json())
.then(data => console.log('Ganador:', data[0]))
```

### Resultados esperados

La respuesta ganadora será la primera petición que responda, independientemente de si es
api1 o api2 en este caso es api de posts.

![alt text](image.png)

---

## Ejercicio 2: Fetch con control de tiempo

**Descripción** Realizar una petición con un límite de tiempo, descartando cualquier respuesta que tarde más de lo esperado

### Crear un fetch que tarda en responder

- Se realiza una petición usando `fetch`, pero es necesario asegurar de que no tarde demasiado.

```js
const apiCall = fetch("https://jsonplaceholder.typicode.com/todos/1");
```

### Implementar un temporizador

- Se crea una promesa con `setTimeout` que rechaza después de 5 segundos. Esta promesa simula un tiempo de espera que no debe ser excedido.

```js
const timeout = new Promise((_, reject) =>
  setTimeout(() => reject("Tiempo de espera agotado"), 5000)
);
```

###  Usar `Promise.race()` para comparar el fetch con el temporizador

- Si el `fetch` tarda más de 5 segundos, el temporizador "ganará" la carrera y se rechazará la promesa.

```js
Promise.race([apiCall, timeout])
  .then((response) => response.json())
  .then((data) => console.log("Respuesta:", data))
  .catch((error) => console.error("Error:", error));
  
```

### Resultados esperados
La respuesta ganadora será la primera petición que responda, en este caso es la pet
ición fetch que tarda menos de 5 segundos.

![alt text](image-1.png)

---

## Ejercicio 3: Fetch con fallback en caso de error

**Descripción** Intentar dos fetch y usar el segundo si el primero falla

### Crear dos peticiones fetch

- Se crean dos peticiones. La primera fallará porque la URL es inválida.

```js
const api1 = fetch("https://invalid.url.com");
const api2 = fetch("https://jsonplaceholder.typicode.com/users/3");
```

### Usar `Promise.race()` para probar la primera

- Se usa `Promise.race()` para ejecutar ambas peticiones. Si la primera falla, se usará la segunda.

```js
Promise.race([api1, api2])
  .then((response) => response.json())
  .then((data) => console.log("Primera respuesta:", data));
```

###  Manejar el error y usar el fallback

- Si la primera URL falla, entra en el bloque `catch`, donde se ejecuta el segundo `fetch` como respaldo.

```js
.catch(error => {
    console.error('Primera falló, usando segunda');
    return api2.then(response => response.json());
  })
  .then(data => console.log('Segunda respuesta:', data));
```

### Resultados esperados
La respuesta será la segunda petición que responda, en este caso es la petición fetch
que tiene la url valida.

![alt text](image-2.png)

---

## Ejercicio 4: Fetch con múltiples intentos

**Descripción:** Realizar una petición fetch con múltiples intentos hasta que se obtenga una respuesta.

### Crear una función fetch con reintentos

- Se crea una función que realiza varias veces un `fetch`. Usando un bucle para intentar hacer la misma petición varias veces.

```js
function fetchWithRetries(url, retries = 3) {
  const fetchAttempt = () => fetch(url);
//   codigo restante
  
  }
```

### Intentar varias veces

- En cada intento, se guardan las promesas en un array y se usa  `Promise.race()` para obtener la respuesta más rápida de esas promesas.

```js
  return new Promise((resolve, reject) => {
    const attempts = [];
    for (let i = 0; i < retries; i++) {
      attempts.push(fetchAttempt());
    }
    Promise.race(attempts)
      .then(resolve)
      .catch(reject);
  });

```

### Probar la función con varias promesas

- Se hace un `fetch` con reintentos y se muestra el resultado o un mensaje de error si todos los intentos fallan.

```js
fetchWithRetries("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log("Datos:", data))
  .catch((error) => console.error("Error tras varios intentos:", error));
```

### Resultados esperados
- La función `fetchWithRetries` realiza varias veces un `fetch` a la URL especificado
- Si se obtiene una respuesta, se muestra en la consola.
- Si todos los intentos fallan, se muestra un mensaje de error en la consola.

![alt text](image-3.png)

![alt text](image-4.png)

---

## Ejercicio 5: Fetch con manejo avanzado de errores

**Descripción:** Realizar varias peticiones y manejar los errores de forma más controlada.

###  Crear múltiples peticiones fetch

- Se realizan tres peticiones, una de las cuales fallará.

```js
const api1 = fetch("https://invalid.api");
const api2 = fetch("https://jsonplaceholder.typicode.com/albums/1");
const api3 = fetch("https://jsonplaceholder.typicode.com/photos/2");
```

### Usar `Promise.race()` para obtener la primera respuesta válida

- Se usa `Promise.race()` para obtener la respuesta de la primera promesa que se resuelva. Si la respuesta no es satisfactoria, se lanza un error.

```js
Promise.race([api1, api2, api3]).then((response) => {
  if (!response.ok) {
    throw new Error("Error en la respuesta");
  }
  return response.json();
});
```

### Manejar los errores

- Si hay un error en la respuesta, se lanza el error. Luego, el `catch` maneja cualquier fallo.

```js
  .then(data => console.log('Datos:', data))
  .catch(error => console.error('Error controlado:', error));
```

### Resultados esperados
- Se muestra la respuesta de la primera petición que se resuelve correctamente.
- Si se obtiene una respuesta, se muestra en la consola.
- Si todos los intentos fallan, se muestra un mensaje de error en la consola.

![alt text](image-5.png)

---

## Ejercicio 6: Fetch con tiempos de respuesta variables

**Descripción:** Simular múltiples peticiones con tiempos de respuesta aleatorios y ver cuál responde más rápido.

### Crear función fetch con retraso

- Se crea una función que añade un retraso a la petición `fetch`.

```js
function delayedFetch(url, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(fetch(url)), delay));
}
```

### Crear varias peticiones con diferentes retrasos

- Se usa la función anterior para crear varias peticiones con tiempos de espera distintos.

```js
const api1 = delayedFetch("https://jsonplaceholder.typicode.com/posts/2", 3000);
const api2 = delayedFetch(
  "https://jsonplaceholder.typicode.com/comments/2",
  1000
);
const api3 = delayedFetch("https://jsonplaceholder.typicode.com/albums/2", 2000);
```

### Usar `Promise.race()` para obtener la más rápida

- `Promise.race()` seleccionará la primera que se complete, según el tiempo de retraso definido.

```js
Promise.race([api2, api1, api3])
  .then((response) => response.json())
  .then((data) => console.log("Respuesta más rápida:", data))
  .catch((error) => console.error("Error:", error));
```
### Resultados esperados
- Se muestra la respuesta de la petición que responde más rápido.
- Si se obtiene una respuesta, se muestra en la consola.
- Si todos los intentos fallan, se muestra un mensaje de error en la consola.


![alt text](image-6.png)

---

## Ejercicio 7: Fetch con `AbortController`

**Descripción:** Realizar un fetch con la capacidad de cancelarlo si otro responde primero.

### Crear el `AbortController`

- El `AbortController` permite abortar una petición `fetch` que no es necesario seguir esperando.

```js
const controller = new AbortController();
```

### Hacer las peticiones con la señal de abortar

- Se usa el `controller.signal` para que el `fetch` sepa que puede ser cancelado.

```js
const apiCall1 = fetch("https://jsonplaceholder.typicode.com/posts/3", {
  signal: controller.signal,
});
const apiCall2 = fetch("https://jsonplaceholder.typicode.com/comments/2",{
    signal: controller.signal,
});
```

### Usar `Promise.race()` y abortar la petición más lenta

- En cuanto una de las peticiones se complete, se aborta la otra.

```js
Promise.race([apiCall1, apiCall2])
  .then((response) => {
    controller.abort(); // Cancelar la otra petición
    return response.json();
  })
  .then((data) => console.log("Ganador:", data))
  .catch((error) => console.error("Error:", error));
```
### Resultados esperados
- Se muestra la respuesta de la petición que responde más rápido.
- Se aborta la otra petición.


![alt text](image-7.png)

---

## Ejercicio 8: Fetch con múltiples servicios de respaldo

**Descripción:** Implementar un fetch que recurre a diferentes servicios en caso de fallo

### Hacer peticiones a diferentes servicios

- Crear varias peticiones a diferentes servicios.

```js
const service1 = fetch("https://invalid.service1.com");
const service2 = fetch("https://jsonplaceholder.typicode.com/posts/3");
const service3 = fetch("https://jsonplaceholder.typicode.com/users/3");
```

### Usar `Promise.race()` para obtener la primera respuesta

- Se usa `Promise.race()` para ver cuál responde primero.

```js
Promise.race([service1, service2, service3]).then((response) => {
  if (!response.ok) {
    throw new Error("Servicio no disponible");
  }
  return response.json();
});
```

### Manejar errores y usar servicios de respaldo

- Si una respuesta falla, se usa el siguiente servicio como respaldo.

```js
  .then(data => console.log('Servicio exitoso:', data))
  .catch(error => {
    console.error('Error, usando respaldo:', error);
    return service2.then(response => response.json());
  })
  .then(data => console.log('Respaldo:', data));
```
### Resultados esperados
- Se muestra la respuesta de la petición que responde más rápido.
- Se muestra la respuesta del servicio de respaldo si la primera petición falla.
- Se muestra el error si ninguna petición responde correctamente.


![alt text](image-8.png)
