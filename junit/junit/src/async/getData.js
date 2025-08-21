const axios = require('axios');
const mapArrayToString = require("../functions/mapArrayToString");

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const getIds = response.data.map(user => user.id);
        return mapArrayToString(getIds);
    } catch (e) {
        console.error("Failed to fetch " + e);
    }
}

module.exports = getData;