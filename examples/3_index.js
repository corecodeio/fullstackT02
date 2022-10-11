// file system
const fs = require('fs');
const path = require('path')

const textoPath = path.join('.', path.sep, 'files', 'texto.txt')
console.log(textoPath)
fs.readFile(textoPath, 'utf-8', (error, data) => {
    if (error) console.log(`Error: ${error}`)
    console.log(data)
})
console.log('se lee el archivo')
//console.log(result)
//console.log('aqui')

//fs.writeFileSync(textoPath,'- bien y tu?',{flag:'a'})
fs.writeFile(textoPath, '- texto prueba', { flag: 'a' }, (error) => {
    if (error) console.log(`Error: ${error}`)
})