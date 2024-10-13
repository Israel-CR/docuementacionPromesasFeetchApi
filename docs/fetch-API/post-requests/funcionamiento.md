---
sidebar_position: 1
---


# Cómo Realizar Peticiones 

Las solicitudes POST son utilizadas para enviar datos al servidor, como cuando se envían formularios o se crean nuevos recursos.

## Sintaxis de Fetch API para POST Requests

La sintaxis básica para realizar una solicitud POST es:

```javascript
fetch(url, {
  method: 'POST', // Especifica que es una solicitud POST
  headers: {
    'Content-Type': 'application/json' // Tipo de contenido que se está enviando
  },
  body: JSON.stringify(data) // Los datos que se envían al servidor
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json(); // Convertir la respuesta a JSON
})
.then(data => {
  // Manejar los datos obtenidos del servidor
  console.log(data);
})
.catch(error => {
  // Manejar errores
  console.error('Hubo un problema con tu operación fetch:', error);
});
```

## Componentes de la Sintaxis

1. **`url`**: 
   La dirección a la que se enviará la solicitud.

2. **`method`**: 
    Especifica que se trata de una solicitud POST.

3. **`headers`**: 
    Aquí se define el tipo de contenido. En este caso, se especifica que se está enviando JSON.

4. **`body`**: 
    Contiene los datos que se envían al servidor. Se convierte a una cadena JSON usando `JSON.stringify(data)`.

5. **`response.json()`**: 
    Convierte la respuesta del servidor en un objeto JavaScript.

## Ejemplo Práctico de una Solicitud POST

1. **Definir la URL de la API**: 
   - El primer paso es definir la URL a la que se enviarán los datos. En este caso, se utilizará una API ficticia de usuarios.
   ```javascript
   const apiUrl = 'https://jsonplaceholder.typicode.com/users';
   ```

2. **Crear los Datos a Enviar**: 
   - Se crean los datos que se enviarán al servidor. Estos datos representan un nuevo usuario que se quiere crear.
   ```javascript
   const newUser = {
     name: 'Juan Pérez',
     email: 'juan.perez@example.com',
     phone: '123-456-7890'
   };
   ```

3. **Realizar la Solicitud POST**: 
   - Se utiliza `fetch` para enviar la solicitud POST a la API. Se pasan la URL y las opciones de configuración.
   ```javascript
   fetch(apiUrl, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(newUser) // Convertir el objeto a JSON
   })
   ```

4. **Manejo de la Respuesta**:
   - Se manejan las respuestas del servidor. Primero, se verifica si la respuesta fue exitosa.
   ```javascript
   .then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok ' + response.statusText);
     }
     return response.json(); // Convertir la respuesta a JSON
   })
   ```

5. **Manejo de los Datos Obtenidos**: 
   - Una vez que se recibe la respuesta, se pueden manejar los datos obtenidos. En este caso, se imprime la información del usuario creado.
   ```javascript
   .then(data => {
     console.log('Usuario creado:', data);
   })
   ```

6. **Manejo de Errores**: 
   - Se agrega un bloque para manejar posibles errores durante la operación de fetch.
   ```javascript
   .catch(error => {
     console.error('Hubo un problema con tu operación fetch:', error);
   });
   ```

## Código Completo

```javascript
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const newUser = {
  name: 'Juan Pérez',
  email: 'juan.perez@example.com',
  phone: '123-456-7890'
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newUser) // Convertir el objeto a JSON
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json(); // Convertir la respuesta a JSON
})
.then(data => {
  console.log('Usuario creado:', data);
})
.catch(error => {
  console.error('Hubo un problema con tu operación fetch:', error);
});
```

