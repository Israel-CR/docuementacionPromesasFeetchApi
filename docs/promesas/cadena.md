
 # ¿Qué son las promesas en cadena?

Las promesas en cadena (Promise Chaining) son una técnica en JavaScript que permite encadenar múltiples promesas de manera secuencial. Cada promesa se ejecuta en el orden en que fue llamada, y la salida de una promesa se convierte en la entrada de la siguiente. Esto simplifica el manejo de operaciones asíncronas y mejora la legibilidad del código.

![alt text](image.png)
## ¿Por qué son útiles?
- **Flujo Asíncrono Controlado:** Permiten ejecutar tareas de forma ordenada.
- **Manejo de Errores Simplificado:** Al usar `.catch()` al final de la cadena, cualquier error en cualquier promesa se captura en un solo lugar.
- **Evitar Callback Hell:** Al evitar múltiples niveles de ***callbacks***, el código se vuelve más limpio y fácil de seguir

