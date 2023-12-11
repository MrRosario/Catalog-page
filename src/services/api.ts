import { fetcher } from "@/utils/helpers";

export const fetchProducts = async () => {
  try {
    const response = await fetcher("/api/products");
    return response;
  } catch (error) {
    return error;
  }
};
