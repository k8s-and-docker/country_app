
import type {AxiosResponse} from "axios";
import type {IUser, IUserSingle} from "models";
import $api from "api";

export class UsersService {

    public getUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>("/users");
    }

    public getUser(id: number): Promise<AxiosResponse<IUserSingle>> | null {
        return $api.get<IUserSingle>(`/users/${id}`);
    }

}