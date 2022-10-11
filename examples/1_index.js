//path
const path = require('path')

//separador
console.log(path.sep)
//join
const rutaText = path.join(path.sep,'files','texto.txt')
console.log(rutaText)
//basename
console.log(path.basename(rutaText))
// path relativo /
// path absoluto C:\Users\Usuario\Desktop\practicas\backend
const absolutePath = path.resolve(__dirname, 'files', 'texto.txt')
console.log(absolutePath)