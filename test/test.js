const gukja = require("../gukja-v1.json");

const validateEumhun = (eumhun) => {
  if (!eumhun) return true;
  return Array.isArray(eumhun);
};

const getCpFromChar = (char) => {
  let hex = char.codePointAt(0).toString(16);
  return ("U+" + "0000".substring(0, 4 - hex.length) + hex).toUpperCase();
};

describe("Gukja Test Suite", () => {
  const { chars } = gukja;
  it("All eumhun should be a string array or null", () => {
    for (let charInfo of chars) {
      const { eumhun, char } = charInfo;
      console.log(char, eumhun);
      expect(validateEumhun(eumhun)).toEqual(true);
    }
  });

  it("Character and its unicode codepoint must match", () => {
    for (let charInfo of chars) {
      const { cp, char } = charInfo;
      const calculatedCp = getCpFromChar(char);
      console.log(char, cp, calculatedCp);
      expect(calculatedCp).toEqual(cp);
    }
  });
});
