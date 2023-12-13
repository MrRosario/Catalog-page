import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { ICart } from "@/types/global";

interface CartItem extends ICart {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: ICart }
  | { type: "REMOVE_FROM_CART"; payload: number };

interface CartContextProps {
  cart: CartState;
  addToCart: (product: ICart) => void;
  removeFromCart: (productId: number) => void;
  totalItems: number;
  subTotalPrice: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];

        if (existingItem.quantity > 1) {
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };

          return {
            ...state,
            cartItems: updatedCartItems,
          };
        } else {
          return {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.id !== action.payload
            ),
          };
        }
      } else {
        console.warn(`Item with id ${action.payload} not found in the cart.`);
        return state;
      }
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const initialState: CartState = {
    cartItems:
      typeof window !== "undefined"
        ? JSON.parse(sessionStorage.getItem("cartItems") || "[]")
        : [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (product: ICart) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const totalPrice = state.cartItems.reduce((acc: number, item: CartItem) => {
    return acc + item.price * item.quantity;
  }, 0);

  const subTotalPrice = state.cartItems.reduce((acc, item: CartItem) => {
    return acc + item.price;
  }, 0);

  const totalItems = state.cartItems.reduce((acc, item: CartItem) => {
    return acc + item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        totalPrice,
        subTotalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
