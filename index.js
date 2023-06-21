const ftp = require('basic-ftp');

// Configuración del servidor FTP
const server = {
    host: '192.168.10.211',
    user: 'sluser',
    password: 'M1ddl3w4r3',
};

async function downloadFile(remotePath, localPath) {
    const client = new ftp.Client();

    try {
        await client.access(server);
        // console.log(client);
        await client.downloadTo(localPath, remotePath);
        console.log('Archivo descargado correctamente.');
    } catch (err) {
        console.error('Error al descargar el archivo:', err);
    } finally {
        client.close();
    }
}

// Ejemplo de descarga de un archivo
const remoteFilePath = '//luis arias.PNG';
const localFilePath = 'C://DEVS//ftp//img//luis arias.PNG'

downloadFile(remoteFilePath, localFilePath);
