import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice.jsx';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-info">
        <div>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p>
            Unit price: <strong>${item.price.toFixed(2)}</strong>
          </p>
          <p>
            Subtotal: <strong>${(item.quantity * item.price).toFixed(2)}</strong>
          </p>
        </div>
        <div className="item-actions">
          <button
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) })
              )
            }
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          >
            +
          </button>
          <button className="secondary" onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;

export function CartTotal() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = Object.values(cartItems).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-total-summary">
      <p>
        Total cart amount: <strong>${totalAmount.toFixed(2)}</strong>
      </p>
    </div>
  );
}
