export interface BellModelInterface {
    /**
     * Blueprint to insert data.
     *
     * @param {object} data
     * @param callback
     */
    save(data: object, callback: any): void;

    /**
     * Blueprint to select columns from a table.
     *
     * @param {string} columns
     * @returns {any}
     */
    select(columns: string): any;

    /**
     * Blueprint for where clause.
     *
     * @param {string} statement
     * @returns {any}
     */
    where(statement: string): any;

    /**
     * Blueprint to query a result.
     *
     * @param callback
     */
    get(callback: any): void;

    /**
     * Blueprint to get the specific datum by ID.
     *
     * @param {number} ID
     * @param callback
     */
    findById(ID: number, callback: any): void;

    /**
     * Blueprint to get a single datum.
     *
     * @param callback
     */
    getOne(callback: any): void;

    /**
     * Blueprint to update a single row.
     *
     * @param {object} data
     * @param {Event} callback
     */
    update(data: object, callback: Event): void;

    delete(): void;

    /**
     * Blueprint to group by results by column.
     *
     * @param {string} column
     */
    groupBy(column: string): void;

    /**
     * Blueprint to order results.
     *
     * @param {string} statement
     */
    orderBy(statement: string): void;
}
