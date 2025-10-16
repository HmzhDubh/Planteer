import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, checkout } from '../redux/cartSlice';

function CartView() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name} - {item.quantity}</h3>
          <button onClick={() => dispatch(addToCart(item))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
        </div>
      ))}
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </div>
  );
}
