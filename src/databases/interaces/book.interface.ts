import { IBaseEntity } from "./base.interface";
import { ICategory } from "./category.interface";

export interface IBook extends IBaseEntity {
    category: ICategory;
    name: string;
    page: number;
    author: string;
    price: number;
}
