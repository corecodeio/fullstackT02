const promedio = (numbers) => {
    if (numbers.length === 0) return 0
    return numbers.reduce((prev, curr) => prev + curr) / numbers.length
}
const PI = 3.14;
//module.exports.promedio = promedio
//module.exports.PI = PI
module.exports = {
    promedio:promedio,
    PI:PI
}
//console.log(module)