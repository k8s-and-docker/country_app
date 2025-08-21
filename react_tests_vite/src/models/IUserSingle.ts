import type {IUser} from "./IUser.ts";
import type {IAddress} from "./IAddress.ts";
import type {ICompany} from "./ICompany.ts";

export interface IUserSingle extends IUser {
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}