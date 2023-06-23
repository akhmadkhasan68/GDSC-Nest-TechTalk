import { Column, Entity, ManyToOne } from "typeorm";
import { IBook } from "../interaces/book.interface";
import { ICategory } from "../interaces/category.interface";
import { BaseEntity } from "./base.entity";
import { Category } from "./category.entity";

@Entity('books')
export class Book extends BaseEntity implements IBook {
    @ManyToOne(() => Category, (category) => category.id)
    category: ICategory;

    @Column()
    name: string;

    @Column()
    page: number;

    @Column()
    author: string;

    @Column()
    price: number;
}
