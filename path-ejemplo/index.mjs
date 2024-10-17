import { dir } from 'console';
import path, { dirname } from 'path';

const filePath = './data/example.txt';

const dirName = path.dirname(filePath);
console.log('Directorio base:', dirname);

const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:' , baseName);

const exName = path.extname(filePath);
console.log('Extension del archivo:', exName);

const newPath = path.join('/user','docs','newfile.txt');