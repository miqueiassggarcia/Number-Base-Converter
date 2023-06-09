// JSON de correspondecias hexadecimais
const correspondences = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
}

// Função de conversão de números decimais para as demais bases
function convertFromDecimal(value, finalBase) {
    // Testar se é inteiro ou float
    if(!Number.isInteger(value)) {
        var integerValue = Math.trunc(value)

        var floatValue = Number("0." + String(value).split(".")[1])
    } else {
        var integerValue = value
    }

    let restsInts = []
    let restsFloat = []

    // Relizando divisão para a adição dos restos ao vetor
    while (integerValue > 0) {
        if(integerValue % finalBase >= 10 && integerValue % finalBase <= 15) {
            restsInts.push(correspondences[integerValue % finalBase])
        } else {
            restsInts.push(integerValue % finalBase)
        }

        integerValue = Math.floor(integerValue / finalBase)
    }

    // Realização das multiplicações caso o número seja float
    if(!Number.isInteger(value)) {
        var intPart
        while (floatValue > 0) {
            floatValue *= finalBase
            intPart = Math.trunc(floatValue)

            if(intPart >= 10 && intPart <= 15) {
                restsFloat.push(correspondences[intPart])
            } else {
                restsFloat.push(intPart)
            }

            floatValue -= Math.trunc(floatValue)
        }
        return restsInts.reverse().join("") + "." + restsFloat.join("")
    } else {
        return restsInts.reverse().join("")
    }
}

// Função para retornar a correspondencia hexadecimal
function getKeyByValueOfCorrespondences(value) {
    for(const obj in correspondences) {
        if(correspondences[obj] == value) {
            return obj
        }
    }
}

// Função para realizar potenciação de um vetor
function powNumbersOfVetor(vetorNumbers, inicialBase, negative = false) {
    var numberToInvertIndex = 1
    var numberToIncrementIndex = 0
    // Deixar expoente negativo caso o número seja float
    if(negative) {
        numberToInvertIndex = -1
        numberToIncrementIndex = 1
    }

    return vetorNumbers.reduce((result, value, index) =>
        {if(value >= "A" && value <= "F") {
            return result += getKeyByValueOfCorrespondences(value) * Math.pow(inicialBase, (index + numberToIncrementIndex) * numberToInvertIndex)
        }else {
            return result += Number(value) * Math.pow(inicialBase, (index + numberToIncrementIndex) * numberToInvertIndex)
        }}
    , 0)
}

// Função para converter todas as bases para a base decimal
function convertToDecimal(value, inicialBase) {
    let result = ""

    if(String(value).includes(".")) {
        valueSplit = String(value).split(".")
        var intValueParse = valueSplit[0].toUpperCase().split("").reverse()
        result = powNumbersOfVetor(intValueParse, inicialBase);

        var floatValueParse = valueSplit[1].toUpperCase().split("")
        result += powNumbersOfVetor(floatValueParse, inicialBase, true);
    }
    else {
        var intValueParse = String(value).toUpperCase().split("").reverse()
        result = powNumbersOfVetor(intValueParse, inicialBase);
    } 

    return result
}

// Função para validar a entrada pelo forms
function validateInputNumbers(numbers) {
    return String(numbers).toUpperCase().split("").every(value => {
        if(value >= "A" && value <= "F") {
            intValue = getKeyByValueOfCorrespondences(value)
            return intValue >= 0 && intValue < Number(inicialBase.value)
        } else if(value >= 0 && value < Number(inicialBase.value)) {
            return true
        } else {
            return false
        }
    })
}