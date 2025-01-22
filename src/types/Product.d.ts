export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isaddded: boolean;
  rating: {
    rate: number;
    count: number;
  };
}
