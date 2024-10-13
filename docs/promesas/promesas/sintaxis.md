---
sidebar_position: 1
---

# Sintaxis Básica

Una promesa se crea utilizando el constructor `Promise`, que toma una función llamada **executor**. Esta función recibe dos parámetros: `resolve` y `reject`. Estos son métodos que se utilizan para cambiar el estado de la promesa.

## Estructura General

```javascript
const miPromesa = new Promise((resolve, reject) => {
    // Lógica asíncrona aquí
});
```

## Cómo crear una promesa

**1. Creación de una Promesa:** Para crear una promesa, se utiliza el constructor `Promise`.
```javascript
const miPromesa = new Promise((resolve, reject) => {
    // Lógica asíncrona
});
```
**2. Definición de la Lógica Asíncrona:** Dentro de la función `executor`, se puede ejecutar cualquier operación asíncrona, como una llamada a una API o una operación que demora tiempo.

```javascript

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Se simula una operación exitosa
        resolve('Operación exitosa');
    }, 1000); // Espera 1 segundo
});
```


## Uso de `resolve` y `reject`

* Llamar a `resolve(valor)` para indicar que la operación se completó exitosamente.
* Llamar a `reject(error)` para indicar que la operación falló.

```javascript
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true; // Cambiar a false para simular un error
        if (exito) {
            resolve('Operación exitosa');
        } else {
            reject('Error en la operación');
        }
    }, 1000);
});
```

### Manejo de Resultados

Utiliza los métodos `.then()` y `.catch()` para manejar el resultado o error de la promesa.

```javascript
miPromesa
    .then(resultado => {
        console.log(resultado); // Se ejecuta si la promesa se resuelve
    })
    .catch(error => {
        console.error(error); // Se ejecuta si la promesa se rechaza
    });
```

### Ejemplo Completo

Aquí tienes un ejemplo completo que ilustra cómo funciona una promesa:

```javascript
const obtenerDatos = new Promise((resolve, reject) => {
    setTimeout(() => {
        const datos = { id: 1, nombre: 'Ejemplo' }; // Simulando datos
        const exito = true; // Cambiar a false para simular un error

        if (exito) {
            resolve(datos);
        } else {
            reject('No se pudieron obtener los datos');
        }
    }, 2000); // Simulamos una espera de 2 segundos
});

// Manejo de la promesa
obtenerDatos
    .then(datos => {
        console.log('Datos recibidos:', datos);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### Explicación del Ejemplo

1. **Creación de la Promesa**: Se crea una promesa llamada `obtenerDatos`, que simula una operación asíncrona (por ejemplo, una llamada a una API) usando `setTimeout`.
2. **Simulación de Éxito o Error**: Dentro del `setTimeout`, se simulan datos y se utiliza una variable (`exito`) para determinar si se resuelve o rechaza la promesa.
3. **Manejo de Resultados**: Se utilizan `.then()` y `.catch()` para manejar el resultado o error de la promesa. Si la operación se completa con éxito, se imprimen los datos; si ocurre un error, se captura y muestra.
