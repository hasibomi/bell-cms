import {Connection} from "bell-cms-core";

export function database(): void {
    const connector = new Connection();
    connector.setCredentials({
        "host": process.env.DB_HOST,
        "user": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME
    }).connect((error: any) => {
        if (error) throw error.sqlMessage;
    });
}