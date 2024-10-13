---
sidebar_position: 1
---

 # Sintaxis de Fetch API para GET Requests

La Fetch API proporciona una forma sencilla de realizar solicitudes HTTP desde el navegador. Para hacer una solicitud GET, la sintaxis básica es la siguiente:

```javascript
fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // O response.text(), response.blob(), etc.
  })
  .then(data => {
    // Manejar los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    // Manejar errores
    console.error('There has been a problem with your fetch operation:', error);
  });
```

### Componentes de la Sintaxis

1. **`fetch(url)`**: 
   - **`url`**: Es la URL del recurso al que deseas acceder. Este es el único argumento obligatorio.
   
2. **`options`** (opcional): 
   - Un objeto que puede incluir opciones adicionales como `method`, `headers`, `body`, etc. Para una solicitud GET, generalmente no es necesario especificar el método porque `fetch` asume GET de forma predeterminada.

3. **`.then(response => { ... })`**: 
   - Esta función se ejecuta cuando la solicitud se completa. `response` contiene la respuesta de la solicitud.

4. **`response.ok`**: 
   - Una propiedad que indica si la respuesta fue exitosa (código de estado 200-299).

5. **`response.json()`**: 
   - Este método se utiliza para leer el cuerpo de la respuesta y transformarlo en un objeto JavaScript.

6. **`.catch(error => { ... })`**: 
   - Captura cualquier error que ocurra durante la operación de fetch.

### Ejemplo Práctico de GET Request

A continuación se presenta un ejemplo práctico que utiliza Fetch API para realizar una solicitud GET a una API pública y obtener datos sobre usuarios:

```javascript
// URL de la API
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Realizar la solicitud GET
fetch(apiUrl)
  .then(response => {
    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // Convertir la respuesta a JSON
    return response.json();
  })
  .then(data => {
    // Manejar los datos obtenidos
    console.log('Lista de usuarios:', data);
    // Por ejemplo, podrías iterar sobre los usuarios y mostrarlos en la consola
    data.forEach(user => {
      console.log(`Nombre: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch(error => {
    // Manejar errores
    console.error('Hubo un problema con tu operación fetch:', error);
  });
```

### Funcionamiento del Ejemplo

1. **URL de la API**: Se define la URL de la API a la que se va a realizar la solicitud.

2. **Realizar la solicitud GET**: Se llama a `fetch(apiUrl)`, que inicia la solicitud.

3. **Manejo de la respuesta**:
   - Se verifica si la respuesta fue exitosa usando `response.ok`.
   - Se convierte la respuesta en formato JSON para su uso posterior.

4. **Manejo de los datos**:
   - Los datos obtenidos se imprimen en la consola. En este caso, se itera sobre la lista de usuarios y se muestra su nombre y correo electrónico.

5. **Manejo de errores**: 
   - Se captura y muestra cualquier error que ocurra durante la operación de fetch.
