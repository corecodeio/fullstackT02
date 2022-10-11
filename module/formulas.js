const promedio = (numbers) => {
    if (numbers.length === 0) return 0
    return numbers.reduce((prev, curr) => prev + curr) / numbers.length
}
export const PI = 3.14;
export const areaCirculo = (radio)=>{
    return PI * Math.pow(radio,2);
}
export default promedio;
//module.exports.promedio = promedio
//module.exports.PI = PI
/*module.exports = {
    promedio:promedio,
    PI:PI
}*/
//console.log(module)