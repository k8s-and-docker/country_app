const mapArrayToString = (arr) => {
    return arr.filter(el => Number.isInteger(el)).map(String);
}

module.exports = mapArrayToString;