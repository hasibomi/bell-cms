import * as path from "path";

export class Controller {
    /**
     * Load a view file.
     *
     * @param {string} fileWithPath
     * @returns {string}
     */
    public view(fileWithPath: string): string {
        return path.join(__dirname, `../../app/${fileWithPath}.html`);
    }
}
