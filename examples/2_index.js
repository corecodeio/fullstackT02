// file system
const fs = require('fs');
const path = require('path')

const textoPath = path.join('.',path.sep,'files','texto.txt')
console.log(textoPath)
const result = fs.readFileSync(textoPath,'utf-8')
console.log(result)
console.log('aqui')

fs.writeFileSync(textoPath,'- bien y tu?',{flag:'a'})