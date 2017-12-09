import {BellModel} from "../packages/bell-cms-core/src/bellmodel";

class UserModel extends BellModel {
    protected table: string = "users";
}

export const User = new UserModel;