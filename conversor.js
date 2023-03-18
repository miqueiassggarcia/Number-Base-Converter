const correspondences = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
}

function convertFromDecimal(value, numeral) {
    if(!Number.isInteger(value)) {
        var integerValue = Math.trunc(value)
        var floatValue = value - Math.trunc(value)
    } else {
        var integerValue = Math.trunc(value)
    }

    let restsInts = []
    let restsFloat = []

    while (integerValue > 0) {
        if(integerValue % numeral > 9) {
            restsInts.push(correspondences[integerValue % numeral])
        } else {
            restsInts.push(integerValue % numeral)
        }

        integerValue = Math.floor(integerValue / numeral)
    }

    if(!Number.isInteger(value)) {
        while (floatValue > 0) {
            floatValue *= numeral
            console.log(floatValue)
            
            restsFloat.push(Math.trunc(floatValue))
            floatValue -= Math.trunc(floatValue)
        }
    }

    restsFloat = restsFloat.map((value) => {
        if(value >= 10 && value <= 15) {
            return correspondences[value]
        } else {
            return value
        }
    })

    return restsInts.reverse().join("") + "." + restsFloat.join("")
}

function getKeyByValueOfCorrespondences(value) {
    for(const obj in correspondences) {
        if(correspondences[obj] == value) {
            return obj
        }
    }
}

function powNumbersOfVetor(vetorNumbers, numeral, negative = false) {
    return vetorNumbers.reduce((result, value, index) =>
        {if(value >= "A" && value <= "F") {
            return result += getKeyByValueOfCorrespondences(value) * Math.pow(numeral, (index + negative ? 1 : 0) * negative ? -1 : 1)
        }else {
            return result += Number(value) * Math.pow(numeral, (index + negative ? 1 : 0) * negative ? -1 : 1)
        }}
    , 0)
}

function convertToDecimal(value, numeral) {
    let result = ""

    if(String(value).includes(".")) {
        valueSplit = String(value).split(".")
        var intValueParse = valueSplit[0].toUpperCase().split("").reverse()
        result = powNumbersOfVetor(intValueParse, numeral);

        var floatValueParse = valueSplit[1].toUpperCase().split("")
        result += powNumbersOfVetor(floatValueParse, numeral, true);
    }
    else {
        var intValueParse = String(value).toUpperCase().split("").reverse()
        result = powNumbersOfVetor(intValueParse, numeral);
    } 

    return result
}

// console.log(convertToDecimal(11100101001, 2) + " Expect 1833")
// if(convertToDecimal(11100101001, 2) == 1833) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal(10102102101, 3) + " Expect 67375")
// if(convertToDecimal(10102102101, 3) == 67375) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal(10321133023, 4) + " Expect 1284043")
// if(convertToDecimal(10321133023, 4) == 1284043) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal(32401431243, 5) + " Expect 34795823")
// if(convertToDecimal(32401431243, 5) == 34795823) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal(40534150345, 6) + " Expect 251303609")
// if(convertToDecimal(40534150345, 6) == 251303609) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal(14362014362, 7) + " Expect 466364600")
// if(convertToDecimal(14362014362, 7) == 466364600) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal(47630214670, 8) + " Expect 5341518264")
// if(convertToDecimal(47630214670, 8) == 5341518264) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal(74268014768, 9) + " Expect 26076225653")
// if(convertToDecimal(74268014768, 9) == 26076225653) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal(49784870487, 10) + " Expect 49784870487")
// if(convertToDecimal(49784870487, 10) == 49784870487) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal("74621850A43", 11) + " Expect 192322025030")
// if(convertToDecimal("74621850A43", 11) == 192322025030) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal("7462B850A43", 12) + " Expect 456747166419")
// if(convertToDecimal("7462B850A43", 12) == 456747166419) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal("7C62B850A43", 13) + " Expect 1097339526572")
// if(convertToDecimal("7C62B850A43", 13) == 1097339526572) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal("7C62B85DA43", 14) + " Expect 2281868064843")
// if(convertToDecimal("7C62B85DA43", 14) == 2281868064843) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal("7CE2B85DA43", 15) + " Expect 4534226905563")
// if(convertToDecimal("7CE2B85DA43", 15) == 4534226905563) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }

// console.log(convertToDecimal("FCE2B85DA43", 16) + " Expect 17378167872067")
// if(convertToDecimal("FCE2B85DA43", 16) == 17378167872067) {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }


// console.log(convertFromDecimal(1833, 2) + " Expect 11100101001")
// if(convertFromDecimal(1833, 2) == "11100101001") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(67375, 3) + " Expect 10102102101")
// if(convertFromDecimal(67375, 3) == "10102102101") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(1284043, 4) + " Expect 10321133023")
// if(convertFromDecimal(1284043, 4) == "10321133023") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(34795823, 5) + " Expect 32401431243")
// if(convertFromDecimal(34795823, 5) == "32401431243") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(251303609, 6) + " Expect 40534150345")
// if(convertFromDecimal(251303609, 6) == "40534150345") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(466364600, 7) + " Expect 14362014362")
// if(convertFromDecimal(466364600, 7) == "14362014362") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(5341518264, 8) + " Expect 47630214670")
// if(convertFromDecimal(5341518264, 8) == "47630214670") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(26076225653, 9) + " Expect 74268014768")
// if(convertFromDecimal(26076225653, 9) == "74268014768") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(49784870487, 10) + " Expect 49784870487")
// if(convertFromDecimal(49784870487, 10) == "49784870487") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(192322025030, 11) + " Expect 74621850A43")
// if(convertFromDecimal(192322025030, 11) == "74621850A43") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(456747166419, 12) + " Expect 7462B850A43")
// if(convertFromDecimal(456747166419, 12) == "7462B850A43") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(1097339526572, 13) + " Expect 7C62B850A43")
// if(convertFromDecimal(1097339526572, 13) == "7C62B850A43") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(2281868064843, 14) + " Expect 7C62B85DA43")
// if(convertFromDecimal(2281868064843, 14) == "7C62B85DA43") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(4534226905563, 15) + " Expect 7CE2B85DA43")
// if(convertFromDecimal(4534226905563, 15) == "7CE2B85DA43") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }
// console.log(convertFromDecimal(17378167872067, 16) + " Expect FCE2B85DA43")
// if(convertFromDecimal(17378167872067, 16) == "FCE2B85DA43") {
//     console.log("passed!")
// } else {
//     console.log("\x1B[31mrefused!")
// }