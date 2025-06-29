'use client';
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
export type CartAction =
  | { type: 'ADD';    payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE'; payload: number/* id */ }
  | { type: 'UPDATE'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR' }