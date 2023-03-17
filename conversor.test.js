import { convertFromDecimal, convertToDecimal } from "./conversor"

test("Return value in decimal", () => {
    expect(convertToDecimal(11100101001, 2)).toBe(1833);
    expect(convertToDecimal(10102102101, 3)).toBe(67375);
    expect(convertToDecimal(10321133023, 4)).toBe(1284043);
    expect(convertToDecimal(32401431243, 5)).toBe(34795823);
    expect(convertToDecimal(40534150345, 6)).toBe(251303609);
    expect(convertToDecimal(14362014362, 7)).toBe(466364600);
    expect(convertToDecimal(47630214670, 8)).toBe(5341518264);
    expect(convertToDecimal(74268014768, 9)).toBe(26076225653);
    expect(convertToDecimal(49784870487, 10)).toBe(49784870487);
    expect(convertToDecimal("74621850A43", 11)).toBe(192322025030);
    expect(convertToDecimal("7462B850A43", 12)).toBe(456747166419);
    expect(convertToDecimal("7C62B850A43", 13)).toBe(1097339526572);
    expect(convertToDecimal("7C62B85DA43", 14)).toBe(2281868064843);
    expect(convertToDecimal("7CE2B85DA43", 15)).toBe(4534226905563);
    expect(convertToDecimal("FCE2B85DA43", 16)).toBe(17378167872067);
})

test("Return a value of a decimal", () => {
    expect(convertFromDecimal(1833, 2)).toBe("11100101001")
    expect(convertFromDecimal(67375, 3)).toBe("10102102101")
    expect(convertFromDecimal(1284043, 4)).toBe("10321133023")
    expect(convertFromDecimal(34795823, 5)).toBe("32401431243")
    expect(convertFromDecimal(251303609, 6)).toBe("40534150345")
    expect(convertFromDecimal(466364600, 7)).toBe("14362014362")
    expect(convertFromDecimal(5341518264, 8)).toBe("47630214670")
    expect(convertFromDecimal(26076225653, 9)).toBe("74268014768")
    expect(convertFromDecimal(49784870487, 10)).toBe("49784870487")
    expect(convertFromDecimal(192322025030, 11)).toBe("74621850A43")
    expect(convertFromDecimal(456747166419, 12)).toBe("7462B850A43")
    expect(convertFromDecimal(1097339526572, 13)).toBe("7C62B850A43")
    expect(convertFromDecimal(2281868064843, 14)).toBe("7C62B85DA43")
    expect(convertFromDecimal(4534226905563, 15)).toBe("7CE2B85DA43")
    expect(convertFromDecimal(17378167872067, 16)).toBe("FCE2B85DA43")
})