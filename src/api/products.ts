import { IProduct } from "../interface/products";

const url = 'https://fakestoreapi.com/products'

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Error to fetch products!');

    const data = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('Error!');
  }
};

export const fetchSingleProducts = async (id: number | undefined): Promise<IProduct> => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Error to fetch products!');

    const data = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('Error!');
  }
};