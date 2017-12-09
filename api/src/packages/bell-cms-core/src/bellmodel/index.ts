import {BellModelInterface} from "./BellModelInterface";
import {Builder} from "./Builder";

export abstract class BellModel extends Builder implements BellModelInterface {
    protected abstract table: string;

    protected queryBuilder: string;

    /**
     * Insert data into a table.
     *
     * @param {object} data
     * @param callback
     */
    save(data: object, callback: any): void {
        let query: string = super.insertQuery(this.table, data);
        return super.query(query, callback);
    }

    /**
     * Select columns.
     *
     * @param {string} columns
     * @returns {any}
     */
    select(columns: string): any {
        this.queryBuilder = super.selectQuery(this.table, columns);

        return this;
    }

    /**
     * Generate where clause.
     *
     * @param {string} statement
     * @param {boolean} update
     * @returns {any}
     */
    where(statement: string, update: boolean = false): any {
        if (this.queryBuilder === undefined) {
            this.queryBuilder = super.selectQuery(this.table, "*");
        }

        if (this.queryBuilder.indexOf("AND", this.queryBuilder.length - 3) > -1) {
            this.queryBuilder += ` ${statement} AND`;
        } else {
            this.queryBuilder += ` WHERE ${statement} AND`;
        }

        return this;
    }

    /**
     * Query the actual result.
     *
     * @param callback
     */
    get(callback: any): void {
        if (this.queryBuilder === undefined) {
            this.queryBuilder = super.selectQuery(this.table, "*");
        } else {
            this.queryBuilder = super.cleanUp(this.queryBuilder);
        }

        return super.query(this.queryBuilder, callback);
    }

    /**
     * Get the specific data by ID.
     *
     * @param {number} ID
     * @param callback
     */
    findById(ID: number, callback: any): void {
        const where: string = ` WHERE id = '${ID}'`;

        if (this.queryBuilder === undefined) {
            this.queryBuilder = super.selectQuery(this.table, "*");
        }

        this.queryBuilder += where;

        return super.query(this.queryBuilder, callback);
    }

    /**
     * Get a single datum.
     *
     * @param callback
     */
    getOne(callback: any): void {
        if (this.queryBuilder === undefined) {
            this.queryBuilder = super.selectQuery(this.table, "*");
        } else {
            this.queryBuilder = super.cleanUp(this.queryBuilder);
        }

        this.queryBuilder += " LIMIT 1";

        return super.query(this.queryBuilder, callback);
    }

    update(data: object, callback: Event): void {

    }

    delete(): void {

    }

    /**
     * Get result group by a column.
     *
     * @param {string} column
     * @returns {any}
     */
    groupBy(column: string): any {
        if (this.queryBuilder === undefined) {
            this.queryBuilder = super.selectQuery(this.table, "*");
        }

        this.queryBuilder = super.cleanUp(this.queryBuilder);
        this.queryBuilder += ` GROUP BY ${column}`;

        return this;
    }

    /**
     * Order by result.
     *
     * @param {string} statement
     * @returns {any}
     */
    orderBy(statement: string): any {
        if (this.queryBuilder === undefined) {
            this.queryBuilder = super.selectQuery(this.table, "*");
        }

        this.queryBuilder = super.cleanUp(this.queryBuilder);
        this.queryBuilder += ` ORDER BY ${statement}`;

        return this;
    }
}
