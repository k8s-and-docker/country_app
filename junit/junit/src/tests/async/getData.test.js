const getDataTest = require('../../async/getData');
const USER_DATA = require('../constants/getUsersData');
const axios = require("axios");

jest.mock('axios');

describe("Test get data functionality", () => {
    let response;

    beforeEach(() => {
        response = USER_DATA
    });

    test("givenRequest_whenCallFunction_ThenReturnArrayOfIdentificationsAsStrings", async () => {
        axios.get.mockReturnValue(response);
        const result = await getDataTest();

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(result).toEqual(['1', '2', '3']);
    });

    test("givenRequest_whenCallFunction_ThenThrowsAnException", async () => {
        const errorSpy = jest.spyOn(console, "error")
            .mockImplementation(() => {})
        axios.get.mockRejectedValue(new Error("Failed to fetch current request"));
        const result = await getDataTest();

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(result).toBeUndefined();
        expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Failed to fetch"));
    });


    afterEach(() => {
        jest.clearAllMocks();
    });
})