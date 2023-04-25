# MENSAJERÍA CON WEBPACK

-   Crear tres archivos javascript que contengan una variable por cada archivo llamadas mensaje1, mensaje2 y mensaje3 respectivamente.
-   En cada archivo, cargar la variable con un frase y representarla en consola luego de:
    -   Un segundo para el caso del mensaje 1.
    -   Dos segundos para el mensaje 2.
    -   Tres segundos para el mensaje 3.
-   Crear un proyecto que permita utilizar webpack como dependencia de desarrollo para empaquetar los tres archivos en uno sólo.
-   Escribir el script correspondiente para ejecutar el proceso automático, generando la versión de producción del proyecto.

<br />

---

---

<br />

Inicializar el proyecto  
`npm init`

Instalar webpack  
`npm i webpack`

Instalar webpack cli para ejecutarlo desde la consola  
`npm i webpack-cli`

Crear script

```javascript
"scripts": {
   "build": "webpack ./file1.js ./file2.js ./file3.js --mode=production",
   "dev": "webpack ./file1.js ./file2.js ./file3.js --mode=development"
 },
```

Ejecutar script  
`npm run build` o `npm run dev`
