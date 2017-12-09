import {db} from "../database";

export class Builder {
    /**
     * Run query.
     *
     * @param {string} query
     * @param handler
     */
    protected query(query: string, handler: any) {
        db.query(query, handler);
    }

    /**
     * Run `INSERT INTO <database>` query.
     *
     * @param {string} table
     * @param data
     * @returns {string}
     */
    protected insertQuery(table: string, data: any): string {
        let query: string = `INSERT INTO ${table} `;
        let columns: string = "(";
        let values: string = "VALUES (";

        for (let key in data) {
            columns += `${key}, `;
            values += `'${data[key]}', `;
        }

        columns = columns.replace(/, +$/, "");
        columns += ")";
        values = values.replace(/, +$/, "");
        values += ")";
        query += columns;
        query += values;

        return query;
    }

    /**
     * Run query to select columns.
     *
     * @param {string} table
     * @param {string} columns
     * @returns {string}
     */
    protected selectQuery(table: string, columns: string): string {
        const query: string = `SELECT ${columns} from ${table}`;

        return query;
    }

    /**
     * Run query to update a table.
     *
     * @param {string} table
     * @param data
     * @returns {string}
     */
    protected updateQuery(table: string, data: any): string {
        let query: string = `UPDATE ${table} SET `;

        for (let key in data) {
            query += `${key} = '${data[key]}', `;
        }

        query += query.replace(/, +$/, "");

        return query;
    }

    /**
     * Clean up & prepare the current built query.
     *
     * @param {string} query
     * @returns {string}
     */
    protected cleanUp(query: string): string {
        if (query.indexOf("AND", query.length - 3) > -1) {
            query = query.replace(/AND+$/, "");
        }

        return query;
    }
}