export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export type routePath = {
  path: string;
  name: string;
};

interface ICart {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
