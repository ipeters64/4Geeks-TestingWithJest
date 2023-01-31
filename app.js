// app.js file content
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// one Euro is:
const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = (valueInDollar/oneEuroIs.USD) * oneEuroIs.JPY;
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = (valueInYen/oneEuroIs.JPY) * oneEuroIs.GBP;
    return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};