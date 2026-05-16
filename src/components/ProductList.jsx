import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice.jsx';

const plantCatalog = [
  {
    category: 'Tropical Foliage',
    plants: [
      {
        id: 'tropical-1',
        name: 'Calathea Orbifolia',
        price: 32.0,
        image: 'https://images.unsplash.com/photo-1516496636080-559d6e0e8f48?auto=format&fit=crop&w=600&q=80',
        description: 'A bold green and silver foliage plant for bright indirect light.',
      },
      {
        id: 'tropical-2',
        name: 'Monstera Deliciosa',
        price: 28.0,
        image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80',
        description: 'A classic split-leaf plant with dramatic tropical appeal.',
      },
      {
        id: 'tropical-3',
        name: 'Philodendron Brasil',
        price: 22.0,
        image: 'https://images.unsplash.com/photo-1519160558534-579f3ffce00a?auto=format&fit=crop&w=600&q=80',
        description: 'Bright green and chartreuse leaves add color and texture.',
      },
      {
        id: 'tropical-4',
        name: 'Bird of Paradise',
        price: 45.0,
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
        description: 'A striking plant with architectural leaves and tropical form.',
      },
      {
        id: 'tropical-5',
        name: 'ZZ Plant',
        price: 26.0,
        image: 'https://images.unsplash.com/photo-1580910051073-c4b8281fa680?auto=format&fit=crop&w=600&q=80',
        description: 'A low-maintenance plant with glossy, resilient foliage.',
      },
      {
        id: 'tropical-6',
        name: 'Peace Lily',
        price: 24.0,
        image: 'https://images.unsplash.com/photo-1546878461-70c8f1fcdba6?auto=format&fit=crop&w=600&q=80',
        description: 'A gentle indoor plant with elegant white blooms.',
      },
    ],
  },
  {
    category: 'Succulents & Cacti',
    plants: [
      {
        id: 'succulent-1',
        name: 'Echeveria',
        price: 14.0,
        image: 'https://images.unsplash.com/photo-1524594154906-ddf5a682f26f?auto=format&fit=crop&w=600&q=80',
        description: 'A rosette succulent with sculptural leaves and easy care habits.',
      },
      {
        id: 'succulent-2',
        name: 'Haworthia',
        price: 12.0,
        image: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=80',
        description: 'A charming succulent with patterned foliage and compact form.',
      },
      {
        id: 'succulent-3',
        name: 'Aloe Vera',
        price: 18.0,
        image: 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?auto=format&fit=crop&w=600&q=80',
        description: 'A hardy succulent with soothing gel-filled leaves.',
      },
      {
        id: 'succulent-4',
        name: 'String of Pearls',
        price: 20.0,
        image: 'https://images.unsplash.com/photo-1544572571-9371fdb7b2b8?auto=format&fit=crop&w=600&q=80',
        description: 'A trailing succulent with bead-like leaves for shelves and hanging baskets.',
      },
      {
        id: 'succulent-5',
        name: 'Jade Plant',
        price: 16.0,
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80',
        description: 'A popular succulent with thick coin-shaped leaves.',
      },
      {
        id: 'succulent-6',
        name: 'Prickly Pear Cactus',
        price: 30.0,
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80',
        description: 'A bold cactus with flat pads and modern desert style.',
      },
    ],
  },
  {
    category: 'Air-Purifying Plants',
    plants: [
      {
        id: 'air-1',
        name: 'Snake Plant',
        price: 29.0,
        image: 'https://images.unsplash.com/photo-1524594154906-a0ed2046d8d0?auto=format&fit=crop&w=600&q=80',
        description: 'A sculptural plant that thrives in low light and improves air quality.',
      },
      {
        id: 'air-2',
        name: 'Spider Plant',
        price: 19.0,
        image: 'https://images.unsplash.com/photo-1516704864497-60da0a97d8aa?auto=format&fit=crop&w=600&q=80',
        description: 'A classic air-cleaning plant with arching variegated leaves.',
      },
      {
        id: 'air-3',
        name: 'Boston Fern',
        price: 21.0,
        image: 'https://images.unsplash.com/photo-1516910817561-9f1016ff83b8?auto=format&fit=crop&w=600&q=80',
        description: 'A soft fern that freshens indoor air and adds lush texture.',
      },
      {
        id: 'air-4',
        name: 'Rubber Plant',
        price: 35.0,
        image: 'https://images.unsplash.com/photo-1501004318641-6b8e9a2a3b48?auto=format&fit=crop&w=600&q=80',
        description: 'A large-leaf houseplant with deep green glossy foliage.',
      },
      {
        id: 'air-5',
        name: 'Peace Lily',
        price: 24.0,
        image: 'https://images.unsplash.com/photo-1546878461-70c8f1fcdba6?auto=format&fit=crop&w=600&q=80',
        description: 'Known for air-purifying properties and bright white blooms.',
      },
      {
        id: 'air-6',
        name: 'Pothos',
        price: 18.0,
        image: 'https://images.unsplash.com/photo-1519415943484-c2bf8f3439e2?auto=format&fit=crop&w=600&q=80',
        description: 'A resilient vine that trails beautifully and cleans indoor air.',
      },
    ],
  },
];

export function ProductNavbar({ onNavigate }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = useMemo(
    () => Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  return (
    <nav className="product-nav">
      <div className="brand">
        <span className="plant-logo">🌿</span>
        <span>Paradise Nursery</span>
      </div>
      <div className="nav-links">
        <button onClick={() => onNavigate('plants')}>Plants</button>
        <button onClick={() => onNavigate('cart')}>Cart</button>
      </div>
      <div className="cart-status">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{totalCount}</span>
      </div>
    </nav>
  );
}

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const addedIds = useMemo(() => new Set(Object.keys(cartItems)), [cartItems]);

  return (
    <section className="product-page">
      {plantCatalog.map((category) => (
        <div className="product-category" key={category.category}>
          <h3>{category.category}</h3>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <article className="card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <div className="card-body">
                  <div className="card-meta">
                    <h4 className="card-title">{plant.name}</h4>
                    <span>${plant.price.toFixed(2)}</span>
                  </div>
                  <p>{plant.description}</p>
                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={addedIds.has(plant.id)}
                  >
                    {addedIds.has(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
