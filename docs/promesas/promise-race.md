# ¿Qué es Promise.race()?

`Promise.race()` es un método en JavaScript que permite ejecutar varias promesas simultáneamente y devuelve una nueva promesa que se resuelve o se rechaza tan pronto como una de las promesas del iterable lo haga. Este método no espera a que todas las promesas se completen.

![alt text](image-2.png)

## Usos de Promise.race()

1. **Control de Tiempo:** Se puede usar para implementar límites de tiempo en operaciones asíncronas. Por ejemplo, se puede combinar una solicitud a un servidor con un temporizador que se rechaza si la respuesta tarda demasiado.

2. **Obtener el Resultado Más Rápido:** Es útil cuando hay múltiples operaciones que pueden completarse en diferentes momentos, pero solo interesa la que termine primero.

3. **Manejo de Promesas Independientes:** Permite ejecutar múltiples promesas que no dependen unas de otras y actuar sobre el resultado de la que finalice primero.

## Ventajas

- **Simplicidad en el Manejo Asíncrono:** Facilita la gestión de múltiples promesas sin necesidad de anidaciones complejas, lo que hace que el código sea más legible.

- **Optimización de Recursos:** se pueden iniciar múltiples operaciones al mismo tiempo y utilizar el resultado de la que se complete primero, lo que puede ahorrar tiempo y recursos.

- **Flexibilidad:** Ofrece la capacidad de manejar situaciones donde el tiempo es crucial, como en aplicaciones donde la latencia es un factor importante.

