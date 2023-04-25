Inicializar el proyecto  
`npm init`

Instalar `express`  
`npm install express`

Instalar `ejs`  
`npm install ejs`

Verificar tener instalado `nodemon` de manera global sino instalarlo  
`npm install -g nodemon`

En el `package.json` agregar un script para correr el servidor con `nodemon`

```javascript
"scripts": {
    "dev": "nodemon index.js"
}
```

`index.js` debería ser el nombre del archivo que levanta el servidor

Correr el servidor  
`npm run dev`
