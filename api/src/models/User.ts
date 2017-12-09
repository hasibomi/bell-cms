import {BellModel} from "bell-cms-core";

class UserModel extends BellModel {
    protected table: string = "users";
}

export const User = new UserModel;