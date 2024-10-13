# Solución de los Ejercicios

En este apartado se muestran las soluciones de cada uno de los ejercicios propuestos

---

## Ejercicio 1: Crear un nuevo usuario

**Descripción**  
Realizar una petición POST para crear un nuevo usuario en una API simulada.

1. **Definir los datos del nuevo usuario**: Crear un objeto con la información del usuario.

   ```javascript
   const newUser = {
     name: "Juan Pérez",
     email: "juan.perez@example.com",
     phone: "123-456-7890",
   };
   ```

2. **Hacer la solicitud Fetch**: Usar `fetch` para enviar el nuevo usuario a la API.

   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/users", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newUser),
   });
   ```

3. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.

   ```javascript
   response.then((res) => res.json());
   ```

4. **Mostrar la respuesta**: Imprimir en consola el nuevo usuario creado.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un objeto que representa al nuevo usuario creado, incluyendo un ID asignado por la API.

![alt text](image.png)

---

## Ejercicio 2: Crear un nuevo post

**Descripción**  
Realizar una petición POST para crear un nuevo post.

1. **Definir los datos del nuevo post**: Crear un objeto con la información del post.

   ```javascript
   const newPost = {
     title: "Nuevo Post",
     body: "Este es el contenido del nuevo post.",
     userId: 1,
   };
   ```

2. **Hacer la solicitud Fetch**: Usar `fetch` para enviar el nuevo post a la API.

   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/posts", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPost),
   });
   ```

3. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.

   ```javascript
   response.then((res) => res.json());
   ```

4. **Mostrar la respuesta**: Imprimir en consola el nuevo post creado.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un objeto que representa el nuevo post creado, incluyendo un ID asignado por la API.

![alt text](image-1.png)

---

## Ejercicio 3: Crear un nuevo comentario

**Descripción**  
Realizar una petición POST para crear un nuevo comentario para un post existente.

1. **Definir los datos del nuevo comentario**: Crear un objeto con la información del comentario.

   ```javascript
   const newComment = {
     postId: 1,
     name: "Comentario Usuario",
     email: "usuario@example.com",
     body: "Este es un comentario de prueba.",
   };
   ```

2. **Hacer la solicitud Fetch**: Usar `fetch` para enviar el nuevo comentario a la API.

   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/comments", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newComment),
   });
   ```

3. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.

   ```javascript
   response.then((res) => res.json());
   ```

4. **Mostrar la respuesta**: Imprimir en consola el nuevo comentario creado.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un objeto que representa el nuevo comentario creado, incluyendo un ID asignado por la API.

![alt text](image-2.png)

---

## Ejercicio 4: Crear un nuevo álbum

**Descripción**  
Realizar una petición POST para crear un nuevo álbum.

1. **Definir los datos del nuevo álbum**: Crear un objeto con la información del álbum.

   ```javascript
   const newAlbum = {
     title: "Nuevo Álbum",
     userId: 1,
   };
   ```

2. **Hacer la solicitud Fetch**: Usar `fetch` para enviar el nuevo álbum a la API.

   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/albums", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newAlbum),
   });
   ```

3. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.

   ```javascript
   response.then((res) => res.json());
   ```

4. **Mostrar la respuesta**: Imprimir en consola el nuevo álbum creado.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un objeto que representa el nuevo álbum creado, incluyendo un ID asignado por la API.

![alt text](image-3.png)

---

## Ejercicio 5: Crear múltiples usuarios

**Descripción**  
Crear varios usuarios en una sola petición utilizando `Promise.all`.

1. **Definir los datos de los nuevos usuarios**: Crear un arreglo de objetos con la información de los usuarios.

   ```javascript
   const users = [
     { name: "Usuario 1", email: "usuario1@example.com" },
     { name: "Usuario 2", email: "usuario2@example.com" },
   ];
   ```

2. **Crear promesas para cada usuario**: Mapear los usuarios a promesas de fetch.

   ```javascript
   const requests = users.map((user) => {
     return fetch("https://jsonplaceholder.typicode.com/users", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(user),
     });
   });
   ```

3. **Ejecutar todas las promesas**: Usar `Promise.all` para enviar todas las peticiones.

   ```javascript
   Promise.all(requests).then((responses) =>
     Promise.all(responses.map((res) => res.json()))
   );
   ```

4. **Mostrar las respuestas**: Imprimir en consola los nuevos usuarios creados.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un arreglo de objetos que representan los nuevos usuarios creados, cada uno con un ID asignado por la API.

![alt text](image-4.png)

---

## Ejercicio 6: Crear un nuevo post y agregarlo a un álbum

**Descripción**  
Crear un nuevo post y agregarlo a un álbum existente.

1. **Definir los datos del nuevo post**: Crear un objeto con la información del post y el ID del álbum.

   ```javascript
   const newPost = {
     title: "Post en Álbum",
     body: "Contenido del post relacionado al álbum.",
     userId: 1,
     albumId: 1,
   };
   ```

2. **Hacer la solicitud Fetch**: Usar `fetch` para enviar el nuevo post a la API.

   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/posts", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPost),
   });
   ```

3. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.

   ```javascript
   response.then((res) => res.json());
   ```

4. **Mostrar la respuesta**: Imprimir en consola el nuevo post creado.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un objeto que representa el nuevo post creado, con un ID asignado por la API y relacionado con el álbum.

![alt text](image-5.png)

---

## Ejercicio 7: Enviar datos de un formulario simulado

**Descripción**  
Simular el envío de datos de un formulario a través de una petición POST.

1. **Definir los datos del formulario**: Crear un objeto con los datos del formulario.

   ```javascript
   const formData = {
     name: "Formulario Simulado",
     email: "formulario@example.com",
     message: "Este es un mensaje de prueba.",
   };
   ```

2. **Hacer la solicitud Fetch**: Usar `fetch` para enviar los datos del formulario a la API.

   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/posts", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   });
   ```

3. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.

   ```javascript
   response.then((res) => res.json());
   ```

4. **Mostrar la respuesta**: Imprimir en consola la respuesta de la API.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un objeto que representa el mensaje enviado, incluyendo un ID asignado por la API.

![alt text](image-6.png)

---

## Ejercicio 8: Crear un nuevo comentario para múltiples posts

**Descripción**  
Crear un nuevo comentario para múltiples posts en una sola petición.

1. **Definir los datos de los nuevos comentarios**: Crear un arreglo de objetos con la información de los comentarios.
```javascript
   const comments = [
     {
       postId: 1,
       name: "Comentario 1",
       email: "comentario1@example.com",
       body: "Comentario para el post 1.",
     },
     {
       postId: 2,
       name: "Comentario 2",
       email: "comentario2@example.com",
       body: "Comentario para el post 2.",
     },
   ];
```
2. **Crear promesas para cada comentario**: Mapear los comentarios a promesas de fetch.

```javascript
const requests = comments.map(comment => {
    return fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    });
});
```

3. **Ejecutar todas las promesas**: Usar `Promise.all` para enviar todas las peticiones.

   ```javascript
   Promise.all(requests).then((responses) =>
     Promise.all(responses.map((res) => res.json()))
   );
   ```

4. **Mostrar las respuestas**: Imprimir en consola los nuevos comentarios creados.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un arreglo de objetos que representan los nuevos comentarios creados, cada uno con un ID asignado por la API.

![alt text](image-7.png)