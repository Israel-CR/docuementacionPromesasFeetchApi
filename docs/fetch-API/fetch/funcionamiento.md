---
sidebar_position: 1
---

# ¿Cómo Funciona Fetch API?

La **Fetch API** es una interfaz moderna que permite hacer solicitudes HTTP en JavaScript de forma asíncrona. Esto significa que puedes obtener o enviar datos a un servidor sin bloquear la ejecución de tu código, lo que mejora la fluidez y la experiencia del usuario en aplicaciones web.

En lugar de usar técnicas más antiguas como `XMLHttpRequest`, Fetch utiliza promesas, lo que hace que el código sea más legible, fácil de mantener y menos propenso a errores.


## Funcionamiento Básico

Cuando se realiza una solicitud con Fetch, se realiza en los siguientes pasos:

1. **Hacer la Solicitud**: Llamada a la función `fetch()` con la URL del recurso que deseas obtener.
2. **Respuesta Prometida**: Fetch devuelve una promesa que se resuelve cuando el servidor responde.
3. **Verificar la Respuesta**: La respuesta contiene información sobre el estado de la solicitud, como si fue exitosa o falló.
4. **Obtener los Datos**: Se pueden extraer los datos en formatos como texto, JSON o blobs (datos binarios).
5. **Manejo de Errores**: Si la solicitud falla (por ejemplo, debido a un error de red o si la URL es incorrecta), se puede manejar el error en un bloque `catch`.



## Sintaxis Básica de Fetch

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud'); // Verifica si la respuesta fue exitosa
    }
    return response.json(); // Convierte la respuesta en JSON
  })
  .then(data => {
    console.log(data); // Trabaja con los datos recibidos
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud Fetch:', error); // Maneja cualquier error
  });

```


### Explicación 

1. **`fetch('https://api.example.com/data')`**: Realiza una solicitud GET a la URL proporcionada.
2. **`.then(response => ...)`**: Cuando el servidor responde, la promesa se resuelve. El objeto `response` contiene detalles de la respuesta, como el código de estado y los headers.
3. **`if (!response.ok)`**: Verifica si la solicitud fue exitosa (códigos de estado 200-299). Si no, lanza un error.
4. **`response.json()`**: Convierte la respuesta a un objeto JSON.
5. **`.then(data => ...)`**: Una vez que los datos están en formato JSON, puedes trabajar con ellos.
6. **`.catch(error => ...)`**: Si algo sale mal, este bloque manejará el error y mostrará un mensaje en la consola.

---

## Ejemplo Práctico

Se esta construyendo una página que necesita obtener y mostrar una lista de usuarios desde una API.

### Código:

```javascript
// Hacer una solicitud para obtener la lista de usuarios
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener los usuarios');
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(users => {
    // Creamos un contenedor para mostrar los usuarios
    const usersList = document.getElementById('usersList');
    
    // Iteramos sobre los usuarios y los añadimos al DOM
    users.forEach(user => {
      const userItem = document.createElement('li');
      userItem.textContent = `${user.name} - ${user.email}`;
      usersList.appendChild(userItem);
    });
  })
  .catch(error => console.error('Hubo un problema con la solicitud Fetch:', error));
```

### HTML:

```html
<h1>Lista de Usuarios</h1>
<ul id="usersList"></ul>
```

---

### Explicación 

1. **Solicitud Fetch**: La aplicación realiza una solicitud GET a una API que devuelve una lista de usuarios.
2. **Conversión a JSON**: La respuesta se convierte a JSON, que contiene una matriz de usuarios.
3. **Mostrar los Usuarios**: Se itera sobre cada usuario y se añade a un elemento `<ul>` en la página.
4. **Manejo de Errores**: Si la API falla o devuelve una respuesta no válida, el error se maneja y se muestra en la consola.


