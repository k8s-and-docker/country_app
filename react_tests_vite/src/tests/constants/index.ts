import type {IUser, IUserSingle} from "models";
import type {RootState} from "../../store";

export const USERS_DATA: IUser[] = [
    {
        "id": 1,
        "name": "Leanne Graham"
    },
    {
        "id": 2,
        "name": "Ervin Howell"
    },
    {
        "id": 3,
        "name": "Clementine Bauch"
    }
]

export const USER_DATA: IUserSingle = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

export const MOCKED_USER: IUserSingle = {
    "id": 12345,
    "name": "Hedgerock Testov",
    "username": "Hedge",
    "email": "hedgerock@gmail.com",
    "address": {
        "street": "Alexandra Polya",
        "suite": "382",
        "city": "Dnipro",
        "zipcode": "53255",
        "geo": {
            "lat": "-39.3259",
            "lng": "84.1496"
        }
    },
    "phone": "+380-50-111-11-11",
    "website": "hedgerock.io",
    "company": {
        "name": "Super company",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

export const MOCK_STATE: RootState = {
    counter: {
        value: 0
    }
}