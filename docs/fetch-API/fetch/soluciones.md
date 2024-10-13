# Solución de los Ejercicios

En este apartado se muestran las soluciones de cada uno de los ejercicios propuestos

---



## Ejercicio 1: Obtener una lista de usuarios

**Descripción**  
Realizar una petición a una API para obtener una lista de usuarios.

1. **Hacer la solicitud Fetch**: Usar `fetch` para solicitar datos de usuarios desde una API pública.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/users");
   ```

2. **Transformar la respuesta a JSON**: Cuando la promesa se resuelve, convertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Mostrar la lista de usuarios**: Imprimir en consola el arreglo de usuarios.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Una lista de objetos que representan usuarios, cada uno con atributos como nombre, correo y dirección.

![alt text](image-1.png)

---

## Ejercicio 2: Obtener un post específico

**Descripción**  
Realizar una petición para obtener un post específico por su ID.

1. **Hacer la solicitud Fetch**: Usar `fetch` para solicitar un post con un ID específico.
   ```javascript
   const postId = 1;
   const response = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
   ```

2. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Mostrar el post**: Imprimir en consola el objeto del post obtenido.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
El objeto del post con ID 1, que incluye título, cuerpo, ID y ID de usuario.

![alt text](image-2.png)

---

## Ejercicio 3: Contar la cantidad de posts

**Descripción**  
Realizar una petición para obtener todos los posts y contar cuántos hay.

1. **Hacer la solicitud Fetch**: Usar `fetch` para obtener todos los posts.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/posts");
   ```

2. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Contar los posts**: Imprimir en consola el número de posts.
   ```javascript
   .then(data => console.log('Cantidad de posts:', data.length));
   ```

**Resultados esperados**  
Un número que representa la cantidad total de posts en la API.

![alt text](image-3.png)

---

## Ejercicio 4: Obtener comentarios de un post

**Descripción**  
Obtener los comentarios de un post específico usando su ID.

1. **Hacer la solicitud Fetch**: Usar `fetch` para solicitar comentarios del post.
   ```javascript
   const postId = 1;
   const response = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
   ```

2. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Mostrar los comentarios**: Imprimir en consola los comentarios obtenidos.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un arreglo de comentarios asociados al post con ID 1, cada uno con su respectivo ID, nombre, correo y cuerpo.

![alt text](image-4.png)

---

## Ejercicio 5: Usar Promise.all para obtener datos relacionados

**Descripción**  
Obtener tanto los posts como los usuarios usando `Promise.all`.

1. **Crear las solicitudes Fetch**: Hacer dos peticiones para obtener posts y usuarios.
   ```javascript
   const postsFetch = fetch("https://jsonplaceholder.typicode.com/posts");
   const usersFetch = fetch("https://jsonplaceholder.typicode.com/users");
   ```

2. **Usar Promise.all**: Ejecutar ambas promesas en paralelo y esperar a que ambas finalicen.
   ```javascript
   Promise.all([postsFetch, usersFetch]);
   ```

3. **Transformar respuestas a JSON**: Converir ambas respuestas a JSON.
   ```javascript
   .then(responses => Promise.all(responses.map(res => res.json())));
   ```

4. **Mostrar ambos resultados**: Imprimir en consola tanto los posts como los usuarios.
   ```javascript
   .then(([posts, users]) => {
     console.log('Posts:', posts);
     console.log('Usuarios:', users);
   });
   ```

**Resultados esperados**  
Dos listas: una de posts y otra de usuarios, mostradas en la consola.

![alt text](image-5.png)

---

## Ejercicio 6: Filtrar posts por usuario

**Descripción**  
Obtener todos los posts y filtrar aquellos que pertenecen a un usuario específico.

1. **Hacer la solicitud Fetch para obtener posts**: Usa `fetch` para obtener todos los posts.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/posts");
   ```

2. **Transformar la respuesta a JSON**: Convertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Filtrar por ID de usuario**: Filtrar los posts para un usuario específico, por ejemplo, el usuario con ID 1.
   ```javascript
   .then(data => {
     const userPosts = data.filter(post => post.userId === 1);
     console.log(userPosts);
   });
   ```

**Resultados esperados**  
Una lista de posts que pertenecen al usuario con ID 1.

![alt text](image-6.png)

---

## Ejercicio 7: Manejar errores en las solicitudes

**Descripción**  
Obtener posts y manejar errores en caso de que la solicitud falle.

1. **Hacer la solicitud Fetch**: Usar `fetch` para obtener posts.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/posts");
   ```

2. **Transformar la respuesta a JSON y manejar errores**: Verificar si la respuesta fue exitosa y lanza un error si no lo fue.
   ```javascript
   response.then(res => {
     if (!res.ok) {
       throw new Error('Error al obtener posts');
     }
     return res.json();
   });
   ```

3. **Imprimir los datos o el error**: Imprimir en consola los posts o el mensaje de error.
   ```javascript
   .then(data => console.log(data))
   .catch(error => console.error(error));
   ```

**Resultados esperados**  
Los posts obtenidos en caso de éxito, o un mensaje de error si la solicitud falla.

![alt text](image-7.png)

---

## Ejercicio 8: Obteniendo y agrupando datos

**Descripción**  
Obtener los comentarios y agruparlos por post ID.

1. **Hacer la solicitud Fetch para obtener comentarios**: Usar `fetch` para obtener todos los comentarios.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/comments");
   ```

2. **Transformar la respuesta a JSON**: Conviertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Agrupar comentarios por post ID**: Usar `reduce` para agrupar comentarios por el ID del post.
   ```javascript
   .then(data => {
     const groupedComments = data.reduce((acc, comment) => {
       (acc[comment.postId] = acc[comment.postId] || []).push(comment);
       return acc;
     }, {});
     console.log(groupedComments);
   });
   ```

**Resultados esperados**  
Un objeto que contiene comentarios agrupados por el ID de su post correspondiente.

![alt text](image-8.png)

