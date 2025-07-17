//console.log("hola")
// paquetes que vinen con node
const fs = require('fs')
// paquetes de terceros en la carpeta node_modules
const express = require('express');
const quotes = require('random-quotes');

// paquetes o modulos propios dentro de nuestro file system
const mimodulo = require('./mimodulo.js');


//console.log(fs)
const folderName = process.argv[2] || 'proyecto';

fs.mkdirSync(folderName);
fs.mkdirSync(folderName + "/images");
fs.writeFileSync(
  `${folderName}/index.html`,
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="main.js" defer></script>
</head>
<body>
    <h1>Modelo de sitio web</h1>
</body>
</html>`
);
fs.writeFileSync(
  `${folderName}/style.css`,
  `body {
    background-color: brown;
}
`
);
fs.writeFileSync(
  `${folderName}/main.js`,
  `alert("Este es mi sitio web")
`
);
