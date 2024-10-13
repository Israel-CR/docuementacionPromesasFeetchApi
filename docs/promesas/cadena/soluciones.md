# Solución de los Ejercicios

En este apartado se muestran las soluciones de cada uno de los ejercicios propuestos

---

## Ejercicio 1: Promesa simple

**Descripción:** Crear una promesa que se resuelva con un mensaje después de 2 segundos.

### Crear la promesa.

```javascript
const simplePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("¡Hola, mundo!");
  }, 2000);
});
```

- Se crea una nueva instancia de una promesa.
- La promesa se resuelve después de 2 segundos.
- Se llama a `resolve` con el mensaje "¡Hola, mundo!".

### Manejar la resolución con `.then()`.

```javascript
simplePromise.then((mensaje) => console.log(mensaje));
```

- Cuando la promesa se resuelve, se imprime el mensaje en la consola.

### Resultado esperado

Después de 2 segundos, se espera el siguiente resultado en la consola.

![alt text](image.png)

---

## Ejercicio 2: Encadenamiento básico

**Descripción:** Encadenar operaciones en una promesa.

### Crear la promesa inicial

```javascript
const promesa2 = new Promise((resolve) => {
  resolve(5);
});
```

- Se crea una nueva instancia de una promesa usando `new Promise`
- La promesa se resuelve inmediatamente con el valor 5.

### Multiplicar el número por 2.

```javascript
promesa2.then((numero) => numero * 2);
```

- El valor 5 se multiplica por 2, resultando en 10.

### Convertir el resultado a string.

```javascript
    .then((resultado) => resultado.toString())
```

- El número 10 se convierte en el string "10".

### Imprimir el resultado

```javascript
    .then((texto) => console.log(texto));
```

- Se imprime el string "10" en la consola.

### Resultado esperado:

Despues de que todas las promesas se resuelvan se espera lo siguiente en consola

    ![alt text](image-1.png)

---

## Ejercicio 3: Encadenamiento con manejo de errores

**Descripción:** Manejar un error y devolver un valor predeterminado.

### Crear una promesa que rechace.

```javascript
const promiseRejected = new Promise((resolve, reject) => {
  reject("Error: algo salió mal");
});
```

- Se crea una nueva nueva instancia de una promesa.
- La promesa se rechaza inmediatamente.

### Manejar el error y devolver un valor.

```javascript
promiseRejected.catch((error) => {
  console.log(error);
  return "Valor predeterminado";
});
```

- El mensaje de error se imprime, y se devuelve el valor "Valor predeterminado".

### Imprimir el valor predeterminado.

```javascript
    .then((valor) => console.log(valor));
```

- Se imprime el mensaje "Valor predeterminado".

### Resultado esperado:

Se espera el siguiente resultado en la consola del navegador. El primer mensaje es el error y el segundo es el valor predeterminado.

![alt text](image-2.png)

---

## Ejercicio 4: Múltiples operaciones

**Descripción:** Encadenar varias operaciones matemáticas.

### Crear la promesa que resuelva una suma.

```javascript
const operacionesPromise = new Promise((resolve) => {
  resolve(3 + 7);
});
```

- Se crea una nueva instancia de una promesa
- La promesa se resuelve con el resultado de la suma 3 + 7 que es 10 .

### Multiplicar el resultado por 10.

```javascript
operacionesPromise.then((suma) => suma * 10);
```

- En la primera promesa, se devuelve 10
- Se multiplica 10 por 10, resultando en 100.

### Restar 5.

```javascript
    .then((resultado) => resultado - 5)
```

-
- Se resta 5 del resultado de la segunda promesa, resultando en 95.

### Imprimir el resultado final.

```javascript
    .then((final) => console.log(final));
```

- Se imprime 95.

### Resultado esperado:

Despues de que se resuelvan todas las promesas se espera el siguiente resultado en la consola.

![alt text](image-3.png)

---

## Ejercicio 5: Manipulación de diferentes tipos de datos

**Descripción:** Trabajar con diferentes tipos de datos en promesas.

### Crear una promesa que resuelva un número.

```javascript
const typeDataPromise = new Promise((resolve) => {
  resolve(42);
});
```

- La promesa se resuelve con el número 42.

### Transformar el número en un objeto.

```javascript
typeDataPromise.then((numero) => {
  return { valor: numero, texto: "El número es" };
});
```

- Se crea un objeto con el valor 42 y un texto.

### Imprimir el texto y el valor del objeto.

```javascript
    .then((objeto) => {
        console.log(`${objeto.texto} ${objeto.valor}`);
    });
```

- Se concatena el texto y el valor que devuelve el objeto de la promesa anterior Se imprime "El número es 42".

### Resultado esperado

Se espera el siguiente resultado en consola.
![alt text](image-5.png)

---

## Ejercicio 6: Uso de arreglos

**Descripción:** Calcular la suma de un arreglo de números.

### Crear una promesa que resuelva un arreglo.

```javascript
const arrayPromise = new Promise((resolve) => {
  const arreglo = [1, 2, 3, 4, 5];
  resolve(arreglo);
});
```

- Se crea una nueva instancia de promesa
- Se crea una variable que contiene un arreglo de numeros
-  La promesa se resuelve con la variable `arreglo` .

### Sumar los números del arreglo.

```javascript
arrayPromise.then((numeros) => numeros.reduce((acc, num) => acc + num, 0));
```

- Se utiliza `reduce` para sumar todos los números del arreglo.
- devuelve el resultando qu es 15.

### Imprimir la suma.

```javascript
    .then((suma) => console.log(suma));
```

-  Se imprime el valor que contiene  `suma`.

### Resultado esperado:
Despues de que se resuelvan todas las promesas se espera lo siguiente en consola
![alt text](image-6.png)

---

## Ejercicio 7: Uso de variables en cadena

**Descripción:** Pasar un valor entre varias promesas, modificándolo.

### Crear una promesa inicial.

```javascript
const varsPromise = new Promise((resolve) => {
  resolve(10);
});
```
- Se crea una nueva instancia de promesa
-  La promesa se resuelve con el número 10.

### Sumar 5 al número.

```javascript
varsPromise.then((numero) => numero + 5);
```

-  Se suma 5, resultando en 15.

### Multiplicar el resultado por 2.

```javascript
    .then((resultado) => resultado * 2)
```

-  Se multiplica 15 por 2, resultando en 30.

### Imprimir el resultado final.

```javascript
    .then((final) => console.log(final));
```
- se imprime el resultado final usando un `console.log()`

### Resultado esperado:
Después de que se resuelvan todas las promesas se espera lo siguiente en consola.

![alt text](image-7.png)

---

## Ejercicio 8: Encadenamiento más complejo

**Descripción:** Encadenar varias operaciones y manipular el resultado.

### Crear una promesa que resuelva un número.

```javascript
const operacionesPromise = new Promise((resolve) => {
  resolve(5);
});
```

-  La promesa se resuelve con el número 5.

### Sumar 3.

```javascript
operacionesPromise.then((numero) => {
  return numero + 3;
});
```

-  Se suma 3, resultando en 8.

### Multiplicar por 2.

```javascript
    .then((resultado) => resultado * 2)
```

-  Se multiplica 8 por 2, resultando en 16.

### Imprimir el resultado final.

```javascript
    .then((final) => console.log(final));
```

- se imprime el resultado final que es 16.


### Resultado esperado

Después de que se resuelvan todas las promesas se espera lo siguiente en consola

![alt text](image-8.png)

