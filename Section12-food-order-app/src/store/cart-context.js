import React from "react";

const CartContext = React.createContext({
  // This initial data won't be used, but it gives us better auto-completion in the IDE
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
