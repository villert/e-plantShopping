import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function App() {
  const [view, setView] = useState('home');
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = useMemo(
    () => Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );
  const totalCost = useMemo(
    () =>
      Object.values(cartItems).reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      ),
    [cartItems]
  );

  return (
    <div className="app-shell">
      <header className="hero-banner">
        <div>
          <h1>Paradise Nursery</h1>
          <p>Your online plant shop for home, office, and garden living spaces.</p>
        </div>
        <div className="hero-actions">
          <button onClick={() => setView('plants')}>Browse Plants</button>
          <button onClick={() => setView('about')}>About Us</button>
        </div>
      </header>

      <nav className="main-nav">
        <button onClick={() => setView('home')}>Home</button>
        <button onClick={() => setView('plants')}>Plants</button>
        <button onClick={() => setView('cart')}>
          Cart <span className="cart-badge">{totalCount}</span>
        </button>
        <button onClick={() => setView('about')}>About</button>
      </nav>

      <main className="main-content">
        {view === 'home' && (
          <section className="home-panel">
            <h2>Welcome to Paradise Nursery</h2>
            <p>
              Explore beautiful houseplants, add your favorites to the cart, and manage your
              order with ease.
            </p>
            <div className="home-cards">
              <div className="home-card">
                <h3>Discover Plants</h3>
                <p>Browse three categories of best-selling houseplants with pricing and details.</p>
              </div>
              <div className="home-card">
                <h3>Easy Cart Experience</h3>
                <p>Track quantity, update items, or remove a plant in one smooth shopping flow.</p>
              </div>
              <div className="home-card">
                <h3>Coming Soon</h3>
                <p>Checkout support is shown in the cart as a future-ready experience.</p>
              </div>
            </div>
          </section>
        )}

        {view === 'plants' && <ProductList onContinue={() => setView('cart')} />}

        {view === 'cart' && (
          <section className="cart-page">
            <div className="cart-header">
              <div>
                <h2>Shopping Cart</h2>
                <p>{totalCount} plant{totalCount !== 1 ? 's' : ''} in your cart</p>
              </div>
              <button className="secondary" onClick={() => setView('plants')}>
                Continue Shopping
              </button>
            </div>

            <div className="cart-list">
              {totalCount === 0 && <p>Your cart is empty. Head to Plants to add something green.</p>}
              {Object.values(cartItems).map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {totalCount > 0 && (
              <div className="cart-summary">
                <div>
                  <p>Total items: <strong>{totalCount}</strong></p>
                  <p>Total cost: <strong>${totalCost.toFixed(2)}</strong></p>
                </div>
                <div className="checkout-panel">
                  <button disabled>Checkout</button>
                  <span className="coming-soon">Coming Soon</span>
                </div>
              </div>
            )}
          </section>
        )}

        {view === 'about' && <AboutUs />}
      </main>
    </div>
  );
}

export default App;
