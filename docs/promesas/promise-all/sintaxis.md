---
sidebar_position: 1
---

# Sintaxis básica de Promise All

La función `Promise.all()` devuelve una promesa que se resuelve cuando todas las promesas 


##  Sintaxis Básica

```javascript
Promise.all(iterable);
```

### Parámetros

**iterable**: 
  - Un objeto iterable (como un arreglo) que contiene promesas. Cada elemento puede ser una promesa o un valor que se convierte en una promesa que se resuelve inmediatamente.

### Valor Devuelto

Devuelve una nueva promesa:
  - **Resuelta**: Cuando todas las promesas en el iterable se resuelven, se resuelve con un arreglo de resultados en el mismo orden en que fueron pasadas.
  - **Rechazada**: Si alguna promesa se rechaza, la promesa devuelta se rechaza inmediatamente con el motivo de la primera promesa que falla.

## ¿Cómo Funciona `Promise.all`?
![alt text](image.png)

1. **Ejecución Paralela**: `Promise.all` ejecuta todas las promesas en paralelo. No hay un orden secuencial; cada promesa puede completarse en diferentes momentos.
  
2. **Recolección de Resultados**: Una vez que todas las promesas se han resuelto, `Promise.all` devuelve un arreglo con los resultados. El orden de los resultados coincide con el orden de las promesas en el iterable.

3. **Manejo de Errores**: Si una de las promesas se rechaza, `Promise.all` se rechaza inmediatamente con el error de la primera promesa que falla. Esto simplifica el manejo de errores, ya que no necesitas manejar cada promesa individualmente.

## Ejemplo Completo

Se pretenden realizar varias solicitudes de datos a diferentes APIs. En este ejemplo se simula esto creando tres funciones que devuelven promesas.

### Definir Funciones que Retornan Promesas

```javascript
const fetchDataFromAPI1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos de API 1"), 1000); // Resuelve después de 1 segundo
    });
};

const fetchDataFromAPI2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos de API 2"), 2000); // Resuelve después de 2 segundos
    });
};

const fetchDataFromAPI3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos de API 3"), 1500); // Resuelve después de 1.5 segundos
    });
};
```

- Cada función simula una solicitud a una API. Utilizando `setTimeout` para imitar la latencia de red, donde la promesa se resuelve con un mensaje después de un tiempo específico.

###  Usar `Promise.all`

Ahora, se llaman a estas funciones usando `Promise.all`:

```javascript
Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2(), fetchDataFromAPI3()])
    .then((results) => {
        console.log(results); // Imprime los resultados una vez que todas las promesas se resuelven
    })
    .catch((error) => {
        console.error("Una de las promesas falló:", error); // Manejo de errores
    });
```

  - se crea un arreglo de promesas al llamar a las funciones. `Promise.all` esperando a que todas las promesas se resuelvan.
  - Cuando todas las promesas están resueltas, el bloque `.then()` se ejecuta, recibiendo un arreglo con los resultados en el mismo orden en que fueron pasadas.

### Resultado Esperado

Alejecurar el código, se espera aproximadamente 2 segundos (el tiempo de la promesa más larga) y se imprime:

```
["Datos de API 1", "Datos de API 2", "Datos de API 3"]
```


  - El resultado es un arreglo que contiene los datos devueltos por cada función. El orden se mantiene en función de cómo se llamaron las promesas.

###  Manejo de Errores

Si se modifica `fetchDataFromAPI3` para que se rechace:

```javascript
const fetchDataFromAPI3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Error en API 3"), 1500); 
        // Rechaza después de 1.5 segundos
    });
};
```

- **Al ejecutar el código ahora**, el bloque `.catch()` se activará y mostrará:

```
Una de las promesas falló: Error en API 3
```


- La promesa devuelta por `Promise.all` se rechaza inmediatamente cuando `fetchDataFromAPI3` falla, sin esperar a que las demás promesas se resuelvan. Esto permite una respuesta rápida y un manejo eficiente de errores.
