import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../store/CartSlice.jsx';

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
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>
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
