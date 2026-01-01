import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, total, clearCart, resetCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Products In Cart</h2>
          <h4 className="empty-cart">Your cart is empty</h4>
          <button className="btn clear-btn" onClick={resetCart}>
            Show Products
          </button>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Products In Cart</h2>
      </header>

      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <footer>
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
