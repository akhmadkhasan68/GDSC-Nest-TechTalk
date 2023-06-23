import { Column, Entity } from "typeorm";
import { ICategory } from "../interaces/category.interface";
import { BaseEntity } from "./base.entity";

@Entity('categories')
export class Category extends BaseEntity implements ICategory {
    @Column()
    name: string;
}
