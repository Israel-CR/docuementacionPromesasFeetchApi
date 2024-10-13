---
sidebar_position: 1
---

# Sintaxis de una promesa en cadena

La sintaxis básica para encadenar promesas se compone principalmente de las funciones .then() y `.catch().` A continuación, se desglosa cada parte.

### Estructura Básica

```javascript
promesa1
    .then(result => {
        // Manejar el resultado de la primera promesa
        return promesa2; // Retorna otra promesa
    })
    .then(result => {
        // Manejar el resultado de promesa2
        return promesa3; // Retorna otra promesa
    })
    .catch(error => {
        // Manejar errores de cualquiera de las promesas anteriores
    });
```

## Como funciona una promesa en cadena

  
### Llamada a una Promesa Inicial (promesa1):

Se comienza con una promesa que puede ser una función que devuelve una nueva promesa.
Esta puede ser una operación asíncrona, como una llamada a un API.

```javascript
const promesa1 = fetchData('https://api.example.com/data');
```

### Uso de `.then()`:


El método `.then()` se usa para manejar el resultado de una promesa cumplida.
Este método toma una función como argumento, que se ejecuta cuando la promesa se resuelve.
```javascript
promesa1.then(result => {
    // Aquí 'result' es el valor resuelto de promesa1
});
```
### Retorno de Otra Promesa:

Dentro del primer `.then()`,se retornar otra promesa (como promesa2).
Esto permite encadenar más operaciones que dependen del resultado anterior.
```javascript
return processData(result); // 'processData' devuelve una nueva promesa
```

### Encadenamiento con Otro `.then()`:

El segundo `.then()` maneja el resultado de la promesa retornada en el primer  `.then()`.
Aquí, se pueden realizar operaciones adicionales con el resultado procesado.

```javascript
.then(processedData => {
    // Manejar el resultado de 'processData'
});
```
### Manejo de Errores con `.catch()`:

Al final de la cadena, se usa `.catch()` para manejar cualquier error que pueda ocurrir en cualquier punto de la cadena.
Esto centraliza el manejo de errores, haciendo el código más limpio.
```javascript
.catch(error => {
    console.error('Ha ocurrido un error:', error);
});
```

## Ejemplo Completo
Aquí se encuentra una implementación completa de todo lo explicado:

```javascript

function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { userId: 1, id: 1, title: "Lorem Ipsum" };
            resolve(data); // Resuelve con datos simulados
        }, 1000);
    });
}

function processData(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            const processedData = `${data.title} - User ID: ${data.userId}`;
            resolve(processedData); // Resuelve con datos procesados
        }, 1000);
    });
}


// Encadenamiento de promesas
fetchData('https://api.example.com/data')
    .then(data => {
        console.log('Datos recibidos:', data);
        return processData(data); // Retorna la promesa de procesamiento
    })
    .then(processedData => {
        console.log('Datos procesados:', processedData);
    })
    .catch(error => {
        console.error('Ha ocurrido un error:', error);
    });

```
## Explicacion del Ejemplo

1. **Promesa Inicial:** Comienza con una promesa (como **fetchData**).
2. **Manejo de Resultados:** Se usa `.then()` para manejar el resultado y retornar nuevas promesas.
3. **Encadenamiento:** Cada `.then()` puede retornar una nueva promesa, permitiendo encadenar operaciones.
4. **Manejo de Errores:** Se usa `.catch()` al final para capturar errores en cualquier punto de la cadena.