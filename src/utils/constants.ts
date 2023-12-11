import { routePath } from "@/types/global";

export enum storage_keys {
  cart = "@StoreCart",
}

export const routePaths: routePath[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Product",
    path: "/product",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];
