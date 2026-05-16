function AboutUs() {
  return (
    <section className="about-page">
      <h2>About Paradise Nursery</h2>
      <p>
        Paradise Nursery is a friendly online plant shop offering a curated selection of
        houseplants for beginner and seasoned plant parents. Our mission is to make plant
        shopping easy, inspiring, and delightful.
      </p>
      <p>
        We feature a variety of categories including tropical foliage, succulents, and air-purifying
        plants. Each product includes a thumbnail, price, and a simple "Add to Cart" experience.
      </p>
      <p>
        Manage your shopping cart with quantity controls, remove items, and view the total price.
        The checkout flow is clearly marked as coming soon while the rest of the shopping experience
        remains fully interactive.
      </p>
      <div className="home-cards">
        <div className="home-card">
          <h3>Customer Focused</h3>
          <p>Clear product layout and an intuitive cart help shoppers find the right plant quickly.</p>
        </div>
        <div className="home-card">
          <h3>Responsive Design</h3>
          <p>The app works across desktop and mobile screens with responsive layout styling.</p>
        </div>
        <div className="home-card">
          <h3>Organized Catalog</h3>
          <p>Plants are grouped into categories so users can compare and select favorites.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
