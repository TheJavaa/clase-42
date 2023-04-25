# Lectura y escritura con promises

-   Realizar un programa que ejecute las siguientes tareas:

1. Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info.
2. Mostrar este objeto info en la consola.
3. Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
4. Mostrar los errores por consola.

**Aclaraciones**:
Trabajar con fs.promises (then/catch).

**Ayuda**:
Para el punto 3 considerar usar `JSON.stringify(info.contenidoObj, null,2)` para preservar el formato de representación del objeto en el archivo.
