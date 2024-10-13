---
sidebar_position: 1
---
# Introducción

Las **promesas** son una característica fundamental en JavaScript que permite manejar operaciones asíncronas de manera más sencilla y legible. En lugar de utilizar callbacks, que pueden llevar a situaciones de **callback hell** (infierno de callbacks), las promesas proporcionan un enfoque más estructurado para trabajar con el flujo asíncrono.

## ¿Qué es una Promesa?

Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante. Las promesas pueden estar en uno de los siguientes estados:

- **Pendiente (Pending)**: El estado inicial de una promesa. La operación asíncrona aún no se ha completado.
- **Cumplida (Fulfilled)**: La operación se completó exitosamente y la promesa tiene un valor.
- **Rechazada (Rejected)**: La operación falló y la promesa tiene una razón (error).

<!-- imagen -->
![Promesa](/img/statusPromises.png)

## Ventajas de Usar Promesas

- **Manejo de Errores**: Las promesas permiten un manejo de errores más limpio y predecible mediante el uso de `.catch()`.
- **Encadenamiento**: Puedes encadenar múltiples operaciones asíncronas utilizando `then()`, lo que hace que el código sea más legible.
- **Composición**: Las promesas se pueden combinar utilizando métodos como `Promise.all()` y `Promise.race()`, facilitando el manejo de múltiples operaciones asíncronas.