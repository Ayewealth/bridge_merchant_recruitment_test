export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type ProductsType = ProductType[];

type CategoryType =
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing"
  | 'furniture';

export type CategoriesType = CategoryType[];
