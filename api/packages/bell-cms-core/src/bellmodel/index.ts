import {BellModelInterface} from "./BellModelInterface";

export abstract class BellModel implements BellModelInterface {
    protected abstract fillable: Array<any>;
    protected abstract table: string;

    constructor() {

    }

    save(): void {

    }

    find(): void {

    }

    update(): void {

    }

    delete(): void {

    }
}
