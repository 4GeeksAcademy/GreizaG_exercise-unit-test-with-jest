const {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');
//Sólo se importa una vez acá arriba
//Debe importarse en el mismo orden en que se exporta
test ('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test ('20 USD to JPY equal 2925', () => {
    let dollarToYen = fromDollarToYen(20);
    expect(dollarToYen).toBe(2925);
})

test ('10 EUR to USD equal 11', () => {
    let euroToDollar = fromEuroToDollar(10);
    expect(euroToDollar).toBe(11);
})

test ('300 JPY to GBP equal 2', () => {
    let yenToPound = fromYenToPound(300);
    expect(yenToPound).toBe(2);
})