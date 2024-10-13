# Solución de los Ejercicios

En este apartado se muestran la soluciones de cada uno de los ejercicios propuestos.

---

## Ejercicio 1: Promesas Simples

**Objetivo:** Crear dos promesas que se resuelvan inmediatamente y usar `Promise.all` para recoger sus resultados.

### Solución

```javascript
const promise1 = Promise.resolve("Resultado 1");
const promise2 = Promise.resolve("Resultado 2");

Promise.all([promise1, promise2]).then((results) => {
  console.log(results); // ["Resultado 1", "Resultado 2"]
});
```

### Explicación

1. **Creación de Promesas**: Se crean dos promesas que se resuelven inmediatamente con un valor.
2. **Uso de `Promise.all`**: Se pasa un arreglo con las dos promesas.
3. **Manejo de Resultados**: Cuando ambas promesas se resuelven, se imprimen los resultados en un arreglo.

### Resutados esperados

La salida esperada es un arreglo con los resultados de ambas promesas que se mostraran en la consola

![alt text](image-1.png)

---

## Ejercicio 2: Promesas con Tiempo de Espera

**Objetivo:** Crear tres promesas que se resuelvan después de un tiempo diferente.

### Solución

```javascript
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Resultado 1"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Resultado 2"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Resultado 3"), 1500)
);

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results); // ["Resultado 1", "Resultado 2", "Resultado 3"]
});
```

#### Explicación

1. **Definición de Promesas**: Cada promesa simula una operación que tarda un tiempo diferente para completarse.
2. **Ejecución Paralela**: `Promise.all` espera a que todas se resuelvan antes de continuar.
3. **Resultado**: Se imprime un arreglo con los resultados.

### Resultados Esperados

La salida esperada es un arreglo con los resultados de las tres promesas que se mostraran
en la consola

![alt text](image-2.png)

---

## Ejercicio 3: Manejo de Resultados

**Descripcion:** Usar `Promise.all` para ejecutar varias promesas y procesar sus resultados.

### Solución

```javascript
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3]).then((results) => {
  const total = results.reduce((acc, curr) => acc + curr, 0);
  console.log("Suma total:", total); // Suma total: 60
});
```

### Explicación

1. **Creación de Promesas**: Se crean tres promesas que se resuelven con números.
2. **Uso de `Promise.all`**: Se recoge el arreglo de resultados.
3. **Cálculo de la Suma**: Se utiliza `reduce` para sumar los resultados y se imprime el total.

### Resultados esperados

La salida esperada es un mensaje en la consola indicando la suma total de los resultados.

    ![alt text](image-3.png)

---

## Ejercicio 4: Manejo de Errores

**Descripción:** Crear un conjunto de promesas donde al menos una se rechace y manejar el error.

### Solución

```javascript
const promise1 = Promise.resolve("Resultado 1");
const promise2 = Promise.reject("Error en la promesa 2");
const promise3 = Promise.resolve("Resultado 3");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Este bloque no se ejecutará
  })
  .catch((error) => {
    console.error("Una de las promesas falló:", error);
  });
```

### Explicación

1. **Promesas Mixtas**: Se crea un arreglo que incluye una promesa que se rechaza.
2. **Manejo de Errores**: Si alguna promesa falla, el bloque `.catch()` se ejecuta, mostrando el error.

### Resultados esperados

La salida esperada es un mensaje en la consola indicando el error en la promesa
que falló.

![alt text](image-4.png)

---

## Ejercicio 5: Valores No Promesa

**Descripción:** Usar `Promise.all` con un arreglo que incluya tanto promesas como valores primitivos.

### Solución

```javascript
const promise1 = Promise.resolve("Resultado 1");
const value2 = 42; // Valor no promesa
const promise3 = Promise.resolve("Resultado 3");

Promise.all([promise1, value2, promise3]).then((results) => {
  console.log(results); // ["Resultado 1", 42, "Resultado 3"]
});
```

### Explicación

1. **Inclusión de Valores**: Se mezcla una promesa y un valor no promesa.
2. **Resolución**: `Promise.all` trata el valor no promesa como si fuera una promesa que se resuelve inmediatamente.
3. **Resultado**: Se imprimen los resultados en el mismo orden.

### Resultados esperados

La salida esperada es un arreglo con los resultados de las promesas y el valor no promesa, en el orden en que fueron pasados.

![alt text](image-5.png)

---

## Ejercicio 6: Fetch de APIs

**Descripción:** Realizar varias solicitudes a APIs (simuladas o reales).

### Solución

```javascript
const fetchDataFromAPI1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Datos de API 1"), 1000));
const fetchDataFromAPI2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Datos de API 2"), 2000));
const fetchDataFromAPI3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Datos de API 3"), 1500));

Promise.all([
  fetchDataFromAPI1(),
  fetchDataFromAPI2(),
  fetchDataFromAPI3(),
]).then((results) => {
  console.log(results); 
});
```

### Explicación

1. **Simulación de Fetch**: Cada función simula una llamada a una API.
2. **Ejecución en Paralelo**: Las solicitudes se realizan simultáneamente.
3. **Resultado**: Se imprime un arreglo con los datos obtenidos de las APIs.

### Resultados esperados
La salida esperada es un arreglo con los datos obtenidos de las APIs, en el orden en
que fueron pasados.

![alt text](image-6.png)

---

## Ejercicio 7: Procesamiento de Datos

**Descripción:** Obtener datos de múltiples fuentes y procesarlos una vez que todas las promesas se resuelvan.

### Solución

```javascript
const fetchDataFromSource1 = () => Promise.resolve("Datos de fuente 1");
const fetchDataFromSource2 = () => Promise.resolve("Datos de fuente 2");
const fetchDataFromSource3 = () => Promise.resolve("Datos de fuente 3");

Promise.all([
  fetchDataFromSource1(),
  fetchDataFromSource2(),
  fetchDataFromSource3(),
]).then((results) => {
  const combinedData = results.join(", ");
  console.log("Datos combinados:", combinedData); 
});
```

### Explicación

1. **Obtención de Datos**: Tres funciones devuelven promesas que se resuelven con datos.
2. **Combinación de Resultados**: Se combinan los datos en un solo string.
3. **Impresión**: Se imprime la combinación de datos.

### Resultados esperados
La salida esperada es un string con los datos combinados.

![alt text](image-7.png)

---

## Ejercicio 8: Combinación de Promesas y Funciones

**Descripción:** Crear funciones que devuelvan promesas y combinar los resultados con otras operaciones.

### Solución

```javascript
const processData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Processed: ${data}`), 500); // Procesa el dato después de 500ms
  });
};

const fetchData = () => Promise.resolve("Raw Data");

Promise.all([
  fetchData().then(processData),
  fetchData().then(processData),
  fetchData().then(processData),
]).then((results) => {
  console.log(results); // ["Processed: Raw Data", "Processed: Raw Data", "Processed: Raw Data"]
});
```

### Explicación

1. **Definición de Funciones**: `fetchData` devuelve datos, y `processData` procesa esos datos en una promesa.
2. **Uso de `Promise.all`**: Las promesas devueltas se procesan simultáneamente.
3. **Resultado**: Se imprimen los datos procesados.

### Resultados esperados
La salida esperada es un array con los datos procesados.

![alt text](image-8.png)