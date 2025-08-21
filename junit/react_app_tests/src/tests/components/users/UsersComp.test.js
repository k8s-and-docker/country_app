import {render, screen} from "@testing-library/react";
import {UsersComp} from "../../../components/users/UsersComp";
import {USERS_DATA} from "../../constants";
import axios from "axios";

jest.mock('axios');

describe("Test UsersComp", () => {
    let response;

    beforeEach(() => {
        response = USERS_DATA;
    })

    test("Show content", async () => {
        axios.get.mockReturnValue(response);
        render(<UsersComp />);
        const users = await screen.findAllByTestId("user-item");
        expect(users.length).toBe(3);
        expect(axios.get).toHaveBeenCalledTimes(1);
    })

})