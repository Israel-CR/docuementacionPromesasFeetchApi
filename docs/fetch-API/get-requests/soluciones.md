---
sidebar_position: 3
---

# Solución de los Ejercicios
En este apartado se muestran las soluciones de cada uno de los ejercicios propuestos

---
## Ejercicio 1: Obtener datos de una API de usuarios

**Descripción**  
Realizar una petición GET para obtener datos de una API que proporciona información sobre usuarios.

1. **Hacer la solicitud Fetch**: Usar `fetch` para solicitar datos de usuarios desde una API pública.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/users");
   ```

2. **Transformar la respuesta a JSON**: Cuando la promesa se resuelve, conviertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Mostrar la lista de usuarios**: Imprimir en consola el arreglo de usuarios.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Una lista de objetos que representan usuarios, cada uno con atributos como nombre, correo y dirección.

    ![alt text](image.png)

---

## Ejercicio 2: Obtener un post específico

**Descripción**  
Realizar una petición GET para obtener un post específico por su ID.

1. **Hacer la solicitud Fetch**: Usar `fetch` para solicitar un post con un ID específico.
   ```javascript
   const postId = 1;
   const response = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
   ```

2. **Transformar la respuesta a JSON**: Conviertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Mostrar el post**: Imprimir en consola el objeto del post obtenido.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
El objeto del post con ID 1, que incluye título, cuerpo, ID y ID de usuario.

![alt text](image-1.png)

---

## Ejercicio 3: Obtener todos los comentarios

**Descripción**  
Realizar una petición GET para obtener todos los comentarios de una API.

1. **Hacer la solicitud Fetch**: Usar `fetch` para solicitar comentarios.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/comments");
   ```

2. **Transformar la respuesta a JSON**: Conviertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Mostrar los comentarios**: Imprimir en consola el arreglo de comentarios.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Un arreglo de objetos que representan comentarios, cada uno con atributos como ID, nombre, correo y cuerpo.

![alt text](image-2.png)

---

## Ejercicio 4: Obtener publicaciones de un usuario

**Descripción**  
Obtener todos los posts de un usuario específico usando su ID.

1. **Hacer la solicitud Fetch**: Usar `fetch` para solicitar los posts de un usuario.
   ```javascript
   const userId = 1;
   const response = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
   ```

2. **Transformar la respuesta a JSON**: Conviertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Mostrar los posts**: Imprimir en consola los posts del usuario.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Una lista de posts que pertenecen al usuario con ID 1.

![alt text](image-3.png)

---

## Ejercicio 5: Obtener datos de una API de fotos

**Descripción**  
Realizar una petición GET para obtener una lista de fotos desde una API pública.

1. **Hacer la solicitud Fetch**: Usar `fetch` para solicitar datos de fotos.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/photos");
   ```

2. **Transformar la respuesta a JSON**: Conviertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Mostrar la lista de fotos**: Imprimir en consola los datos de las fotos.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
Una lista de objetos que representan fotos, cada uno con atributos como ID, título y URL.

![alt text](image-4.png)

---

## Ejercicio 6: Obtener un álbum específico

**Descripción**  
Realizar una petición GET para obtener un álbum específico por su ID.

1. **Hacer la solicitud Fetch**: Usar `fetch` para solicitar un álbum con un ID específico.
   ```javascript
   const albumId = 1;
   const response = fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
   ```

2. **Transformar la respuesta a JSON**: Conviertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Mostrar el álbum**: Imprimir en consola el objeto del álbum obtenido.
   ```javascript
   .then(data => console.log(data));
   ```

**Resultados esperados**  
El objeto del álbum con ID 1, que incluye título y ID de usuario.

![alt text](image-5.png)

---

## Ejercicio 7: Obtener una lista de publicaciones y filtrarlas por título

**Descripción**  
Obtener todos los posts y filtrar aquellos que contengan una palabra clave en el título.

1. **Hacer la solicitud Fetch**: Usar `fetch` para obtener todos los posts.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/posts");
   ```

2. **Transformar la respuesta a JSON**: Conviertir la respuesta a JSON.
   ```javascript
   response.then(res => res.json());
   ```

3. **Filtrar los posts**: Filtrar los posts que contengan una palabra clave en el título, por ejemplo, "voluptatem".
   ```javascript
   .then(data => {
     const filteredPosts = data.filter(post => post.title.includes("voluptatem"));
     console.log(filteredPosts);
   });
   ```

**Resultados esperados**  
Una lista de posts que contengan "voluptatem" en el título.

![alt text](image-6.png)

---

## Ejercicio 8: Obtener y agrupar comentarios por post

**Descripción**  
Obtener todos los comentarios y agruparlos por el ID del post al que pertenecen.

1. **Hacer la solicitud Fetch para obtener comentarios**: Usar `fetch` para obtener todos los comentarios.
   ```javascript
   const response = fetch("https://jsonplaceholder.typicode.com/comments");
   ```

2. **Transformar la respuesta a JSON**: Conviertit la respuesta a JSON.
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

![alt text](image-7.png)

