import { Category } from './category';
import { User } from './user';

export interface Advert {
    id: string;
    user: User;
    name: string;
    description: string;
    isActive: boolean;
	imagesIds: string[];
	cost: number;
	email:string
	phone: string;
	location:string
	createdAt:string;
	category: Category;
}
