
//eliminar archivos de una carpeta
fs = require('fs');
const path = 'C://DEVS//ftp//img//';
const files = fs.readdirSync(path);
for (const file of files) {
    fs.unlinkSync(path + file);
}
console.log('Archivos eliminados correctamente.');
