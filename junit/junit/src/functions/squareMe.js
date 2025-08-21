const squareMe = (int) => {
    if (int === 1) return int;

    return Math.pow(int, 2);
}

module.exports = squareMe;