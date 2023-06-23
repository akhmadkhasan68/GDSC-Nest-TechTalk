import { config } from "src/config";
import { DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Category } from "./entities/category.entity";
import { Book } from "./entities/book.entity";

export const databaseConfig: DataSourceOptions = {
    type: 'mysql',
    host: config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    entities: [
        User,
        Category,
        Book
    ],
    synchronize: true
}
