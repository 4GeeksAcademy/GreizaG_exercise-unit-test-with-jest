//Función Suma
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

//Función fromDollarToYen
const fromDollarToYen = (usdQty) => {
    return Math.round(usdQty*156.5/1.07)
}

//Función fromEuroToDollar
const fromEuroToDollar = (eurQty) => {
    return Math.round(eurQty*1.07)
}

//Función fromYenTopound
const fromYenToPound = (yenQty) => {
    return Math.round(yenQty*0.87/156.5)
}

// Sólo se exporta una vez
//El mismo orden en que se exporta se debe hacer la importación
module.exports = {sum, fromDollarToYen, fromEuroToDollar,
    fromYenToPound}