# Solución de los Ejercicios

En este apartado se muestran las soluciones de cada uno de los ejercicios propuestos

---

### Ejercicio 1: Descargar una imagen como Blob

**Descripción**  
Realizar una petición Fetch para descargar una imagen y convertirla en un Blob.

1. **Hacer la solicitud Fetch**: Usa `fetch` para descargar una imagen.
   ```javascript
   const response = fetch("https://via.placeholder.com/150");
   ```

2. **Transformar la respuesta a Blob**: Convierte la respuesta en un Blob.
   ```javascript
   response.then(res => res.blob());
   ```

3. **Crear una URL para el Blob**: Utiliza `URL.createObjectURL` para crear una URL que apunte al Blob.
   ```javascript
   .then(blob => {
       const imageUrl = URL.createObjectURL(blob);
       console.log(imageUrl); // Imprimir la URL del Blob
   });
   ```

**Resultados esperados**  
Una URL que puede ser utilizada para mostrar la imagen descargada.

---

### Ejercicio 2: Descargar y mostrar una imagen en un elemento `<img>`

**Descripción**  
Descargar una imagen y mostrarla en un elemento `<img>` utilizando un Blob.

1. **Hacer la solicitud Fetch**: Usa `fetch` para descargar una imagen.
   ```javascript
   const response = fetch("https://via.placeholder.com/150");
   ```

2. **Transformar la respuesta a Blob**: Convierte la respuesta en un Blob.
   ```javascript
   response.then(res => res.blob());
   ```

3. **Crear una URL para el Blob y asignarla al `<img>`**:
   ```javascript
   .then(blob => {
       const imageUrl = URL.createObjectURL(blob);
       const imgElement = document.createElement("img");
       imgElement.src = imageUrl;
       document.body.appendChild(imgElement); // Agregar la imagen al body
   });
   ```

**Resultados esperados**  
La imagen se mostrará en la página.

---

### Ejercicio 3: Descargar un archivo de texto como Blob

**Descripción**  
Realizar una petición Fetch para descargar un archivo de texto y convertirlo en un Blob.

1. **Hacer la solicitud Fetch**: Usa `fetch` para descargar un archivo de texto.
   ```javascript
   const response = fetch("https://www.example.com/sample.txt");
   ```

2. **Transformar la respuesta a Blob**: Convierte la respuesta en un Blob.
   ```javascript
   response.then(res => res.blob());
   ```

3. **Leer el Blob como texto**: Usa `FileReader` para leer el contenido del Blob.
   ```javascript
   .then(blob => {
       const reader = new FileReader();
       reader.readAsText(blob);
       reader.onload = () => console.log(reader.result); // Imprimir el contenido del archivo
   });
   ```

**Resultados esperados**  
El contenido del archivo de texto se imprimirá en la consola.

---

### Ejercicio 4: Descargar un PDF como Blob

**Descripción**  
Realizar una petición Fetch para descargar un archivo PDF y convertirlo en un Blob.

1. **Hacer la solicitud Fetch**: Usa `fetch` para descargar un PDF.
   ```javascript
   const response = fetch("https://www.example.com/sample.pdf");
   ```

2. **Transformar la respuesta a Blob**: Convierte la respuesta en un Blob.
   ```javascript
   response.then(res => res.blob());
   ```

3. **Crear una URL para el Blob y abrir el PDF**:
   ```javascript
   .then(blob => {
       const pdfUrl = URL.createObjectURL(blob);
       window.open(pdfUrl); // Abrir el PDF en una nueva pestaña
   });
   ```

**Resultados esperados**  
El archivo PDF se abrirá en una nueva pestaña del navegador.

---

### Ejercicio 5: Descargar un archivo de audio como Blob

**Descripción**  
Realizar una petición Fetch para descargar un archivo de audio y reproducirlo.

1. **Hacer la solicitud Fetch**: Usa `fetch` para descargar un archivo de audio.
   ```javascript
   const response = fetch("https://www.example.com/sample.mp3");
   ```

2. **Transformar la respuesta a Blob**: Convierte la respuesta en un Blob.
   ```javascript
   response.then(res => res.blob());
   ```

3. **Crear una URL para el Blob y asignarla a un elemento `<audio>`**:
   ```javascript
   .then(blob => {
       const audioUrl = URL.createObjectURL(blob);
       const audioElement = document.createElement("audio");
       audioElement.src = audioUrl;
       audioElement.controls = true;
       document.body.appendChild(audioElement); // Agregar el elemento de audio al body
   });
   ```

**Resultados esperados**  
Un reproductor de audio se mostrará en la página, permitiendo reproducir el archivo de audio descargado.

---

### Ejercicio 6: Descargar un archivo de video como Blob

**Descripción**  
Realizar una petición Fetch para descargar un archivo de video y reproducirlo.

1. **Hacer la solicitud Fetch**: Usa `fetch` para descargar un archivo de video.
   ```javascript
   const response = fetch("https://www.example.com/sample.mp4");
   ```

2. **Transformar la respuesta a Blob**: Convierte la respuesta en un Blob.
   ```javascript
   response.then(res => res.blob());
   ```

3. **Crear una URL para el Blob y asignarla a un elemento `<video>`**:
   ```javascript
   .then(blob => {
       const videoUrl = URL.createObjectURL(blob);
       const videoElement = document.createElement("video");
       videoElement.src = videoUrl;
       videoElement.controls = true;
       document.body.appendChild(videoElement); // Agregar el elemento de video al body
   });
   ```

**Resultados esperados**  
Un reproductor de video se mostrará en la página, permitiendo reproducir el archivo de video descargado.

---

### Ejercicio 7: Descargar múltiples imágenes y mostrar en una galería

**Descripción**  
Descargar múltiples imágenes como Blobs y mostrarlas en una galería.

1. **Crear un arreglo de URLs de imágenes**: Define un arreglo con las URLs de las imágenes.
   ```javascript
   const imageUrls = [
       "https://via.placeholder.com/150",
       "https://via.placeholder.com/150/0000FF/FFFFFF",
       "https://via.placeholder.com/150/FF0000/FFFFFF"
   ];
   ```

2. **Hacer las solicitudes Fetch**: Usa `Promise.all` para obtener todas las imágenes como Blobs.
   ```javascript
   const fetchPromises = imageUrls.map(url => fetch(url).then(res => res.blob()));
   Promise.all(fetchPromises)
       .then(blobs => {
           blobs.forEach(blob => {
               const imageUrl = URL.createObjectURL(blob);
               const imgElement = document.createElement("img");
               imgElement.src = imageUrl;
               document.body.appendChild(imgElement); // Agregar cada imagen al body
           });
       });
   ```

**Resultados esperados**  
Todas las imágenes se mostrarán en la página, formando una galería.

---

### Ejercicio 8: Descargar un archivo de texto y permitir su descarga

**Descripción**  
Realizar una petición Fetch para descargar un archivo de texto y permitir al usuario descargarlo.

1. **Hacer la solicitud Fetch**: Usa `fetch` para descargar un archivo de texto.
   ```javascript
   const response = fetch("https://www.example.com/sample.txt");
   ```

2. **Transformar la respuesta a Blob**: Convierte la respuesta en un Blob.
   ```javascript
   response.then(res => res.blob());
   ```

3. **Crear un enlace para descargar el Blob**:
   ```javascript
   .then(blob => {
       const link = document.createElement("a");
       const fileUrl = URL.createObjectURL(blob);
       link.href = fileUrl;
       link.download = "sample.txt"; // Nombre del archivo a descargar
       link.innerText = "Descargar archivo de texto";
       document.body.appendChild(link); // Agregar el enlace al body
   });
   ```

**Resultados esperados**  
Un enlace aparecerá en la página, permitiendo al usuario descargar el archivo de texto.
